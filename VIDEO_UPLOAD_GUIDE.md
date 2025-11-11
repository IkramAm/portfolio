# Guide d'Upload des Vidéos

## Problème
Les vidéos sont trop volumineuses (~1.2 GB) pour être servies directement depuis Vercel. Vercel ne supporte pas Git LFS lors du build.

## Solution : Utiliser Vercel Blob Storage

### Étape 1 : Uploader les vidéos sur Vercel Blob

1. Allez sur votre dashboard Vercel : https://vercel.com/dashboard
2. Sélectionnez votre projet
3. Allez dans **Storage** → **Blob**
4. Cliquez sur **Create Store** si vous n'en avez pas encore
5. Cliquez sur **Upload** et uploadez vos deux vidéos :
   - `ODC Learning - Google Chrome 2025-07-16 22-45-11.mp4`
   - `MyWallet - Accueil - Google Chrome 2025-02-19 17-48-40.mp4`
6. Copiez les URLs générées (format : `https://[store-id].public.blob.vercel-storage.com/[filename]`)

### Étape 2 : Mettre à jour le code

Remplacez les chemins locaux par les URLs Vercel Blob dans `components/projects-section.tsx`

---

## Alternative : Utiliser Cloudinary

### Étape 1 : Créer un compte Cloudinary (gratuit)

1. Allez sur https://cloudinary.com
2. Créez un compte gratuit
3. Dans le dashboard, allez dans **Media Library**
4. Uploadez vos deux vidéos
5. Pour chaque vidéo, cliquez sur **Copy URL** et copiez l'URL

### Étape 2 : Mettre à jour le code

Remplacez les chemins locaux par les URLs Cloudinary dans `components/projects-section.tsx`

---

## Alternative : Utiliser YouTube (gratuit et simple)

### Étape 1 : Uploader sur YouTube

1. Créez une chaîne YouTube (ou utilisez une existante)
2. Uploadez vos vidéos en mode **Non listé** (pas public, mais accessible via lien)
3. Copiez les IDs des vidéos depuis l'URL (ex: `https://www.youtube.com/watch?v=VIDEO_ID`)

### Étape 2 : Mettre à jour le code

Utilisez des iframes YouTube au lieu de balises `<video>`

