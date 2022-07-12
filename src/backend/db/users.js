import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {
  dummyProfile,
  userImg2,
  userImg3,
  userImg4,
  userImg5,
  userImg6,
  userImg7,
} from "assets";
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
    profileImg: dummyProfile,
  },
  {
    _id: uuid(),
    firstName: "Bhavya",
    lastName: "Joshi",
    username: "bhavyajoshi",
    password: "hi1234",
    userBio:
      "An avid gamer, photographer and traveller, Software Engineer at Microsoft.",
    portfolio: "https://bhavyaj-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: userImg2,
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
    profileImg: userImg3,
  },
  {
    _id: uuid(),
    firstName: "Zendaya",
    lastName: "Coleman",
    username: "zendaya",
    password: "zendaya1234",
    userBio:
      "A Primetime Emmy Award winning actress. Time 100 Most Influential People in The World - '22",
    portfolio: "https://www.zendaya.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: userImg4,
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
    profileImg: userImg5,
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
    profileImg: userImg6,
  },
  {
    _id: uuid(),
    firstName: "Aloy",
    lastName: "Sobeck",
    username: "aloysobeck",
    password: "aloy1234",
    userBio:
      "A Nora Brave, Seeker and machine hunter of unparalleled skill, saved the world multiple times.",
    portfolio: "https://horizon.fandom.com/wiki/Aloy",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: userImg7,
  },
];
