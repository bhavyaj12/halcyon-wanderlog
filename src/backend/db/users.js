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
    lastName: "Guest",
    username: "guestguest",
    password: "Guest123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bhavya",
    lastName: "Joshi",
    username: "bhavyajoshi",
    password: "hi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
