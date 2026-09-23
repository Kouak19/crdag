import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  CreditCard,
  Eye,
  EyeOff,
  FileText,
  Globe,
  Hash,
  HelpCircle,
  Landmark,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Palette,
  Phone,
  ShieldCheck,
  Smartphone,
  User,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { AUTH_SESSION_KEY, AUTH_USER_KEY, getAuthenticatedUser } from "../data/defaultUsers";
import AccountStatusBadge from "../components/AccountStatusBadge";

const settingsSections = [
  {
    title: "Sécurité",
    items: [
      { icon: Lock, label: "Changer le mot de passe", desc: "Dernière modification il y a 30 jours" },
      { icon: Smartphone, label: "Appareils connectés", desc: "2 appareils actifs" },
      { icon: ShieldCheck, label: "Authentification biométrique", desc: "Face ID activé", hasToggle: true, toggleKey: "biometric" },
      { icon: AlertCircle, label: "Authentification à deux facteurs", desc: "SMS et application d'authentification", hasToggle: true, toggleKey: "twoFactor" },
    ],
  },
  {
    title: "Notifications",
    items: [
      { icon: AlertCircle, label: "Notifications push", desc: "Transactions et alertes", hasToggle: true, toggleKey: "push" },
      { icon: Mail, label: "Communications par email", desc: "Newsletter et mises à jour", hasToggle: true, toggleKey: "email" },
    ],
  },
  {
    title: "Préférences",
    items: [
      { icon: Globe, label: "Langue", desc: "Français" },
      { icon: Palette, label: "Thème", desc: "Clair" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Centre d'aide", desc: "FAQ et support" },
      { icon: FileText, label: "Termes et conditions", desc: "Informations légales" },
    ],
  },
];

type DetailRowProps = {
  icon: typeof User;
  label: string;
  value: string;
  muted?: boolean;
  action?: React.ReactNode;
};

function DetailRow({ icon: Icon, label, value, muted = false, action }: DetailRowProps) {
  return (
    <div className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef8f7] text-[#1BA098]">
        <Icon size={16} strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">{label}</p>
        <p className={`mt-1 break-words text-sm font-medium ${muted ? "text-gray-400" : "text-gray-800"}`}>{value}</p>
      </div>
      {action}
    </div>
  );
}

function SectionCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  children,
}: {
  icon: typeof User;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-gradient-to-r from-[#f6fcfb] to-white px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1BA098] text-white shadow-sm">
            <Icon size={19} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1BA098]">{eyebrow}</p>
            <h2 className="mt-1 text-base font-semibold text-gray-800">{title}</h2>
            <p className="mt-1 text-xs leading-relaxed text-gray-400">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}

