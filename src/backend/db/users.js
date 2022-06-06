import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { dummyProfile } from "assets";
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
    profileImg: dummyProfile
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
    profileImg: "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
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
    profileImg: "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
  },
  {
    _id: uuid(),
    firstName: "Zendaya",
    lastName: "Coleman",
    username: "zendaya",
    password: "zendaya1234",
    userBio: "A Primetime Emmy Award winning actress. Time 100 Most Influential People in The World - '22",
    portfolio: "https://www.zendaya.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
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
    profileImg: "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
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
    profileImg: "https://pbs.twimg.com/profile_images/1477337179709841411/IS_OEvzu_400x400.jpg",
  },
  {
    _id: uuid(),
    firstName: "Aloy",
    lastName: "Sobeck",
    username: "aloysobeck",
    password: "aloy1234",
    userBio: "A Nora Brave, Seeker and machine hunter of unparalleled skill, saved the world multiple times.",
    portfolio: "https://horizon.fandom.com/wiki/Aloy",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg: "https://assets.reedpopcdn.com/horizon-forbidden-west-review-1644515572232.jpg/BROK/thumbnail/1200x1200/quality/100/horizon-forbidden-west-review-1644515572232.jpg",
  },
];
