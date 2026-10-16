import Link from "next/link";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/config/metadata";

export const metadata = constructMetadata({
  title: "Règles de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles de l'application mobile Isku conformément aux exigences du RGPD et de Google Play.",
  path: "/privacy",
});

export default function PrivacyPage() {
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
              Règles de Confidentialité
            </h1>
            <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 font-oswald text-xs font-bold uppercase tracking-wider text-primary">
              Conforme Google Play &amp; RGPD
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            Dernière mise à jour : 16 octobre 2026 • Entrée en vigueur immédiate
          </p>
        </div>

        {/* Contenu exhaustif des règles de confidentialité */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-neutral">
          {/* 1. Introduction et Responsable du traitement */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">1.</span> Responsable du Traitement
              &amp; Éditeur
            </h2>
            <p>
              La présente Politique de Confidentialité s&apos;applique à
              l&apos;application mobile <strong>Isku</strong> (disponible sur
              Google Play et Apple App Store) ainsi qu&apos;au site internet{" "}
              <code>{siteConfig.url}</code>.
            </p>
            <p>
              Le service Isku est conçu, développé et édité par{" "}
              <strong>Aurélien PERNET</strong> (développeur indépendant sous le
              pseudonyme Glugnus, ci-après dénommé
              &laquo;&nbsp;l&apos;Éditeur&nbsp;&raquo;), agissant en qualité de
              Responsable du Traitement au sens du RGPD.
            </p>
            <p>
              Pour toute question relative à vos données personnelles ou pour
              exercer vos droits, vous pouvez contacter directement
              l&apos;Éditeur par email à :{" "}
              <Link
                href={`mailto:${siteConfig.author.email}`}
                className="text-primary font-semibold underline hover:brightness-110 transition-colors"
              >
                {siteConfig.author.email}
              </Link>
              .
            </p>
          </section>

          {/* 2. Données collectées (Google Play Data Safety) */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Données Collectées
              (Sécurité des Données)
            </h2>
            <p>
              Conformément au principe de minimisation des données, Isku ne
              collecte que les données strictement indispensables au
              fonctionnement des fonctionnalités sportives et du compte
              utilisateur :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">
                  Données de compte et d&apos;authentification :
                </strong>{" "}
                adresse e-mail, pseudonyme / nom affiché, identifiant unique
                d&apos;authentification (UID), jetons de session chiffrés. Ces
                données sont transmises lors de votre inscription par e-mail ou
                via l&apos;authentification Google Sign-In.
              </li>
              <li>
                <strong className="text-white">
                  Données sportives et historiques de match :
                </strong>{" "}
                scores point par point, décompte des manches (sets), points
                gagnants, fautes directes, durée de la rencontre, date et noms
                des adversaires renseignés.
              </li>
              <li>
                <strong className="text-white">
                  Photos et contenus multimédias (Optionnel) :
                </strong>{" "}
                uniquement les photographies que vous choisissez délibérément
                d&apos;importer depuis la galerie de votre téléphone pour
                illustrer votre photo de profil. Isku utilise le sélecteur
                d&apos;images natif du système (Photo Picker via Expo Image
                Picker) : l&apos;application n&apos;accède qu&apos;au seul
                fichier sélectionné et ne dispose d&apos;aucun accès continu,
                permanent ou global à votre galerie.
              </li>
              <li>
                <strong className="text-white">
                  Données techniques et de diagnostic :
                </strong>{" "}
                modèle de l&apos;appareil (anonymisé), version du système
                d&apos;exploitation (Android / iOS), version de
                l&apos;application Isku installée.
              </li>
            </ul>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-xs sm:text-sm text-neutral mt-3 space-y-1">
              <p className="font-bold text-white flex items-center gap-1.5">
                <span>🛡️</span> Ce qu&apos;Isku ne collecte JAMAIS :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-neutral/90">
                <li>Aucune donnée de géolocalisation précise (GPS).</li>
                <li>Aucun accès à votre carnet d&apos;adresses / contacts.</li>
                <li>Aucun identifiant publicitaire (GAID / IDFA).</li>
                <li>Aucune donnée financière ou bancaire.</li>
                <li>
                  Aucun pistage en arrière-plan lorsque l&apos;app est fermée.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Finalités et Bases Légales */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">3.</span> Finalités et Bases
              Légales du Traitement
            </h2>
            <p>
              Vos données sont traitées conformément au Règlement Général sur la
              Protection des Données (RGPD - Règlement UE 2016/679) sur les
              bases légales suivantes :
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong className="text-white">Exécution du contrat :</strong>{" "}
                création et gestion de votre compte pongiste, sauvegarde et
                synchronisation en temps réel de vos matchs, calcul de vos
                statistiques de progression.
              </li>
              <li>
                <strong className="text-white">Votre consentement :</strong>{" "}
                accès à la galerie photo pour sélectionner une photo de profil.
                Vous pouvez révoquer cette autorisation à tout moment dans les
                paramètres de votre smartphone.
              </li>
              <li>
                <strong className="text-white">Intérêt légitime :</strong>{" "}
                prévention des fraudes, sécurisation des serveurs et correction
                des anomalies techniques.
              </li>
            </ul>
            <p className="font-semibold text-white pt-1">
              Isku ne vend, ne loue et ne commercialise AUCUNE donnée
              personnelle à des tiers ou courtiers de données.
            </p>
          </section>

          {/* 4. Sous-traitants & Hébergement */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">4.</span> Sous-traitants &amp;
              Sécurité des Données
            </h2>
            <p>
              Pour assurer l&apos;hébergement et l&apos;authentification de
              l&apos;application, nous faisons appel à des prestataires cloud de
              confiance respectant les normes de sécurité les plus strictes
              (chiffrement TLS en transit et AES-256 au repos) :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-white">
                  Base de données & Authentification Cloud : Supabase Inc.
                </strong>{" "}
                Les données de compte, profils et historiques de matchs sont
                stockées sur des infrastructures sécurisées situées au sein de
                l&apos;Union Européenne (région Francfort, Allemagne —
                eu-central-1).
              </li>
              <li>
                <strong className="text-white">
                  Fournisseurs d&apos;authentification :
                </strong>{" "}
                Google LLC (Google Sign-In) uniquement lorsque vous choisissez
                ce mode de connexion.
              </li>
              <li>
                <strong className="text-white">
                  Hébergement du site vitrine :
                </strong>{" "}
                Le site {siteConfig.url} est hébergé par la plateforme cloud
                Vercel Inc.
              </li>
              <li>
                <strong className="text-white">Coffre-fort local :</strong> Sur
                votre appareil mobile, vos jetons de session sont protégés par
                les mécanismes de coffre-fort matériel natifs (Android Keystore
                via expo-secure-store).
              </li>
              <li>
                <strong className="text-white">Transferts hors UE :</strong> Vos
                données de compte et de matchs résident exclusivement au sein de
                l&apos;Union Européenne. Les éventuels échanges techniques avec
                Google ou Vercel sont strictement encadrés par les mécanismes
                légaux reconnus par la Commission Européenne (EU-U.S. Data
                Privacy Framework ou Clauses Contractuelles Types).
              </li>
            </ul>
          </section>

          {/* 5. Durée de conservation */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Durée de Conservation
            </h2>
            <p>
              Vos données de compte, matchs et statistiques sont conservées tant
              que votre compte utilisateur demeure actif. En cas
              d&apos;inactivité continue pendant une période de 24 mois sans
              connexion, ou immédiatement dès votre demande de suppression,
              l&apos;intégralité de vos données est définitivement effacée de
              nos serveurs actifs.
            </p>
          </section>

          {/* 6. Procédure de Suppression du Compte (Exigence Google Play) */}
          <section
            id="delete-account"
            className="space-y-4 rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-7 shadow-lg scroll-mt-20"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                🗑️
              </span>
              <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white">
                <span className="text-primary">6.</span> Suppression du Compte
                et des Données
              </h2>
            </div>
            <p>
              Conformément aux règles de Google Play et au RGPD, vous disposez
              d&apos;un droit total et définitif à l&apos;effacement de votre
              compte et de toutes les données associées.
            </p>

            {/* Carte unique pleine largeur avec étapes claires */}
            <div className="rounded-xl border border-white/10 bg-surface p-5 space-y-3">
              <p className="font-oswald text-sm font-bold uppercase tracking-wider text-primary">
                Procédure de demande de suppression :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-neutral/90">
                <li>
                  Envoyez un e-mail à{" "}
                  <Link
                    href={`mailto:${siteConfig.author.email}`}
                    className="text-primary font-semibold underline hover:brightness-110 transition-colors"
                  >
                    {siteConfig.author.email}
                  </Link>{" "}
                  avec pour objet &laquo;&nbsp;Suppression de compte
                  Isku&nbsp;&raquo; depuis l&apos;adresse liée à votre compte.
                </li>
                <li>
                  Votre demande sera traitée manuellement par l&apos;Éditeur
                  sous un délai maximal de{" "}
                  <strong className="text-white">48 heures ouvrées</strong>.
                </li>
                <li>
                  L&apos;effacement supprime définitivement votre identifiant de
                  connexion ainsi que l&apos;intégralité de vos statistiques,
                  profils et feuilles de matchs sur nos serveurs.
                </li>
              </ol>
            </div>

            {/* Note d'information sur la future mise à jour */}
            <p className="text-xs text-neutral/70 italic">
              ℹ️ Note : Une option permettant de déclencher cette suppression
              directement depuis les paramètres de l&apos;application mobile est
              actuellement en cours de développement.
            </p>

            {/* Avertissement d'irréversibilité */}
            <p className="text-xs text-muted pt-1">
              ⚠️ <strong>Effet de la suppression :</strong> Cette action est
              irréversible. Aucune récupération de données ne sera possible une
              fois l&apos;opération effectuée.
            </p>
          </section>

          {/* 7. Droits des utilisateurs (RGPD) */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">7.</span> Vos Droits Légaux
            </h2>
            <p>
              Conformément à la réglementation applicable (RGPD et loi
              Informatique et Libertés), vous disposez des droits suivants sur
              vos données :
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Droit d&apos;accès et de communication :</strong> vous
                pouvez demander une copie des données détenues sur vous.
              </li>
              <li>
                <strong>Droit de rectification :</strong> vous pouvez modifier
                vos informations de profil à tout moment dans
                l&apos;application.
              </li>
              <li>
                <strong>
                  Droit à l&apos;effacement (droit à l&apos;oubli) :
                </strong>{" "}
                vous pouvez exiger la suppression intégrale de vos données.
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> vous pouvez recevoir
                vos données dans un format structuré et lisible par machine.
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous pouvez refuser
                certains traitements de données non indispensables.
              </li>
              <li>
                <strong>Droit à la limitation du traitement :</strong> vous
                pouvez demander le gel temporaire de l&apos;utilisation de
                certaines données en cas de contestation.
              </li>
              <li>
                <strong>Directives post-mortem :</strong> vous disposez du droit
                de définir des directives relatives à la conservation, à
                l&apos;effacement et à la communication de vos données après
                votre décès (conformément à l&apos;art. 85 de la loi
                Informatique et Libertés).
              </li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, contactez simplement
              l&apos;Éditeur par email à :{" "}
              <Link
                href={`mailto:${siteConfig.author.email}`}
                className="text-primary underline hover:brightness-125 transition-colors"
              >
                {siteConfig.author.email}
              </Link>
              .
            </p>
            <p>
              Si vous estimez, après nous avoir contactés à{" "}
              <Link
                href={`mailto:${siteConfig.author.email}`}
                className="text-primary underline hover:brightness-125 transition-colors"
              >
                {siteConfig.author.email}
              </Link>
              , que vos droits relatifs à la protection de vos données ne sont
              pas respectés, vous avez le droit d&apos;introduire une
              réclamation auprès de l&apos;autorité de contrôle française, la
              CNIL (Commission Nationale de l&apos;Informatique et des
              Libertés), directement sur son site :{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cnil.fr"
              >
                https://www.cnil.fr
              </Link>
              .
            </p>
          </section>

          {/* 8. Protection des mineurs */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">8.</span> Protection des Mineurs
            </h2>
            <p>
              L&apos;application Isku s&apos;adresse aux joueurs et joueuses de
              tous âges mais ne collecte sciemment aucune donnée personnelle
              auprès d&apos;enfants de moins de 15 ans sans le consentement
              préalable d&apos;un titulaire de l&apos;autorité parentale. Si
              vous êtes parent et constatez que votre enfant s&apos;est inscrit
              sans accord, contactez-nous afin que nous supprimions
              immédiatement le compte.
            </p>
          </section>

          {/* 9. Modifications et Évolution */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">9.</span> Évolution de la Politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique de
              confidentialité pour nous conformer aux évolutions légales ou aux
              nouvelles fonctionnalités de l&apos;application. En cas de
              modification substantielle, les utilisateurs seront avertis via
              une notification dans l&apos;application ou lors de la mise à jour
              suivante.
            </p>
          </section>
          {/* 10. Navigation sur le Site Vitrine & Cookies */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">10.</span> Navigation sur le Site
              Vitrine &amp; Cookies
            </h2>
            <p>
              La consultation du site internet <code>{siteConfig.url}</code> est
              entièrement libre et ne requiert aucune inscription ni
              communication de données personnelles.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">
                  Absence de traceurs et cookies publicitaires :
                </strong>{" "}
                Le site n&apos;utilise aucun cookie publicitaire, aucun outil de
                profilage et aucun traceur tiers de suivi commercial. Seuls des
                éléments techniques strictement indispensables au rendu et au
                bon fonctionnement du site peuvent être temporairement
                mobilisés.
              </li>
              <li>
                <strong className="text-white">
                  Journaux serveur (Logs techniques) :
                </strong>{" "}
                Lors de votre visite, l&apos;infrastructure d&apos;hébergement
                (Vercel Inc.) enregistre des métadonnées de connexion standards
                (adresse IP tronquée/anonymisée, navigateur, horodatage) à des
                fins exclusives de sécurité (prévention des cyberattaques et
                dénis de service) et de délivrance technique des pages.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
