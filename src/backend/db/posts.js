import { v4 as uuid } from "uuid";
import { postImg1 } from "assets";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "This is a very famous lake in Ladakh. Pangong Lake, situated at a height of almost 4,350m, is the world’s highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China. Must visit!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "guestguest",
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "This is so good!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2021-01-25',
        updatedAt: '2021-01-25',
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Really love your hard work.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2019-01-25',
        updatedAt: '2019-01-25',
      },
    ],
    firstName: "John",
    lastName: "Doe",
    postImage: postImg1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Share this with your Ladakh gang! -> Zal Homestay, Leh. It was my home in Leh, and it was beautiful! I worked out of here, took my zoom calls and created my videos. Everything worked seamlessly. They have an amazing common room to chill and work out of. Lots of privacy when you need it, but can also end up making new friends here. It’s around a 10 minute walk from the main market. My room was lovely and I’ve been dreaming to go back",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhavyajoshi",
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "So pretty!.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2021-05-13',
        updatedAt: '2021-05-13',
      },
    ],
    firstName: "Bhavya",
    lastName: "Joshi",
    postImage: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
