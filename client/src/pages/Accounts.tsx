import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import { CreditCard, Eye, EyeOff, Plus, MoreHorizontal, Wifi } from "lucide-react";
import { useState } from "react";
import { getAuthenticatedUser } from "../data/defaultUsers";
import AccountStatusBadge from "../components/AccountStatusBadge";

type ChipVariant = "gold" | "red";
type CardBrandName = "VISA" | "mastercard";

type CardDesign = {
  id: number;
  accountIndex: number;
  number: string;
  balance: number;
  color: string;
  glow: string;
  brand: CardBrandName;
  expiry: string;
  holder: string;
  chip: ChipVariant;
};

const accounts = [
  { id: 1, name: "Compte Courant", iban: "FR76 3000 6000 0101 0000 0123 456", balance: 8247.50, type: "primary", currency: "EUR" },
  { id: 2, name: "Compte Épargne", iban: "FR76 3000 6000 0101 0000 0789 012", balance: 3500.00, type: "savings", currency: "EUR" },
  { id: 3, name: "Dépôt à terme", iban: "FR76 3000 6000 0101 0000 0345 678", balance: 1100.00, type: "term", currency: "EUR" },
];

const cardDesigns: CardDesign[] = [
  {
    id: 1,
    accountIndex: 0,
    number: "•••• •••• •••• 4521",
    balance: 1247.30,
    color: "from-[#087f79] via-[#16a39a] to-[#82d1c5]",
    glow: "bg-[#b6fff0]/20",
    brand: "VISA",
    expiry: "12/28",
    holder: "JEAN DUPONT",
    chip: "gold",
  },
  {
    id: 2,
    accountIndex: 1,
    number: "•••• •••• •••• 8834",
    balance: 520.80,
    color: "from-[#252d3d] via-[#101827] to-[#050914]",
    glow: "bg-[#ef6b60]/15",
    brand: "mastercard",
    expiry: "06/27",
    holder: "JEAN DUPONT",
    chip: "red",
  },
];

function CardChip({ variant }: { variant: ChipVariant }) {
  const isRed = variant === "red";

  return (
    <div
      className={`relative h-10 w-[3.4rem] overflow-hidden rounded-[10px] border shadow-inner ${
        isRed
          ? "border-[#f7c1bb]/60 bg-gradient-to-br from-[#ffd0c9] via-[#d65c50] to-[#741d24]"
          : "border-[#fff1a4]/70 bg-gradient-to-br from-[#fff3a6] via-[#e0ad3d] to-[#a66c16]"
      }`}
      aria-label={isRed ? "Puce rouge" : "Puce dorée"}
    >
      <span className="absolute inset-y-0 left-1/2 w-px bg-black/20" />
      <span className="absolute inset-x-0 top-1/2 h-px bg-black/20" />
      <span className="absolute -left-1 top-1/2 h-5 w-8 -translate-y-1/2 rounded-full border border-black/20" />
      <span className="absolute -right-1 top-1/2 h-5 w-8 -translate-y-1/2 rounded-full border border-black/20" />
      <span className="absolute left-1/2 top-1/2 h-3 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[4px] border border-black/20" />
    </div>
  );
}

function CardBrand({ brand }: { brand: CardBrandName }) {
  if (brand === "mastercard") {
    return (
      <div className="flex items-center" aria-label="Mastercard">
        <span className="h-7 w-7 rounded-full bg-[#eb554d] shadow-sm" />
        <span className="-ml-3 h-7 w-7 rounded-full bg-[#f2a43f]/95 shadow-sm" />
      </div>
    );
  }

  return <span className="text-[1.35rem] font-black italic tracking-[-0.08em] text-white">VISA</span>;
}

