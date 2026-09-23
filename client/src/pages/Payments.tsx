import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Loader2,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getAuthenticatedUser, savePersistedUser } from "../data/defaultUsers";
import AccountStatusBadge, { isAccountBlocked } from "../components/AccountStatusBadge";

const recentPayments = [
  { id: 1, name: "Sara Martin", date: "Aujourd'hui, 10:30", amount: -150.00, type: "sent" },
  { id: 2, name: "Facture EDF", date: "Hier, 16:00", amount: -89.40, type: "sent" },
  { id: 3, name: "Loyer", date: "01 Août", amount: -850.00, type: "sent" },
  { id: 4, name: "Lucas Bernard", date: "30 Juil", amount: 200.00, type: "received" },
];

const inputClassName =
  "w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-800 outline-none transition focus:border-[#1BA098] focus:ring-2 focus:ring-[#1BA098]/15";

type ReceiptData = {
  firstName: string;
  lastName: string;
  iban: string;
  swift: string;
  bankCode: string;
  amount: number;
  label: string;
};

export default function Payments() {
  const currentUser = getAuthenticatedUser();
  const currentAccount = currentUser?.accounts.find((account) => account.id === "cc");
  const accountIsBlocked = isAccountBlocked(currentUser?.status);
  const displayedPayments = currentUser?.transactions.map((transaction) => ({
    id: transaction.id,
    name: transaction.type,
    date: transaction.date,
    amount: transaction.amount,
    type: transaction.amount < 0 ? "sent" : "received",
  })) ?? recentPayments;
  const [activeTab, setActiveTab] = useState<"send" | "history">("send");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [iban, setIban] = useState("");
  const [swift, setSwift] = useState("");
  const [bankCode, setBankCode] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [label, setLabel] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | "">("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setIban("");
    setSwift("");
    setBankCode("");
    setAmount("");
    setEmail("");
    setLabel("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (accountIsBlocked) {
      setMessageType("error");
      setMessage("Votre compte est bloqué. Les virements et transferts sont désactivés.");
      return;
    }

    const transferAmount = Number.parseFloat(amount);
    const availableBalance = currentAccount?.balance ?? 0;

    if (!currentUser || !currentAccount) {
      setMessageType("error");
      setMessage("Aucun compte connecté n’est disponible.");
      return;
    }

    if (!Number.isFinite(transferAmount) || transferAmount <= 0) {
      setMessageType("error");
      setMessage("Veuillez saisir un montant supérieur à 0 EUR.");
      return;
    }

    if (transferAmount > availableBalance) {
      setMessageType("error");
      setMessage("Solde insuffisant pour effectuer cette transaction.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-transfer-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, iban, swift, bankCode, amount: transferAmount, email, label }),
      });
      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseData.message || "L’email de confirmation n’a pas pu être envoyé.");
      }

      const operationId = currentUser.transactions.reduce(
        (highestId, transaction) => Math.max(highestId, transaction.id),
        0,
      ) + 1;
      const operationDate = new Intl.DateTimeFormat("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date());
      const recipientReference = iban.replace(/\s/g, "") || "BENEFICIAIRE";
      const updatedUser = {
        ...currentUser,
        accounts: currentUser.accounts.map((account) =>
          account.id === "cc"
            ? { ...account, balance: Number((account.balance - transferAmount).toFixed(2)) }
            : account,
        ),
        transactions: [
          {
            id: operationId,
            type: "Virement sortant",
            reference: recipientReference,
            date: operationDate,
            amount: -transferAmount,
            status: "Effectué",
            category: label.trim() || "Virement",
          },
          ...currentUser.transactions,
        ],
      };

      await savePersistedUser(updatedUser);
      setReceiptData({
        firstName,
        lastName,
        iban,
        swift,
        bankCode,
        amount: transferAmount,
        label: label.trim() || "Virement",
      });
      setShowSuccessModal(true);
      setMessage("");
      resetForm();
    } catch (error) {
      setMessageType("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue pendant le virement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/45 px-6 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1BA098]/10 text-[#1BA098]">
              <Loader2 size={32} className="animate-spin" />
            </div>
            <h2 className="text-lg font-bold text-gray-800">Traitement du virement</h2>
            <p className="mt-2 text-sm text-gray-500">Nous envoyons l’email de confirmation. Veuillez patienter...</p>
          </div>
        </div>
      )}
      <Header title="Paiements" showGreeting={false} />

      <div className="px-5 mt-6">
        <div className="flex rounded-xl bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setActiveTab("send")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === "send" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"
            }`}
          >
            Effectuer un virement
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("history")}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
              activeTab === "history" ? "bg-white text-gray-800 shadow-sm" : "text-gray-500"
            }`}
          >
            Historique
          </button>
        </div>
      </div>

      {activeTab === "send" ? (
        <>
          <div className="px-5 mt-6">
            <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1BA098]/10 text-[#1BA098]">
                <Send size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Prélèvement : Compte courant</p>
                  <AccountStatusBadge status={currentUser?.status} />
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Solde disponible : <span className="text-[#1BA098]">{formatCurrency(currentAccount?.balance ?? 0)}</span>
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 mt-6"
          >
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
              <h2 className="mb-6 text-base font-bold uppercase tracking-wide text-gray-700">Informations du bénéficiaire</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {accountIsBlocked && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
                    Compte bloqué : les virements et transferts sont temporairement indisponibles.
                  </div>
                )}
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Nom</label>
                  <input id="nom" type="text" required placeholder="Ex : Leroy" value={lastName} onChange={(event) => setLastName(event.target.value)} className={inputClassName} />
                </div>

                <div>
                  <label htmlFor="prenom" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Prénom</label>
                  <input id="prenom" type="text" required placeholder="Ex : Martine" value={firstName} onChange={(event) => setFirstName(event.target.value)} className={inputClassName} />
                </div>

                <div>
                  <label htmlFor="iban" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">IBAN du compte destinataire</label>
                  <input id="iban" type="text" required placeholder="MA64 2250 1000 5435 0123 1810" value={iban} onChange={(event) => setIban(event.target.value.toUpperCase())} className={`${inputClassName} font-mono tracking-wide`} />
                </div>

                <div>
                  <label htmlFor="swift" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Code Swift / BIC</label>
                  <input id="swift" type="text" required placeholder="Ex : CNCAMAMRXXX" value={swift} onChange={(event) => setSwift(event.target.value.toUpperCase())} className={`${inputClassName} font-mono`} />
                </div>

                <div>
                  <label htmlFor="banque" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Code banque</label>
                  <input id="banque" type="text" required placeholder="Ex : 225" value={bankCode} onChange={(event) => setBankCode(event.target.value.replace(/[^0-9]/g, ""))} className={inputClassName} />
                </div>

                <div>
                  <label htmlFor="montant" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Montant (EUR)</label>
                  <input id="montant" type="number" required min="1" step="0.01" placeholder="Ex : 1 500.00" value={amount} onChange={(event) => setAmount(event.target.value)} className={`${inputClassName} font-bold`} />
                </div>

                <div>
                  <label htmlFor="dest_mail" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Email du destinataire</label>
                  <input id="dest_mail" type="email" required placeholder="Ex : destinataire@mail.com" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClassName} />
                </div>

                <div>
                  <label htmlFor="libelle" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-gray-500">Libellé du virement</label>
                  <input id="libelle" type="text" placeholder="Ex : Cadeau anniversaire" value={label} onChange={(event) => setLabel(event.target.value)} className={inputClassName} />
                </div>

                {message && (
                  <div className={`rounded-xl px-4 py-3 text-sm ${messageType === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={accountIsBlocked || isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1BA098] px-4 py-3.5 font-bold text-white shadow-md transition hover:bg-[#168b85] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none"
                >
                  <Send size={18} />
                  {accountIsBlocked
                    ? "Virement indisponible — compte bloqué"
                    : isSubmitting
                      ? "Envoi en cours..."
                      : "Effectuer le virement"}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="px-5 mt-6 space-y-2">
          {displayedPayments.map((payment, index) => (
            <motion.div
              key={payment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-xl border border-gray-50 bg-white p-4 shadow-sm"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${payment.type === "sent" ? "bg-red-50" : "bg-green-50"}`}>
                {payment.type === "sent" ? <ArrowUpRight size={16} className="text-red-500" /> : <ArrowDownLeft size={16} className="text-green-500" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800">{payment.name}</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <Clock size={11} className="text-gray-300" />
                  <p className="text-xs text-gray-400">{payment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${payment.type === "sent" ? "text-gray-800" : "text-green-600"}`}>
                  {payment.type === "sent" ? "-" : "+"}{formatCurrency(Math.abs(payment.amount))}
                </p>
                <div className="mt-0.5 flex items-center justify-end gap-1">
                  <CheckCircle2 size={11} className="text-green-500" />
                  <span className="text-[10px] font-medium text-green-500">Terminé</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md overflow-hidden rounded-[28px] border-0 p-0 shadow-2xl">
          <div className="h-1.5 bg-[#e3313d]" />
          <div className="bg-[#006b4f] px-6 py-5 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b7d9cf]">Crédit Agricole du Maroc</p>
            <p className="mt-1 text-sm font-semibold">Confirmation de virement</p>
          </div>
          <div className="space-y-5 p-6">
            <DialogHeader className="items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={34} strokeWidth={2.5} />
              </div>
              <DialogTitle className="mt-1 text-2xl font-extrabold text-gray-900">Virement effectué</DialogTitle>
              <DialogDescription className="text-sm leading-6 text-gray-500">
                Votre opération a été enregistrée avec succès et l’email de confirmation a été envoyé.
              </DialogDescription>
            </DialogHeader>

            {receiptData && (
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm">
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-500">Montant</span>
                  <span className="text-lg font-extrabold text-[#006b4f]">{formatCurrency(receiptData.amount)}</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Bénéficiaire</span><span className="text-right font-semibold text-gray-800">{receiptData.firstName} {receiptData.lastName}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-gray-500">IBAN</span><span className="max-w-[220px] break-all text-right font-mono text-xs font-semibold text-gray-800">{receiptData.iban}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Libellé</span><span className="text-right font-semibold text-gray-800">{receiptData.label}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Statut email</span><span className="font-semibold text-emerald-600">Envoyé</span></div>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button type="button" onClick={() => setShowSuccessModal(false)} className="w-full rounded-2xl bg-[#1BA098] py-6 font-bold text-white hover:bg-[#168b85]">
                Fermer
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
}
