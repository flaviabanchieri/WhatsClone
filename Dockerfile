#stage 1
FROM node:18-alpine as compilador
WORKDIR /app
COPY .. .
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine

LABEL empresa="WhatsCLone"
LABEL imagem="front"

COPY ../nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=compilador /app/dist /usr/share/nginx/html
