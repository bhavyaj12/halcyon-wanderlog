import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
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
];
