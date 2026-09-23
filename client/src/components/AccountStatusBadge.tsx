import { CheckCircle2, LockKeyhole } from "lucide-react";

type AccountStatusBadgeProps = {
  status?: string | null;
  className?: string;
};

const normalizeStatus = (status?: string | null) =>
  (status ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

export const isAccountBlocked = (status?: string | null) =>
  normalizeStatus(status) === "bloque";

export default function AccountStatusBadge({
  status,
  className = "",
}: AccountStatusBadgeProps) {
  const blocked = isAccountBlocked(status);
  const label = blocked ? "Bloqué" : "Actif";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
        blocked
          ? "bg-red-100 text-red-700 ring-1 ring-red-200"
          : "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200"
      } ${className}`}
      aria-label={`Statut du compte : ${label}`}
    >
      {blocked ? <LockKeyhole size={13} /> : <CheckCircle2 size={13} />}
      {label}
    </span>
  );
}
