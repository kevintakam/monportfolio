# --------------- DÉBUT COUCHE OS -------------------
FROM node:18-alpine AS base
# --------------- FIN COUCHE OS ---------------------


# MÉTADONNÉES DE L'IMAGE
LABEL version="1.0" maintainer="kevin takam <kevintakam128@gmail.com>"


# VARIABLES TEMPORAIRES
ARG APPDIR="/app"


# --------------- DÉBUT COUCHE DÉPENDANCES ----------
WORKDIR ${APPDIR}

COPY package*.json ./

RUN npm install
# --------------- FIN COUCHE DÉPENDANCES ------------


# --------------- DÉBUT COUCHE CODE -----------------
COPY . .

RUN npm run build
# --------------- FIN COUCHE CODE -------------------


# --------------- DÉBUT COUCHE RUNTIME --------------
FROM node:18-alpine AS runtime

ARG APPDIR="/app"
WORKDIR ${APPDIR}

# Copie uniquement ce qui est nécessaire pour exécuter l'app
COPY --from=base ${APPDIR}/package*.json ./
COPY --from=base ${APPDIR}/node_modules ./node_modules
COPY --from=base ${APPDIR}/.next ./.next
COPY --from=base ${APPDIR}/public ./public

EXPOSE 3000

# Lancer l'application Next.js
CMD ["npm", "start"]
# --------------- FIN COUCHE RUNTIME ----------------
