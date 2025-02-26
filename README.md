# Déployer un projet sur GitHub

## Commandes Git utiles

### Initialisation et configuration

- **Initialiser un dépôt Git** :
  ```sh
  git init
  ```

- **Configurer le nom d'utilisateur** :
  ```sh
  git config --global user.name "Votre Nom"
  ```

- **Configurer l'adresse e-mail** :
  ```sh
  git config --global user.email "votre.email@example.com"
  ```

### Gestion des fichiers

- **Ajouter des fichiers au suivi** :
  ```sh
  git add .
  ```

- **Faire un commit** :
  ```sh
  git commit -m "Message du commit"
  ```

### Dépôt distant

- **Ajouter un dépôt distant** :
  ```sh
  git remote add origin https://github.com/Orosui/Tizouit
  ```

- **Modifier l'URL du dépôt distant** :
  ```sh
  git remote set-url origin https://github.com/Orosui/Tizouit
  ```

- **Supprimer un dépôt distant** :
  ```sh
  git remote remove origin
  ```

### Pousser et récupérer des changements

- **Pousser les changements vers le dépôt distant** :
  ```sh
  git push -u origin main
  ```

- **Récupérer les changements depuis le dépôt distant** :
  ```sh
  git pull origin main
  ```

### Branches

- **Créer une nouvelle branche** :
  ```sh
  git checkout -b nouvelle-branche
  ```

- **Changer de branche** :
  ```sh
  git checkout nom-de-la-branche
  ```

- **Fusionner une branche** :
  ```sh
  git merge nom-de-la-branche
  ```

### Utiliser un token d'accès personnel (PAT)

1. **Générer un token d'accès personnel (PAT)** :
   - Allez sur [GitHub](https://github.com) et connectez-vous.
   - Accédez à `Settings` > `Developer settings` > `Personal access tokens`.
   - Cliquez sur `Generate new token`.
   - Donnez un nom à votre token, sélectionnez les autorisations nécessaires (au minimum `repo`), puis cliquez sur `Generate token`.
   - Copiez le token généré et conservez-le en lieu sûr.

2. **Utiliser le token d'accès personnel pour l'authentification** :
   - Lorsque vous êtes invité à entrer votre mot de passe, utilisez le token d'accès personnel à la place.

3. **Configurer Git pour utiliser le gestionnaire d'informations d'identification** :
   - Pour éviter de saisir le token à chaque fois, configurez Git pour utiliser le gestionnaire d'informations d'identification de macOS :
     ```sh
     git config --global credential.helper osxkeychain
     ```
