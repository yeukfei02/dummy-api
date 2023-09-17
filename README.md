# dummy-api

Api similar to [dummy-api](https://dummyapi.io/docs)

Api for playing around with dummy data. Feel free to use it in your demo projects, tutorials, or testing tasks.

- All authorization headers are optional

- listing api default page = 1, default per page = 20

swagger: <http://localhost:3000/api/>

documentation: <https://documenter.getpostman.com/view/3827865/Uyr8kHHD>

## Requirement

- install pnpm
- install node (v18+)

## Testing and run

```zsh
// test api in local
$ pnpm run start:dev

// run in production
$ pnpm run start:prod

// lint code
$ pnpm run lint

// format code
$ pnpm run format

// run test case
$ pnpm run test

// create module
$ nest g module <module-name>

// create controller
$ nest g controller <controller-name>

// create service
$ nest g service <service-name>

// generate schema.prisma and prisma client
$ pnpm run prisma:generate

// create migration file if schema.prisma changed
$ pnpm run prisma:migrate:dev

// reset database
$ pnpm run prisma:migrate:reset

// apply pending migrations in the production/staging database
$ pnpm run prisma:migrate:deploy

// check migrations status in the production/staging database
$ pnpm run prisma:migrate:status

// push schema.prisma state to database
$ pnpm run prisma:db:push

// seed data to database
$ pnpm run prisma:db:seed

// validate schema.prisma
$ pnpm run prisma:validate

// format schema.prisma
$ pnpm run prisma:format

// open prisma studio
$ pnpm run prisma:studio
```

## Docker

```zsh
// build images and start container in one line
docker-compose up -d --build

// go inside container
docker exec -it <containerId> /bin/bash

// check container logs
docker logs <containerId>

// remove and stop container
docker-compose down
```

open localhost:3000
