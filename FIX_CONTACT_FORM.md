# 🔧 Réparer le Formulaire de Contact après Déploiement

Le formulaire de contact ne fonctionne pas après le déploiement car les variables d'environnement EmailJS ne sont pas configurées sur votre plateforme de déploiement.

## 📋 Solution Rapide

Vous devez ajouter les 3 variables d'environnement EmailJS sur votre plateforme de déploiement.

### Étape 1 : Récupérer vos clés EmailJS

Si vous avez déjà configuré EmailJS localement, vous les avez dans votre fichier `.env.local` (qui n'est pas déployé pour des raisons de sécurité).

Sinon, suivez le guide `EMAILJS_SETUP.md` pour :
1. Créer un compte EmailJS (gratuit - 200 emails/mois)
2. Configurer un service email
3. Créer un template
4. Obtenir votre Public Key

Vous aurez besoin de 3 valeurs :
- **Service ID** (ex: `service_xxxxx`)
- **Template ID** (ex: `template_xxxxx`)
- **Public Key** (ex: `xxxxxxxxxxxxx`)

---

## 🚀 Configuration selon votre plateforme

### Si vous utilisez **Vercel** (Recommandé)

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Sélectionnez votre projet portfolio
3. Allez dans **Settings** (Paramètres) → **Environment Variables**
4. Ajoutez les 3 variables suivantes :

   | Nom de la variable | Valeur |
   |-------------------|--------|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | votre service ID (ex: `service_xxxxx`) |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | votre template ID (ex: `template_xxxxx`) |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | votre public key (ex: `xxxxxxxxxxxxx`) |

5. Pour chaque variable, sélectionnez :
   - ✅ **Production**
   - ✅ **Preview**
   - ✅ **Development**
6. Cliquez sur **Save**
7. **⚠️ IMPORTANT** : Allez dans **Deployments**, trouvez le dernier déploiement, cliquez sur les 3 points (⋯) → **Redeploy** pour appliquer les nouvelles variables

**C'est tout !** Votre formulaire devrait maintenant fonctionner. 🎉

---

### Si vous utilisez **Netlify**

1. Allez sur [netlify.com](https://netlify.com) et connectez-vous
2. Sélectionnez votre site
3. Allez dans **Site settings** → **Environment variables**
4. Cliquez sur **Add a variable**
5. Ajoutez les 3 variables :
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = votre service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = votre template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = votre public key
6. Cliquez sur **Save**
7. **⚠️ IMPORTANT** : Allez dans **Deploys**, trouvez le dernier déploiement et cliquez sur **Trigger deploy** → **Clear cache and deploy site**

---

### Si vous utilisez **Cloudflare Pages**

1. Allez sur [cloudflare.com](https://cloudflare.com) et connectez-vous
2. Allez dans **Pages** → Sélectionnez votre projet
3. Allez dans **Settings** → **Environment variables**
4. Cliquez sur **Add variable**
5. Ajoutez les 3 variables :
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = votre service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = votre template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = votre public key
6. Sélectionnez **Production**, **Preview**, et **Development** pour chaque variable
7. Cliquez sur **Save**
8. **⚠️ IMPORTANT** : Allez dans **Deployments** et redéployez votre site

---

## ✅ Vérification

Après avoir configuré les variables et redéployé :

1. Allez sur votre site déployé
2. Remplissez le formulaire de contact
3. Envoyez un message de test
4. Vous devriez voir un message de succès : "Message envoyé !"
5. Vérifiez votre boîte email - vous devriez recevoir le message !

---

## 🐛 Dépannage

### L'erreur persiste après configuration

1. **Vérifiez que vous avez bien redéployé** après avoir ajouté les variables
2. **Vérifiez les valeurs** : assurez-vous que vous avez copié les bonnes valeurs (sans espaces)
3. **Vérifiez la console du navigateur** (F12) pour voir les erreurs détaillées
4. **Vérifiez votre compte EmailJS** : assurez-vous que votre service et template sont bien configurés

### Erreur "Configuration EmailJS manquante"

Cela signifie que les variables d'environnement ne sont pas définies. Vérifiez :
- Que vous avez bien ajouté les 3 variables sur votre plateforme
- Que vous avez redéployé après avoir ajouté les variables
- Que les noms des variables sont exactement : `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Erreur 400/401 d'EmailJS

- Vérifiez que vos IDs et clés sont corrects
- Vérifiez que votre template EmailJS est bien configuré
- Vérifiez que votre service EmailJS est actif

---

## 📝 Note importante

Le fichier `.env.local` fonctionne uniquement en local. Il n'est **jamais** déployé sur les plateformes (c'est normal et sécurisé). C'est pourquoi vous devez configurer les variables directement sur votre plateforme de déploiement.

