# Base image with Node.js
FROM node:20-alpine AS base

# Stage 1: Install dependencies for development (deps stage)
FROM base AS deps
WORKDIR /usr/src/app

COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: Install dependencies and build for production (build stage)
FROM base AS build
WORKDIR /usr/src/app

COPY --chown=node:node --from=deps /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN yarn build

# Clean up unnecessary files
RUN yarn install --production --frozen-lockfile \
    && rm -rf /usr/src/app/src /usr/src/app/tests /usr/src/app/node_modules/.cache

# Stage 3: Create production image (production stage)
FROM base AS production
WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

ENV NODE_ENV production

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "dist/main.js"]