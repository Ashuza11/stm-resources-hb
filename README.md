# Maarifa

Une landing page pour l'application Maarifa

## Installation

> Assurez-vous d'avoir NodeJs et PNPM d'installer
>
> Ce projet est un mono-repo pnpm gérer avec turbo

### 1. Installer NodeJs

- Sur Windows télécharger l'executable sur le site [nodejs.org](https://nodejs.org/en/download)

- Sur linux executer ces commandes dans le terminal:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Redemarrer votre pc avant de continuer
# Ensuite executer

nvm install stable
```

### 2. Installer PNPM

PNPM est le gestionnaire des package utiliser ici. Pour l'insaller s'implement executer

```bash
npm install -g pnpm

# Sur linux cela peut demander les droits root
# Si c'est le cas executer plutôt
sudo npm install -g pnpm
```

### 3. Cloner le repo et installer les dependances

```bash
git clone https://github.com/lexnotor/maarifa-app.git maarifa

cd maarifa

pnpm install
```

## Démarrer le projet

Pour demarrer le projet, executer simplement

```bash
pnpm start
```

> Le projet devrait être lancé par defaut au port 3000
>
> [http://localhost:3000](http://localhost:3000)
