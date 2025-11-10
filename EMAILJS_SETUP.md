# Configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)
3. Connectez-vous à votre compte

### 2. Configurer un service email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
De: {{from_name}} ({{from_email}})
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. Dans les paramètres du template, configurez :
   - **To Email**: Votre adresse email (ex: `Amzilikram.8@gmail.com`)
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
   - **Subject**: `Nouveau message depuis votre portfolio - {{from_name}}`

5. Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Obtenir votre clé publique

1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Important** : Remplacez les valeurs par celles que vous avez notées précédemment.

### 6. Redémarrer le serveur de développement

Après avoir créé le fichier `.env.local`, redémarrez votre serveur Next.js :

```bash
npm run dev
```

## Test du formulaire

1. Remplissez le formulaire de contact sur votre site
2. Soumettez le formulaire
3. Vérifiez votre boîte email - vous devriez recevoir le message !

## Dépannage

- **Erreur "Configuration EmailJS manquante"** : Vérifiez que votre fichier `.env.local` existe et contient les bonnes variables
- **Les emails ne sont pas reçus** : Vérifiez votre configuration EmailJS et les paramètres du template
- **Erreur 400/401** : Vérifiez que vos IDs et clés sont corrects

## Limites du plan gratuit

- 200 emails par mois
- Parfait pour un portfolio personnel

Pour plus d'informations, consultez la [documentation EmailJS](https://www.emailjs.com/docs/).

