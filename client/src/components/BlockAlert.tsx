import { useEffect, useRef, useState } from "react";
import { AlertTriangle, LockKeyhole, X } from "lucide-react";
import type { DefaultUser } from "../data/defaultUsers";

type BlockAlertProps = {
  user: Pick<DefaultUser, "status" | "prenom" | "nom">;
  reopenDelayMs?: number;
};

/**
 * Affiche une alerte persistante uniquement lorsque le statut du compte est
 * "Bloqué". Après fermeture, la modale réapparaît automatiquement.
 */
export default function BlockAlert({
  user,
  reopenDelayMs = 10_000,
}: BlockAlertProps) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const normalizedStatus = user.status
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

  const isBlocked = normalizedStatus === "bloque";

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!isBlocked) return null;

  const fullName = [user.prenom, user.nom].filter(Boolean).join(" ");

  const closeModal = () => {
    setIsModalVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setIsModalVisible(true);
    }, reopenDelayMs);
  };

  return (
    <>
      <div
        role="status"
        className="fixed inset-x-0 top-0 z-[10001] flex items-center justify-center gap-2 border-b border-red-900/20 bg-red-700 px-4 py-2.5 text-center text-sm font-medium text-white shadow-md"
      >
        <LockKeyhole size={16} aria-hidden="true" />
        <span>
          <strong>Compte bloqué.</strong> Une action est nécessaire pour rétablir
          l’accès à votre espace.
        </span>
      </div>

      {isModalVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="blocked-account-title"
          className="fixed inset-0 z-[10002] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <section
            className="w-full max-w-md overflow-hidden rounded-2xl border border-red-200 bg-white shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start gap-3 border-b border-red-100 bg-red-50 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                <AlertTriangle size={21} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 id="blocked-account-title" className="text-base font-bold text-red-900">
                  Compte bloqué
                </h2>
                <p className="mt-1 text-xs text-red-700">Statut actuel : {user.status}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fermer l’alerte temporairement"
                className="rounded-lg p-1.5 text-red-700 transition hover:bg-red-100"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 px-5 py-5 text-sm leading-6 text-slate-700">
              <p>{fullName ? `Bonjour ${fullName},` : "Bonjour,"}</p>
              <p>
                Votre compte est actuellement bloqué. Vous ne pouvez pas effectuer
                certaines opérations tant que le déblocage n’a pas été effectué.
              </p>
              <p>
                Pour connaître la procédure officielle, contactez le support ou votre
                agence en utilisant les coordonnées déjà vérifiées dans votre espace.
                Ne communiquez jamais votre code personnel et n’effectuez aucun
                paiement demandé par un message non vérifié.
              </p>
            </div>

            <div className="flex justify-end border-t border-slate-100 px-5 py-4">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                J’ai compris
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
