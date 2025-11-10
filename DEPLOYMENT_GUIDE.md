# Guide de Déploiement Gratuit - Portfolio Next.js

## Option 1 : Vercel (Recommandé - Le plus simple) ⭐

Vercel est la plateforme créée par les créateurs de Next.js. C'est **100% gratuit** et très facile à utiliser.

### Étapes :

1. **Créer un compte GitHub** (si vous n'en avez pas)
   - Allez sur [github.com](https://github.com)
   - Créez un compte gratuit

2. **Mettre votre code sur GitHub**
   - Créez un nouveau repository sur GitHub
   - Nommez-le par exemple : `portfolio`
   - **Ne cochez PAS** "Add a README file" (votre projet a déjà des fichiers)
   - Cliquez sur "Create repository"

3. **Uploader votre code sur GitHub**
   
   Ouvrez PowerShell dans le dossier de votre projet et exécutez :
   ```powershell
   # Initialiser git (si pas déjà fait)
   git init
   
   # Ajouter tous les fichiers
   git add .
   
   # Faire un commit
   git commit -m "Initial commit"
   
   # Ajouter le repository GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
   git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
   
   # Pousser le code
   git branch -M main
   git push -u origin main
   ```

4. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" et connectez-vous avec votre compte GitHub
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository `portfolio`
   - Vercel détectera automatiquement que c'est un projet Next.js
   - Cliquez sur "Deploy"
   - Attendez 1-2 minutes... et c'est fait ! 🎉

5. **Votre site est en ligne !**
   - Vercel vous donnera un lien comme : `https://portfolio-xyz.vercel.app`
   - Vous pouvez aussi configurer un nom de domaine personnalisé gratuit

---

## Option 2 : Netlify (Alternative gratuite)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Connectez votre compte GitHub
3. Cliquez sur "Add new site" → "Import an existing project"
4. Sélectionnez votre repository GitHub
5. Configurez :
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`
6. Cliquez sur "Deploy site"

---

## Option 3 : Cloudflare Pages (Alternative gratuite)

1. Créez un compte sur [cloudflare.com](https://cloudflare.com)
2. Allez dans "Pages" → "Create a project"
3. Connectez votre compte GitHub
4. Sélectionnez votre repository
5. Configurez :
   - **Framework preset** : Next.js
   - **Build command** : `npm run build`
6. Cliquez sur "Save and Deploy"

---

## ⚠️ Important avant de déployer

### Configurer EmailJS pour le formulaire de contact

Si votre formulaire de contact utilise EmailJS, vous devez configurer les variables d'environnement :

#### 1. Obtenir vos clés EmailJS

Si vous n'avez pas encore configuré EmailJS, suivez le guide dans `EMAILJS_SETUP.md` pour :
- Créer un compte EmailJS (gratuit - 200 emails/mois)
- Configurer un service email
- Créer un template
- Obtenir votre Public Key

Vous aurez besoin de 3 valeurs :
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (ex: `service_xxxxx`)
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (ex: `template_xxxxx`)
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (ex: `xxxxxxxxxxxxx`)

#### 2. Configurer les variables sur Vercel

Après avoir déployé votre projet sur Vercel :

1. Allez sur votre projet dans Vercel
2. Cliquez sur **Settings** (Paramètres)
3. Allez dans **Environment Variables**
4. Ajoutez les 3 variables suivantes :
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = votre service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = votre template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = votre public key
5. Sélectionnez **Production**, **Preview**, et **Development** pour chaque variable
6. Cliquez sur **Save**
7. **Important** : Allez dans **Deployments**, trouvez le dernier déploiement et cliquez sur les 3 points → **Redeploy** pour appliquer les nouvelles variables

#### 3. Pour Netlify ou Cloudflare Pages

- **Netlify** : Site settings → Environment variables → Add variable
- **Cloudflare Pages** : Settings → Environment variables → Add variable

Même processus : ajoutez les 3 variables et redéployez.

### Vérifier que tout fonctionne localement

Avant de déployer, testez que votre site fonctionne :
```powershell
npm run build
npm start
```

---

## 🎯 Recommandation

**Utilisez Vercel** car :
- ✅ Gratuit à vie
- ✅ Créé par les développeurs de Next.js
- ✅ Déploiement automatique à chaque push sur GitHub
- ✅ SSL/HTTPS automatique
- ✅ Très rapide
- ✅ Support excellent

---

## 📝 Notes

- Votre site sera accessible via un lien public
- Vous pouvez ajouter un nom de domaine personnalisé plus tard
- Les déploiements sont automatiques à chaque modification du code sur GitHub
- Tous ces services sont gratuits pour les projets personnels

