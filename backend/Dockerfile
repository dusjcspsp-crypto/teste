FROM node:22-alpine AS development

WORKDIR /app

COPY package.json package-lock.json ./backend/
COPY prisma ./prisma/
COPY tsconfig.json tsconfig.build.json ./backend/
COPY nest-cli.json ./backend/

WORKDIR /app/backend

RUN npm install --omit=dev

COPY . ./

RUN npm run full-build

FROM node:22-alpine AS production

WORKDIR /app

COPY --from=development /app/backend/node_modules ./backend/node_modules
COPY --from=development /app/backend/dist ./backend/dist
COPY --from=development /app/prisma ./prisma
COPY --from=development /app/backend/package.json ./backend/package.json

WORKDIR /app/backend

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
