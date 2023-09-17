FROM node:14.18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ .

RUN pnpm

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start:prod" ]