# dummy-api

Api similar to [dummy-api](https://dummyapi.io/docs)

Api for playing around with dummy data. Feel free to use it in your demo projects, tutorials, or testing tasks.

- All authorization headers are optional

- listing api default page = 1, default per page = 20

documentation: <https://documenter.getpostman.com/view/3827865/Uyr8kHHD>

## Requirement

- install yarn
- install node (v14+)

## Testing and run

```zsh
// test api in local
$ yarn run start:dev

// run in production
$ yarn run start:prod

// lint code
$ yarn run lint

// format code
$ yarn run format

// run test case
$ yarn run test

// create module
$ nest g module <module-name>

// create controller
$ nest g controller <controller-name>

// create service
$ nest g service <service-name>

// generate schema.prisma and prisma client
$ yarn run prisma:generate

// create migration file if schema.prisma changed
$ yarn run prisma:migrate:dev

// reset database
$ yarn run prisma:migrate:reset

// apply pending migrations in the production/staging database
$ yarn run prisma:migrate:deploy

// check migrations status in the production/staging database
$ yarn run prisma:migrate:status

// push schema.prisma state to database
$ yarn run prisma:db:push

// seed data to database
$ yarn run prisma:db:seed

// format schema.prisma
$ yarn run prisma:format

// open prisma studio
$ yarn run prisma:studio
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
