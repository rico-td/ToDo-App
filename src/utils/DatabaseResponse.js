import { faker } from "@faker-js/faker";

const DatabaseResponse = {
  profile: {
    followerCount: faker.number.int(10000),
    followingCount: faker.number.int(100),
    postCount: faker.number.int(20),
    // Aufgabe 1: Datenbank ergänzen (name, age, avatar)
    name: faker.internet.userName(),
    age: faker.number.int(80),
    avatar: faker.image.avatar(),
  },
  posts: [
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
    { image: faker.image.url(), text: faker.lorem.lines(2) },
  ],
};

export default DatabaseResponse;