export default function Accounts() {
  const currentUser = getAuthenticatedUser();
  const displayedAccounts = currentUser
    ? currentUser.accounts.map((account) => ({
        id: account.id,
        name: account.type,
        iban: account.number,
        balance: account.balance,
        type:
          account.id === "cc"
            ? "primary"
            : account.id === "livret" || account.id === "livret-jeune"
              ? "savings"
              : "term",
        currency: "EUR",
      }))
    : accounts;
  const [showBalances, setShowBalances] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);
  const accountHolder = currentUser
    ? `${currentUser.prenom} ${currentUser.nom}`.toUpperCase()
    : "TITULAIRE DU COMPTE";

  const displayedCards = cardDesigns.map((card) => {
    const linkedAccount = displayedAccounts[card.accountIndex];
    return {
      ...card,
      // Le nom et le solde viennent directement du compte associé à cette carte.
      name: linkedAccount?.name ?? "Compte non rattaché",
      balance: linkedAccount?.balance ?? 0,
      holder: accountHolder,
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header title="Vos comptes" showGreeting={false} />

      <main className="mx-auto max-w-2xl px-5 pb-6">
        {/* Cards Carousel */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6"
        >
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1BA098]">Moyens de paiement</p>
              <h2 className="mt-1 font-[Poppins] text-sm font-semibold text-gray-800">Vos cartes</h2>
            </div>
            <span className="rounded-full bg-[#e9f7f5] px-3 py-1 text-xs font-semibold text-[#1b7e76]">{displayedCards.length} cartes</span>
          </div>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-3 pt-2 scroll-px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {displayedCards.map((card, i) => (
              <motion.button
                key={card.id}
                type="button"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                onClick={() => setSelectedCard(i)}
                aria-pressed={selectedCard === i}
                className={`group w-[min(320px,calc(100vw-4rem))] shrink-0 snap-center text-left transition-all duration-200 ${
                  selectedCard === i ? "scale-[1.015]" : "opacity-75 hover:opacity-100"
                }`}
              >
                <div className={`relative aspect-[1.586/1] overflow-hidden rounded-[20px] bg-gradient-to-br ${card.color} p-5 shadow-[0_18px_36px_-18px_rgba(10,74,70,0.7)] ${selectedCard === i ? "ring-2 ring-[#1BA098] ring-offset-2 ring-offset-gray-50" : ""}`}>
                  <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-2xl ${card.glow}`} />
                  <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_0%,rgba(255,255,255,0.11)_42%,transparent_58%)] opacity-70" />
                  <div className="absolute inset-x-5 top-1/2 h-px bg-white/10" />
                  <div className="absolute -bottom-16 -left-10 h-36 w-56 rotate-[-18deg] rounded-full border border-white/10" />

                  <div className="relative flex items-start justify-between">
                    <div>
                      <p className="max-w-[190px] truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">{card.name}</p>
                      <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">Compte associé</p>
                    </div>
                    <CardBrand brand={card.brand} />
                  </div>

                  <div className="relative mt-5 flex items-center justify-between">
                    <CardChip variant={card.chip} />
                    <Wifi size={25} strokeWidth={1.5} className="-rotate-90 text-white/80" aria-label="Paiement sans contact" />
                  </div>

                  <p className="relative mt-4 whitespace-nowrap font-mono text-[17px] font-medium tracking-[0.18em] text-white drop-shadow-sm sm:text-[18px]">{card.number}</p>

                  <div className="relative mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.14em] text-white/55">Titulaire</p>
                      <p className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-white">{card.holder}</p>
                    </div>
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.14em] text-white/55">Valable jusqu'au</p>
                      <p className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-white">{card.expiry}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-xl border border-[#d6efec] bg-[#f1fbfa] px-3.5 py-2.5">
                  <p className="text-xs text-gray-400">Solde disponible</p>
                  <p className="font-[Poppins] text-base font-bold text-[#1b7e76]">{showBalances ? `€ ${card.balance.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}` : "€ ••••"}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5" aria-label="Position dans le carrousel">
            {displayedCards.map((card, i) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedCard(i)}
                aria-label={`Afficher la carte ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${selectedCard === i ? "w-5 bg-[#1BA098]" : "w-1.5 bg-gray-300"}`}
              />
            ))}
          </div>
        </motion.section>

        {/* Accounts List */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.16 }} className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-[Poppins] text-sm font-semibold text-gray-800">Comptes bancaires</h2>
            <button
              type="button"
              onClick={() => setShowBalances(!showBalances)}
              className="flex items-center gap-1 text-xs font-medium text-[#1BA098]"
            >
              {showBalances ? <Eye size={14} /> : <EyeOff size={14} />}
              {showBalances ? "Masquer" : "Afficher"}
            </button>
          </div>

          {currentUser && (
            <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <span className="text-sm font-medium text-gray-600">Statut global du compte</span>
              <AccountStatusBadge status={currentUser.status} />
            </div>
          )}

          <div className="space-y-3">
            {displayedAccounts.map((account, i) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1BA098]/10">
                      <CreditCard size={20} className="text-[#1BA098]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{account.name}</p>
                      <p className="font-mono text-xs text-gray-400">{account.iban.slice(0, 20)}...</p>
                    </div>
                  </div>
                  <button type="button" aria-label={`Options pour ${account.name}`} className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-400">Solde disponible</p>
                    <p className="font-[Poppins] text-lg font-bold text-gray-900">
                      {showBalances ? `€ ${account.balance.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}` : "€ ••••••"}
                    </p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    account.type === "primary" ? "bg-[#1BA098]/10 text-[#1BA098]" :
                    account.type === "savings" ? "bg-green-50 text-green-600" :
                    "bg-blue-50 text-blue-600"
                  }`}>
                    {account.type === "primary" ? "Principal" : account.type === "savings" ? "Épargne" : "Terme"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Add Account Button */}
        <div className="mt-6">
          <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#1BA098]/30 py-3.5 text-sm font-medium text-[#1BA098] transition-colors hover:bg-[#1BA098]/5">
            <Plus size={18} />
            Ajouter un compte ou une carte
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
