import Link from "next/link";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata({
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions Générales d'Utilisation (CGU) de l'application mobile et du service Isku pour les passionnés de tennis de table.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-surface/90 p-6 sm:p-10 md:p-12 shadow-2xl backdrop-blur-sm">
        {/* En-tête de la page */}
        <div className="mb-10 border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-oswald uppercase tracking-wider text-primary hover:underline mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
          >
            ← Retour à l&apos;accueil
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="font-oswald text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
              Conditions Générales d&apos;Utilisation
            </h1>
            <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 font-oswald text-xs font-bold uppercase tracking-wider text-primary">
              Version Joueurs &amp; Clubs
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            Dernière mise à jour : 12 octobre 2026 • Entrée en vigueur immédiate
          </p>
        </div>

        {/* Corps des Conditions Générales d'Utilisation */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-neutral">
          {/* 1. Objet et Acceptation */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">1.</span> Objet et Acceptation des CGU
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après
              dénommées les &laquo;&nbsp;CGU&nbsp;&raquo;) régissent
              l&apos;utilisation de l&apos;application mobile <strong>Isku</strong>{" "}
              (sur smartphones et tablettes Android et iOS) ainsi que des services
              en ligne accessibles depuis le site <code>{siteConfig.url}</code>.
            </p>
            <p>
              L&apos;application Isku est développée et maintenue par un{" "}
              <strong>développeur indépendant</strong> (ci-après &laquo;&nbsp;l&apos;Éditeur&nbsp;&raquo;).
              L&apos;installation, l&apos;inscription ou l&apos;utilisation de
              l&apos;application emporte acceptation pleine et entière des
              présentes CGU par l&apos;utilisateur.
            </p>
          </section>

          {/* 2. Description des Services */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Description des Services Isku
            </h2>
            <p>
              Isku est une application mobile conçue pour simplifier
              l&apos;arbitrage, le suivi de score et la progression des joueurs
              de <strong>Tennis de Table</strong> (et plus largement des sports
              de raquette). Le service propose notamment les fonctionnalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Arbitrage de match en direct :</strong>{" "}
                comptage des points au bord de table, gestion des règles
                officielles (manches de 11 points, alternance des services tous les
                2 points, règle des 2 points d&apos;écart et service alterné à 10-10).
              </li>
              <li>
                <strong className="text-white">Toss virtuel intégré :</strong>{" "}
                tirage au sort électronique du premier service ou du côté de table.
              </li>
              <li>
                <strong className="text-white">Mode &laquo;&nbsp;Résultat Rapide&nbsp;&raquo; :</strong>{" "}
                saisie des scores finaux des manches après coup en moins de 15 secondes.
              </li>
              <li>
                <strong className="text-white">Statistiques &amp; Historique :</strong>{" "}
                sauvegarde de vos confrontations, calcul des ratios victoires/défaites,
                séries de manches et analyse des points clés.
              </li>
              <li>
                <strong className="text-white">Match-Day Stories :</strong>{" "}
                génération et exportation de visuels de score personnalisés prêts
                à être partagés sur les réseaux sociaux (Instagram, WhatsApp, etc.),
                avec intégration facultative d&apos;une photo souvenir.
              </li>
            </ul>
          </section>

          {/* 3. Accès au Service et Sécurité du Compte */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">3.</span> Accès au Service et Compte Utilisateur
            </h2>
            <p>
              L&apos;accès à l&apos;application nécessite un terminal mobile compatible
              (Android 8.0+ ou iOS 16+) et une connexion Internet active pour la
              synchronisation cloud de vos données.
            </p>
            <p>
              La création d&apos;un compte s&apos;effectue par adresse e-mail ou via
              connexion fédérée (Google Sign-In ou Apple Sign-In). L&apos;utilisateur est
              seul responsable de la confidentialité de ses identifiants. Toute
              activité réalisée depuis son compte est présumée effectuée par lui-même.
              En cas de perte d&apos;accès ou de suspicion de piratage,
              l&apos;utilisateur doit en avertir l&apos;Éditeur à l&apos;adresse{" "}
              <a
                href={siteConfig.links.contact}
                className="text-primary underline hover:text-[#ffe142] transition-colors"
              >
                {siteConfig.author.email}
              </a>
              .
            </p>
          </section>

          {/* 4. Propriété intellectuelle et Contenus */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Propriété Intellectuelle &amp; Vos Contenus
            </h2>
            <p>
              L&apos;application Isku, sa charte graphique, son nom, ses logos,
              ses icônes, ses algorithmes de score et son code source sont la
              propriété exclusive de l&apos;Éditeur et sont protégés par le droit
              d&apos;auteur. Toute reproduction, décompilation ou diffusion non
              autorisée est strictement interdite.
            </p>
            <p>
              <strong className="text-white">Vos photos et contenus :</strong>{" "}
              Vous conservez l&apos;entière propriété des photographies que vous
              sélectionnez pour illustrer vos Stories de match. En important une
              photo, vous certifiez en détenir les droits et vous engagez à ne pas
              porter atteinte au droit à l&apos;image d&apos;un adversaire ou d&apos;un
              tiers sans son accord.
            </p>
          </section>

          {/* 5. Règles de conduite et Fair-Play */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Règles d&apos;Utilisation et Fair-Play
            </h2>
            <p>
              L&apos;application Isku a pour vocation de célébrer le sport et la
              pratique loyale du tennis de table. Les utilisateurs s&apos;interdisent :
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral">
              <li>
                D&apos;utiliser des pseudonymes à caractère injurieux, diffamatoire,
                haineux, raciste ou contraire à l&apos;ordre public.
              </li>
              <li>
                De téléverser des visuels illégaux, obscènes ou non consentis dans
                les Match Stories.
              </li>
              <li>
                De tenter de perturber l&apos;infrastructure technique, les bases de
                données ou les serveurs d&apos;authentification d&apos;Isku.
              </li>
              <li>
                D&apos;extraire des données de façon automatisée (scraping).
              </li>
            </ul>
          </section>

          {/* 6. Disponibilité et Responsabilité */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">6.</span> Disponibilité du Service &amp; Responsabilité
            </h2>
            <p>
              Isku est une application gratuite mise à disposition &laquo;&nbsp;en l&apos;état&nbsp;&raquo;.
              L&apos;Éditeur met en œuvre tous les moyens raisonnables pour garantir
              une disponibilité continue et une synchronisation fluide de vos scores,
              mais ne peut être tenu responsable d&apos;éventuelles interruptions
              temporaires pour maintenance, de pannes réseau mobile de
              l&apos;opérateur de l&apos;utilisateur ou de pertes de scores non
              synchronisés suite à une déconnexion inattendue.
            </p>
          </section>

          {/* 7. Résiliation et Suppression de Compte */}
          <section className="space-y-3 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">7.</span> Résiliation &amp; Suppression du Compte
            </h2>
            <p>
              L&apos;utilisateur peut cesser d&apos;utiliser le service à tout moment.
              Conformément aux exigences de Google Play, la suppression de compte
              est disponible sans condition :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                Directement dans l&apos;application : onglet{" "}
                <strong className="text-white">Profil → Supprimer mon compte</strong>.
              </li>
              <li>
                Par demande par e-mail à :{" "}
                <a
                  href={siteConfig.links.contact}
                  className="text-primary font-semibold underline"
                >
                  {siteConfig.author.email}
                </a>
                .
              </li>
            </ul>
            <p className="text-xs text-muted pt-1">
              Pour en savoir plus sur l&apos;effacement irréversible de vos
              statistiques et l&apos;exercice de vos droits RGPD, consultez nos{" "}
              <Link href="/privacy" className="text-primary underline">
                Règles de Confidentialité
              </Link>
              .
            </p>
          </section>

          {/* 8. Droit applicable et Litiges */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">8.</span> Droit Applicable et Résolution des Différends
            </h2>
            <p>
              Les présentes CGU sont soumises à la loi française. En cas de litige
              ou de désaccord relatif à l&apos;application du présent contrat, les
              parties s&apos;engagent à privilégier une concertation amiable en
              contactant l&apos;Éditeur avant toute saisine d&apos;une juridiction
              compétente.
            </p>
          </section>

          {/* 9. Contact */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">9.</span> Contact &amp; Assistance
            </h2>
            <p>
              Pour toute remarque, signalement d&apos;anomalie ou question relative
              aux présentes CGU, vous pouvez écrire à l&apos;Éditeur à l&apos;adresse
              suivante :{" "}
              <a
                href={siteConfig.links.contact}
                className="text-primary underline hover:text-[#ffe142] transition-colors"
              >
                {siteConfig.author.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
