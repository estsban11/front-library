FROM node:20-alpine as build-step

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install --force

COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/front-library /usr/share/nginx/html/


COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
