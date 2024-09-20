# Project description

This project is Express + Typescript project.

It provides:

- getting owned nfts from the address
- getting random metadata uri when client requests minting

Custom middlewares and logger were made to handle the exceptions globally.

# How to run

- npm install
- npm run dev
- npm run build
- npm start

# Project structure

- config: default config variables
- controllers: http request handlers
- middlewares: global exception catching middlewares
- routes: http routes
- services: external service functions
- types: type definitions
- utils: globlly used features

# Endpoints

- GET: `/api/get-owned-nfts?address=[address]`: get owned nfts from the address
- POST: `/api/upload`: get random IPFS url when minting
