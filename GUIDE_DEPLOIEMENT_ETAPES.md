# 🚀 Guide de Déploiement - Étapes Détaillées

## 📋 Prérequis
- ✅ Compte GitHub créé et connecté
- ✅ Git installé sur votre machine
- ✅ Projet Next.js prêt

---

## Étape 1 : Préparer votre code localement

### 1.1 Vérifier que le projet fonctionne
```powershell
# Installer les dépendances (si pas déjà fait)
npm install

# Tester le build
npm run build

# Tester en local
npm run dev
```

### 1.2 Initialiser Git (si pas déjà fait)
```powershell
# Vous êtes déjà dans le bon répertoire
# Vérifier le statut
git status
```

---

## Étape 2 : Créer un repository sur GitHub

1. **Allez sur [github.com](https://github.com)** et connectez-vous
2. **Cliquez sur le bouton "+"** en haut à droite → **"New repository"**
3. **Remplissez les informations** :
   - **Repository name** : `portfolio` (ou un autre nom de votre choix)
   - **Description** : "Mon portfolio personnel" (optionnel)
   - **Visibilité** : Choisissez **Public** ou **Private**
   - ⚠️ **NE COCHEZ PAS** "Add a README file"
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore"
   - ⚠️ **NE COCHEZ PAS** "Choose a license"
4. **Cliquez sur "Create repository"**

---

## Étape 3 : Connecter votre projet local à GitHub

### 3.1 Ajouter tous les fichiers au dépôt Git
```powershell
# Ajouter tous les fichiers
git add .

# Faire votre premier commit
git commit -m "Initial commit - Portfolio Next.js"
```

### 3.2 Connecter à GitHub
```powershell
# Remplacer VOTRE_USERNAME par votre nom d'utilisateur GitHub
# Exemple : si votre username est "ikram-dev", la commande sera :
# git remote add origin https://github.com/ikram-dev/portfolio.git

git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# Renommer la branche en main (standard GitHub)
git branch -M main

# Pousser le code vers GitHub
git push -u origin main
```

**Note** : Si vous êtes invité à vous authentifier :
- Utilisez un **Personal Access Token** (pas votre mot de passe)
- Pour créer un token : GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
- Donnez-lui les permissions `repo`

---

## Étape 4 : Déployer sur Vercel (Recommandé) ⭐

### 4.1 Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre compte GitHub

### 4.2 Importer votre projet
1. Sur le tableau de bord Vercel, cliquez sur **"Add New Project"**
2. Vous verrez la liste de vos repositories GitHub
3. **Sélectionnez votre repository** `portfolio`
4. Cliquez sur **"Import"**

### 4.3 Configurer le projet
Vercel détectera automatiquement que c'est un projet Next.js :
- **Framework Preset** : Next.js (détecté automatiquement)
- **Root Directory** : `./` (laissez par défaut)
- **Build Command** : `npm run build` (détecté automatiquement)
- **Output Directory** : `.next` (détecté automatiquement)

**Cliquez sur "Deploy"** et attendez 1-2 minutes ! 🎉

### 4.4 Votre site est en ligne !
- Vercel vous donnera un lien comme : `https://portfolio-xyz.vercel.app`
- Chaque fois que vous pousserez du code sur GitHub, Vercel redéploiera automatiquement !

---

## Étape 5 : Configurer les variables d'environnement (si nécessaire)

Si votre formulaire de contact utilise EmailJS :

### 5.1 Obtenir vos clés EmailJS
Si vous n'avez pas encore configuré EmailJS, suivez le guide dans `EMAILJS_SETUP.md`

Vous aurez besoin de :
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### 5.2 Ajouter les variables sur Vercel
1. Allez sur votre projet dans Vercel
2. Cliquez sur **Settings** (Paramètres)
3. Allez dans **Environment Variables**
4. Ajoutez les 3 variables :
   - Nom : `NEXT_PUBLIC_EMAILJS_SERVICE_ID` → Valeur : votre service ID
   - Nom : `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` → Valeur : votre template ID
   - Nom : `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` → Valeur : votre public key
5. Pour chaque variable, sélectionnez **Production**, **Preview**, et **Development**
6. Cliquez sur **Save**
7. **Important** : Allez dans **Deployments**, trouvez le dernier déploiement et cliquez sur les 3 points → **Redeploy**

---

## 🔄 Mettre à jour votre site (après modifications)

Chaque fois que vous modifiez votre code :

```powershell
# Ajouter les modifications
git add .

# Faire un commit
git commit -m "Description de vos modifications"

# Pousser vers GitHub
git push
```

Vercel redéploiera automatiquement votre site ! ✨

---

## 📝 Résumé des commandes essentielles

```powershell
# 1. Initialiser Git (déjà fait)
git init

# 2. Ajouter les fichiers
git add .

# 3. Faire un commit
git commit -m "Initial commit - Portfolio Next.js"

# 4. Connecter à GitHub (remplacer VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git

# 5. Renommer la branche
git branch -M main

# 6. Pousser vers GitHub
git push -u origin main
```

---

## 🆘 Problèmes courants

### Erreur : "remote origin already exists"
```powershell
# Supprimer l'ancien remote
git remote remove origin

# Ajouter le nouveau
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
```

### Erreur d'authentification GitHub
- Utilisez un **Personal Access Token** au lieu de votre mot de passe
- Créez-en un : GitHub → Settings → Developer settings → Personal access tokens

### Le build échoue sur Vercel
- Vérifiez que `npm run build` fonctionne localement
- Vérifiez les logs d'erreur dans Vercel
- Assurez-vous que toutes les dépendances sont dans `package.json`

---

## ✅ Checklist finale

- [ ] Projet testé localement (`npm run build` fonctionne)
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] Projet déployé sur Vercel
- [ ] Variables d'environnement configurées (si nécessaire)
- [ ] Site accessible et fonctionnel

---

**Félicitations ! Votre portfolio est maintenant en ligne ! 🎉**

