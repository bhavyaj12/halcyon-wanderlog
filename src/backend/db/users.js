import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "guestguest",
    password: "Guest123",
    userBio: "A curious and creative person, Tech Lead at Atlassian.",
    portfolio: "https://mattfarley.ca/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bhavya",
    lastName: "Joshi",
    username: "bhavyajoshi",
    password: "hi1234",
    userBio: "An avid gamer, photographer and traveller, Software Engineer at Microsoft.",
    portfolio: "https://bhavyaj-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Kruti",
    lastName: "Joshi",
    username: "krutijoshi",
    password: "kruti1234",
    userBio: "A dog lover, SDE-2 at Microsoft.",
    portfolio: "https://www.linkedin.com/in/joshikruti",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sharanya",
    lastName: "Agarwal",
    username: "sharanyaagarwal",
    password: "sharanya1234",
    userBio: "A NIFT graduate, Senior Design Officer at Myntra.",
    portfolio: "https://www.linkedin.com/in/sharanya-agarwal-808582157/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dan",
    lastName: "Abramov",
    username: "danabramov",
    password: "dan1234",
    userBio: "Created Redux. Software engineer at Facebook.",
    portfolio: "https://overreacted.io/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Andrew",
    lastName: "Garfield",
    username: "andrewgarfield",
    password: "andrew1234",
    userBio: "Oscar nominated actor. Spiderman (one of them) in the MCU.",
    portfolio: "https://en.wikipedia.org/wiki/Andrew_Garfield",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
