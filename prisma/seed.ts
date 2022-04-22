import { PrismaClient } from '@prisma/client';
import _ from 'lodash';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';
import axios from 'axios';

const prisma = new PrismaClient();

(async function () {
  await createUsers();
  await createLocations();
  await createPosts();
  await createTags();
  await createComments();
  await createTodos();
  await createQuotes();
})();

async function createUsers() {
  const titleList = ['mr', 'ms', 'mrs', 'miss', 'dr'];

  const salt = bcrypt.genSaltSync(10);

  const usersDataList = [];
  for (let index = 0; index < 100; index++) {
    const hashedPassword = bcrypt.hashSync(faker.internet.password(), salt);

    const usersData = {
      title: _.sample(titleList),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      gender: index % 2 === 0 ? 'male' : 'female',
      email: faker.internet.email(),
      password: hashedPassword,
      date_of_birth: faker.date.recent(),
      register_date: faker.date.recent(),
      phone: faker.phone.phoneNumber(),
      picture: faker.image.imageUrl(),
    };
    usersDataList.push(usersData);
  }

  if (usersDataList) {
    await prisma.users.createMany({
      data: usersDataList,
    });
  }
}

async function createLocations() {
  const locationsDataList = [];

  const users = await prisma.users.findMany({
    take: 50,
  });

  for (let index = 0; index < 50; index++) {
    const locationData = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      country: faker.address.country(),
      timezone: faker.address.timeZone(),
      users_id: users[index].id,
    };
    locationsDataList.push(locationData);
  }

  if (locationsDataList) {
    await prisma.location.createMany({
      data: locationsDataList,
    });
  }
}

async function createPosts() {
  const postsDataList = [];

  const users = await prisma.users.findMany({
    take: 100,
  });

  for (let index = 0; index < 100; index++) {
    const postData = {
      text: faker.lorem.word(),
      image: faker.image.imageUrl(),
      likes: faker.datatype.number(),
      publish_date: faker.date.recent(),
      users_id: users[index].id,
    };
    postsDataList.push(postData);
  }

  if (postsDataList) {
    await prisma.post.createMany({
      data: postsDataList,
    });
  }
}

async function createTags() {
  const tagsDataList = [];

  const posts = await prisma.post.findMany({
    take: 20,
  });

  for (let index = 0; index < 20; index++) {
    const tagData = {
      name: faker.lorem.word(),
      post_id: posts[index].id,
    };
    tagsDataList.push(tagData);
  }

  if (tagsDataList) {
    await prisma.tag.createMany({
      data: tagsDataList,
    });
  }
}

async function createComments() {
  const commentsDataList = [];

  const users = await prisma.users.findMany({
    take: 100,
  });
  const posts = await prisma.post.findMany({
    take: 100,
  });

  for (let index = 0; index < 100; index++) {
    const commentData = {
      message: faker.lorem.words(),
      publish_date: faker.date.recent(),
      users_id: users[index].id,
      post_id: posts[index].id,
    };
    commentsDataList.push(commentData);
  }

  if (commentsDataList) {
    await prisma.comment.createMany({
      data: commentsDataList,
    });
  }
}

async function createTodos() {
  const todosDataList = [];

  const users = await prisma.users.findMany({
    take: 100,
  });

  for (let index = 0; index < 100; index++) {
    const todoData = {
      todo: faker.lorem.words(),
      users_id: users[index].id,
    };
    todosDataList.push(todoData);
  }

  if (todosDataList) {
    await prisma.todo.createMany({
      data: todosDataList,
    });
  }
}

async function createQuotes() {
  const rootUrl = `https://api.quotable.io`;
  const response = await axios.get(`${rootUrl}/quotes`, {
    params: { limit: 100 },
  });
  if (response) {
    const responseData = response.data;
    console.log('responseData = ', responseData);

    if (responseData) {
      const resultsList = responseData.results;
      for (let index = 0; index < resultsList.length; index++) {
        const item = resultsList[index];
        await prisma.quote.create({
          data: {
            content: item.content,
            author: item.author,
            tags: item.tags,
          },
        });
      }
    }
  }
}