export default function Settings() {
  const currentUser = getAuthenticatedUser();
  const displayName = currentUser ? `${currentUser.prenom} ${currentUser.nom}` : "Utilisateur";
  const initials = currentUser ? `${currentUser.prenom[0] ?? ""}${currentUser.nom[0] ?? ""}` : "U";
  const [, setLocation] = useLocation();
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    biometric: true,
    twoFactor: true,
    push: true,
    email: false,
  });

  const toggleVisibility = (field: string) => {
    setRevealed((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const copyValue = async (field: string, value: string) => {
    if (!value || value === "Non renseigné") return;
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 1600);
    } catch {
      setCopiedField(null);
    }
  };

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    setLocation("/login");
  };

  const personalCode = currentUser?.codepersonnel ?? "";
  const iban = currentUser?.rib.iban ?? "";
  const cardNumber = currentUser?.card.number ?? "";
  const maskedPersonalCode = personalCode ? `${personalCode.slice(0, 2)}••••` : "Non renseigné";
  const normalizedIban = iban.replace(/\s+/g, "");
  const maskedIban = iban ? `${normalizedIban.slice(0, 4)} •••• •••• •••• ${normalizedIban.slice(-4)}` : "Non renseigné";
  const maskedCardNumber = cardNumber ? `•••• •••• •••• ${cardNumber.slice(-4)}` : "Non renseigné";
  const lastConnection = currentUser?.lastConnection || "Non renseignée";
  const accountCount = currentUser?.accounts.length ?? 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header title="Paramètres" showGreeting={false} />

      <main className="mx-auto max-w-2xl px-5 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#123f3a] via-[#1b7e76] to-[#1BA098] p-5 text-white shadow-md">
            <div className="absolute -right-10 -top-14 h-36 w-36 rounded-full border-[18px] border-white/10" />
            <div className="absolute -bottom-20 right-14 h-40 w-40 rounded-full border-[22px] border-white/5" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl font-bold ring-4 ring-white/10">
                {initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/65">Profil du compte</p>
                <p className="mt-1 truncate text-xl font-semibold">{displayName}</p>
                <div className="mt-2">
                  <AccountStatusBadge status={currentUser?.status} />
                </div>
              </div>
            </div>
            <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/15 pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/60">Identifiant client</p>
                <p className="mt-1 text-sm font-semibold tracking-wide">{currentUser?.identifiant ?? "-"}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/60">Pays de résidence</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold"><MapPin size={14} />{currentUser?.location ?? "-"}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div id="profile-info" className="mt-6 space-y-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}>
            <SectionCard
              icon={User}
              eyebrow="Titulaire"
              title="Informations du propriétaire"
              description="Les informations personnelles du titulaire principal de ce compte."
            >
              

              <div className="divide-y divide-gray-100">
                <DetailRow icon={User} label="Nom complet" value={displayName} />
                <DetailRow icon={Hash} label="Identifiant client" value={currentUser?.identifiant ?? "Non renseigné"} />
                <DetailRow
                  icon={Lock}
                  label="Code personnel"
                  value={revealed.personalCode ? personalCode || "Non renseigné" : maskedPersonalCode}
                  action={personalCode ? (
                    <button
                      type="button"
                      onClick={() => toggleVisibility("personalCode")}
                      aria-label={revealed.personalCode ? "Masquer le code personnel" : "Afficher le code personnel"}
                      className="mt-1 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[#1BA098]"
                    >
                      {revealed.personalCode ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  ) : undefined}
                />
                <DetailRow icon={MapPin} label="Pays de résidence" value={currentUser?.location ?? "Non renseigné"} />
                <DetailRow icon={Mail} label="Email personnel" value={currentUser?.email ?? "Non renseigné"} muted={!currentUser?.email} />
                <DetailRow icon={Phone} label="Téléphone personnel" value={currentUser?.phone ?? "Non renseigné"} muted={!currentUser?.phone} />
                <DetailRow icon={MapPin} label="Adresse postale" value={currentUser?.address ?? "Non renseignée"} muted={!currentUser?.address} />
                <div className="flex items-center justify-between gap-4 border-b border-gray-100 py-3">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <BadgeCheck size={16} />
                    <span>Statut du compte</span>
                  </div>
                  <AccountStatusBadge status={currentUser?.status} />
                </div>
                <DetailRow icon={Clock3} label="Dernière connexion" value={lastConnection} muted={lastConnection === "Non renseignée"} />
              </div>
            </SectionCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.16 }}>
            <SectionCard
              icon={Building2}
              eyebrow="Accompagnement"
              title="Informations du gestionnaire"
              description="Votre interlocuteur attitré et les informations de suivi disponibles."
            >
              <div className="divide-y divide-gray-100">
                <DetailRow icon={User} label="Gestionnaire attitré" value={currentUser?.manager ?? "Non renseigné"} />
                <DetailRow icon={MapPin} label="Agence de rattachement" value={currentUser?.managerAgency ?? "Non renseignée"} muted={!currentUser?.managerAgency} />
                <DetailRow icon={MapPin} label="Zone de suivi" value={currentUser?.location ?? "Non renseignée"} />
                <DetailRow icon={Mail} label="Email professionnel" value={currentUser?.managerEmail ?? "Non renseigné"} muted={!currentUser?.managerEmail} />
                <DetailRow icon={Phone} label="Téléphone professionnel" value={currentUser?.managerPhone ?? "Non renseigné"} muted={!currentUser?.managerPhone} />
              </div>
              {(!currentUser?.managerEmail || !currentUser?.managerPhone) && (
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 px-3.5 py-3 text-xs leading-relaxed text-amber-700">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <p>Les coordonnées manquantes du gestionnaire doivent être ajoutées directement dans le profil correspondant de <code className="rounded bg-white px-1 py-0.5 font-mono text-[11px]">defaultUsers.ts</code>.</p>
                </div>
              )}
            </SectionCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.22 }}>
            <SectionCard
              icon={WalletCards}
              eyebrow="Produits rattachés"
              title="Comptes du propriétaire"
              description={`${accountCount} compte${accountCount > 1 ? "s" : ""} rattaché${accountCount > 1 ? "s" : ""} à ce profil.`}
            >
              <div className="space-y-2">
                {(currentUser?.accounts ?? []).map((account) => (
                  <div key={account.id} className="flex items-center gap-3 rounded-xl bg-gray-50 px-3.5 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1BA098] shadow-sm">
                      <WalletCards size={17} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-800">{account.type}</p>
                      <p className="mt-0.5 text-xs text-gray-400">{account.number}</p>
                    </div>
                    <p className="shrink-0 text-right text-sm font-semibold text-[#1b7e76]">
                      {account.balance.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.28 }}>
            <SectionCard
              icon={Landmark}
              eyebrow="Données sécurisées"
              title="Coordonnées bancaires"
              description="Les données sensibles sont masquées jusqu'à leur affichage volontaire."
            >
              <div className="divide-y divide-gray-100">
                <DetailRow icon={Landmark} label="Établissement" value={currentUser?.rib.bankName ?? "Non renseigné"} />
                <DetailRow icon={MapPin} label="Domiciliation bancaire" value={currentUser?.rib.bankAddress ?? "Non renseignée"} />
                <DetailRow icon={Hash} label="IBAN" value={revealed.iban ? iban || "Non renseigné" : maskedIban} action={iban ? (
                  <div className="mt-1 flex items-center gap-0.5">
                    <button type="button" onClick={() => toggleVisibility("iban")} aria-label={revealed.iban ? "Masquer l'IBAN" : "Afficher l'IBAN"} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[#1BA098]">
                      {revealed.iban ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button type="button" onClick={() => copyValue("iban", iban)} aria-label="Copier l'IBAN" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[#1BA098]">
                      {copiedField === "iban" ? <Check size={16} className="text-[#1BA098]" /> : <Copy size={16} />}
                    </button>
                  </div>
                ) : undefined} />
                <DetailRow icon={Hash} label="Code banque" value={currentUser?.rib.bankCode ?? "Non renseigné"} />
                <DetailRow icon={Hash} label="Code Agence" value={currentUser?.rib.branchCode ?? "Non renseigné"} />
                <DetailRow icon={Hash} label="Numéro de compte" value={currentUser?.rib.accountNumber ?? "Non renseigné"} />
                <DetailRow icon={Hash} label="Clé RIB" value={currentUser?.rib.key ?? "Non renseigné"} />
                <DetailRow icon={Globe} label="Code SWIFT" value={currentUser?.rib.swift ?? "Non renseigné"} />
              </div>
            </SectionCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.34 }}>
            <SectionCard
              icon={CreditCard}
              eyebrow="Moyen de paiement"
              title="Carte du propriétaire"
              description="La carte associée au compte principal et ses informations de sécurité."
            >
              <div className="divide-y divide-gray-100">
                <DetailRow icon={CreditCard} label="Numéro de carte" value={revealed.card ? cardNumber || "Non renseigné" : maskedCardNumber} action={cardNumber ? (
                  <div className="mt-1 flex items-center gap-0.5">
                    <button type="button" onClick={() => toggleVisibility("card")} aria-label={revealed.card ? "Masquer le numéro de carte" : "Afficher le numéro de carte"} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[#1BA098]">
                      {revealed.card ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button type="button" onClick={() => copyValue("card", cardNumber)} aria-label="Copier le numéro de carte" className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-[#1BA098]">
                      {copiedField === "card" ? <Check size={16} className="text-[#1BA098]" /> : <Copy size={16} />}
                    </button>
                  </div>
                ) : undefined} />
                <DetailRow icon={User} label="Titulaire indiqué" value={currentUser?.card.holder ?? displayName} />
                <DetailRow icon={Clock3} label="Date d'expiration" value={currentUser?.card.expiry ?? "Non renseignée"} />
                <DetailRow icon={BadgeCheck} label="État de la carte" value={currentUser?.card.isBlocked ? "Bloquée" : "Active"} />
              </div>
            </SectionCard>
          </motion.div>
        </div>

        <div className="mt-7 space-y-5">
          {settingsSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + si * 0.06 }}
            >
              <h3 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">{section.title}</h3>
              <div className="divide-y divide-gray-50 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                {section.items.map((item) => (
                  <div key={item.label} className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-gray-50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                      <item.icon size={18} className="text-[#1BA098]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-800">{item.label}</p>
                      <p className="truncate text-xs text-gray-400">{item.desc}</p>
                    </div>
                    {item.hasToggle ? (
                      <button
                        type="button"
                        role="switch"
                        aria-checked={toggles[item.toggleKey ?? ""]}
                        aria-label={item.label}
                        onClick={() => handleToggle(item.toggleKey ?? "")}
                        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${toggles[item.toggleKey ?? ""] ? "bg-[#1BA098]" : "bg-gray-200"}`}
                      >
                        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${toggles[item.toggleKey ?? ""] ? "left-[22px]" : "left-0.5"}`} />
                      </button>
                    ) : (
                      <ChevronRight size={16} className="shrink-0 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-2 rounded-xl border border-[#d6efec] bg-[#f1fbfa] px-4 py-3 text-xs leading-relaxed text-[#287a75]">
          <ShieldCheck size={16} className="mt-0.5 shrink-0" />
          <p>Les informations sensibles restent masquées par défaut. Vérifiez toujours l'identité du destinataire avant de les partager.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="mb-4 mt-6">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-100 active:scale-[0.99]"
          >
            <LogOut size={18} />
            Déconnexion
          </button>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}
