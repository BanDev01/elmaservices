# ELMA SERVICES

Site vitrine de ELMA SERVICES (Lubumbashi, RDC) — infrastructures électriques 24 V à 245 kV. Next.js 16 (App Router), TypeScript, Tailwind v4, bilingue FR/EN via `next-intl`.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/[locale]/` — pages du site (une route par segment : `/`, `/services`, `/historique`, `/realisations`, `/actualites`, `/devis`, `/contact`)
- `src/components/` — composants UI partagés
- `src/content/` — données structurées (services, réalisations, actualités, clients, chiffres clés). Fixtures locales aujourd'hui, pensées pour être remplacées par des requêtes Sanity dans une itération suivante sans changer les pages
- `src/messages/{fr,en}.json` — tous les textes du site
- `src/app/actions/` — Server Actions des formulaires (Contact, Devis), envoi d'email via Resend

## Variables d'environnement

Voir `.env.example`. Sans `RESEND_API_KEY`, les formulaires fonctionnent mais se contentent de logguer la soumission au lieu d'envoyer un email — utile en développement avant d'avoir créé le compte Resend.

## À faire avant la mise en ligne

- [ ] Remplacer les chiffres clés placeholders dans `src/content/stats.ts`
- [ ] Créer un compte Resend, vérifier le domaine d'envoi, renseigner `RESEND_API_KEY` sur Vercel
- [ ] Renseigner les vraies URLs des réseaux sociaux dans `src/components/Footer.tsx`
- [ ] Relier le projet à Vercel et pointer le domaine `elmaservices.com`
- [ ] (Itération suivante) Créer un projet Sanity et brancher `src/content/` sur le CMS

## Déploiement

Le projet est prévu pour Vercel. Connecter le repo GitHub à un projet Vercel, renseigner les variables d'environnement, puis déployer.
