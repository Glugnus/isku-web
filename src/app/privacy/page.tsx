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
            Dernière mise à jour : 12 octobre 2026 • Entrée en vigueur immédiate
          </p>
        </div>

        {/* Contenu exhaustif des règles de confidentialité */}
        <div className="space-y-8 text-sm md:text-base leading-relaxed text-neutral">
          {/* 1. Introduction et Responsable du traitement */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">1.</span> Responsable du Traitement &amp; Éditeur
            </h2>
            <p>
              La présente Politique de Confidentialité s&apos;applique à
              l&apos;application mobile <strong>Isku</strong> (disponible sur
              Google Play et Apple App Store) ainsi qu&apos;au site internet{" "}
              <code>{siteConfig.url}</code>.
            </p>
            <p>
              Le service Isku est conçu, développé et édité par un{" "}
              <strong>développeur indépendant</strong> (personne physique, ci-après
              dénommé &laquo;&nbsp;l&apos;Éditeur&nbsp;&raquo;). La protection de vos
              données personnelles et de votre vie privée est une priorité absolue.
            </p>
            <p>
              Pour toute question relative à vos données personnelles, vous
              pouvez contacter directement l&apos;Éditeur par courrier
              électronique à :{" "}
              <a
                href={siteConfig.links.contact}
                className="text-primary font-semibold underline hover:text-[#ffe142] transition-colors"
              >
                {siteConfig.author.email}
              </a>
              .
            </p>
          </section>

          {/* 2. Données collectées (Google Play Data Safety) */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">2.</span> Données Collectées (Sécurité des Données)
            </h2>
            <p>
              Conformément au principe de minimisation des données, Isku ne
              collecte que les données strictement indispensables au
              fonctionnement des fonctionnalités sportives et du compte utilisateur :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">
                  Données de compte et d&apos;authentification :
                </strong>{" "}
                adresse e-mail, pseudonyme / nom affiché, identifiant unique
                d&apos;authentification (UID), jetons de session chiffrés. Ces
                données sont transmises lors de votre inscription par e-mail ou
                via l&apos;authentification Google Sign-In (et ultérieurement Apple Sign-In).
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
                illustrer votre photo de profil ou créer une Story récapitulative
                de match. L&apos;accès à votre stockage/galerie fait l&apos;objet
                d&apos;une demande explicite d&apos;autorisation système
                (permissions Android / iOS).
              </li>
              <li>
                <strong className="text-white">
                  Données techniques et de diagnostic :
                </strong>{" "}
                modèle de l&apos;appareil (anonymisé), version du système
                d&apos;exploitation (Android / iOS), version de
                l&apos;application Isku installée, et rapports de crash
                techniques anonymisés pour corriger les bugs.
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
                <li>Aucun pistage en arrière-plan lorsque l&apos;app est fermée.</li>
              </ul>
            </div>
          </section>

          {/* 3. Finalités et Bases Légales */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">3.</span> Finalités et Bases Légales du Traitement
            </h2>
            <p>
              Vos données sont traitées conformément au Règlement Général sur la
              Protection des Données (RGPD - Règlement UE 2016/679) sur les bases
              légales suivantes :
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
                accès à la galerie photo pour l&apos;exportation et la génération
                des Stories de match. Vous pouvez révoquer cette autorisation à
                tout moment dans les paramètres de votre smartphone.
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
              <span className="text-primary">4.</span> Sous-traitants &amp; Sécurité des Données
            </h2>
            <p>
              Pour assurer l&apos;hébergement et l&apos;authentification de
              l&apos;application, nous faisons appel à des prestataires cloud de
              confiance respectant les normes de sécurité les plus strictes de
              l&apos;industrie (chiffrement TLS/SSL au repos et en transit,
              conformité RGPD) :
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-white">Fournisseurs d&apos;authentification :</strong>{" "}
                Google Sign-In (Google LLC) et Apple Sign-In (Apple Inc.) pour la
                gestion sécurisée des connexions fédérées.
              </li>
              <li>
                <strong className="text-white">Hébergement Cloud &amp; Base de données :</strong>{" "}
                Infrastructures cloud sécurisées situées dans l&apos;Union
                Européenne (serveurs certifiés ISO 27001 et RGPD).
              </li>
            </ul>
            <p className="text-xs text-muted">
              Sur votre appareil mobile, vos jetons de session sensibles sont
              protégés par les mécanismes de coffre-fort matériel natifs (Android
              Keystore / iOS Keychain via Expo SecureStore).
            </p>
          </section>

          {/* 5. Durée de conservation */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">5.</span> Durée de Conservation
            </h2>
            <p>
              Vos données de compte, matchs et statistiques sont conservées tant
              que votre compte utilisateur demeure actif. En cas d&apos;inactivité
              continue pendant une période de 24 mois sans connexion, ou
              immédiatement dès votre demande de suppression, l&apos;intégralité
              de vos données est définitivement effacée de nos serveurs actifs.
            </p>
          </section>

          {/* 6. Procédure de Suppression du Compte (Exigence Google Play) */}
          <section className="space-y-4 rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-7 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🗑️</span>
              <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white">
                <span className="text-primary">6.</span> Suppression du Compte et des Données (Google Play)
              </h2>
            </div>
            <p>
              Conformément aux règles strictes de Google Play concernant la
              suppression de compte, vous disposez d&apos;un contrôle total et
              immédiat sur vos données :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              {/* Option 1 : Dans l'app */}
              <div className="rounded-xl border border-white/10 bg-surface p-4 space-y-2">
                <p className="font-oswald text-sm font-bold uppercase tracking-wider text-primary">
                  Option 1 : Directement dans l&apos;App
                </p>
                <p className="text-xs sm:text-sm text-neutral/80">
                  Ouvrez l&apos;application Isku → Allez dans l&apos;onglet{" "}
                  <strong className="text-white">Profil</strong> → Paramètres →
                  Cliquez sur <strong className="text-danger">&laquo;&nbsp;Supprimer mon compte&nbsp;&raquo;</strong>.
                  La suppression est immédiate.
                </p>
              </div>

              {/* Option 2 : Demande Web */}
              <div className="rounded-xl border border-white/10 bg-surface p-4 space-y-2">
                <p className="font-oswald text-sm font-bold uppercase tracking-wider text-primary">
                  Option 2 : Demande par E-mail
                </p>
                <p className="text-xs sm:text-sm text-neutral/80">
                  Envoyez un e-mail à{" "}
                  <a
                    href={siteConfig.links.contact}
                    className="text-primary font-semibold underline"
                  >
                    {siteConfig.author.email}
                  </a>{" "}
                  avec pour objet &laquo;&nbsp;Suppression de compte Isku&nbsp;&raquo;
                  depuis l&apos;adresse liée à votre compte. Votre demande sera
                  exécutée sous 48 heures ouvrées.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted pt-1">
              ⚠️ <strong>Effet de la suppression :</strong> L&apos;effacement
              supprime définitivement votre identifiant, votre historique de
              matchs, vos statistiques de score et toutes vos préférences. Cette
              action est irréversible.
            </p>
          </section>

          {/* 7. Droits des utilisateurs (RGPD) */}
          <section className="space-y-3">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide text-white flex items-center gap-2">
              <span className="text-primary">7.</span> Vos Droits Légaux
            </h2>
            <p>
              Conformément à la réglementation applicable (RGPD et loi
              Informatique et Libertés), vous disposez des droits suivants sur vos
              données :
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Droit d&apos;accès et de communication :</strong> vous
                pouvez demander une copie des données détenues sur vous.
              </li>
              <li>
                <strong>Droit de rectification :</strong> vous pouvez modifier
                vos informations de profil à tout moment dans l&apos;application.
              </li>
              <li>
                <strong>Droit à l&apos;effacement (droit à l&apos;oubli) :</strong>{" "}
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
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, contactez simplement
              l&apos;Éditeur par email à :{" "}
              <a
                href={siteConfig.links.contact}
                className="text-primary underline hover:text-[#ffe142] transition-colors"
              >
                {siteConfig.author.email}
              </a>
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
              préalable d&apos;un titulaire de l&apos;autorité parentale. Si vous
              êtes parent et constatez que votre enfant s&apos;est inscrit sans
              accord, contactez-nous afin que nous supprimions immédiatement le
              compte.
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
              modification substantielle, les utilisateurs seront avertis via une
              notification dans l&apos;application ou lors de la mise à jour
              suivante.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
