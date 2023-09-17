FROM node:18.17-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ .

RUN pnpm

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "start:prod" ]