import { v4 as uuid } from "uuid";
import { postImg1, dummyProfile } from "assets";
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
      likeCount: 2,
      likedBy: [{ username: "krutijoshi"}, { username: "sharanyaagarwal"}],
      dislikedBy: [],
    },
    username: "guestguest",
    firstName: "John",
    lastName: "Doe",
    profileImg: dummyProfile,
    postImage: postImg1,
    createdAt: '2021-07-27 18:34:00',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "This is so good!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2021-09-18 21:15:00',
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Really love your hard work.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2022-01-25 12:45:00',
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Share this with your Ladakh gang! -> Zal Homestay, Leh. It was my home in Leh, and it was beautiful! I worked out of here, took my zoom calls and created my videos. Everything worked seamlessly. They have an amazing common room to chill and work out of. Lots of privacy when you need it, but can also end up making new friends here. It’s around a 10 minute walk from the main market. My room was lovely and I’ve been dreaming to go back",
    likes: {
      likeCount: 5,
      likedBy: [{ username: "guestguest"}, { username: "krutijoshi"}, { username: "sharanyaagarwal"}, { username: "danabramov"}, { username: "andrewgarfield"}],
      dislikedBy: [],
    },
    username: "bhavyajoshi",
    firstName: "Bhavya",
    lastName: "Joshi",
    profileImg: "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
    postImage: "",
    createdAt: '2019-11-14 20:05:00',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "So pretty!.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2021-05-13 15:29:00',
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "5 things you must know before renting a car here. I have rented out several cars so far, and I have a thing or two to tell you for sure! - If you are an Indian tourist, you don’t need an international driving permit to rent a car. But you may have to be over 21/25 to rent it, based on the rules of different companies. - You can rent from many companies like Hertz, Enterprise etc. and some even peer-to-peer companies like Turo. Always check for competitive pricing, or ask your friends around who work in the US, if their companies provide them with an employee discount that you can borrow. I also came to know of the last point on this trip itself. - Refuelling can be a real pain for us guys, because let’s face it, we never even have to get out of our cars in India. But doing it yourself is not that difficult. Just swipe your international card, remove nozzle, insert nozzle in fuel tank opening, select fuel type and begin. Replace nozzle! - Please do read up about important rules like right of way, merging into the highway, stop signs, when to yield etc. and atleast practice for a day with someone local. The last point is optional, but it really helped me get started. - Lastly, if you are sharing the car driving time with someone, you need to add an additional driver. Sometimes that’s chargeable per day with some rental companies. But, you can get that done for free if you take up an aforementioned employee discount or if you have some privileges from using a certain credit card or car company!",
    likes: {
      likeCount: 1,
      likedBy: [{ username: "guestguest"}],
      dislikedBy: [],
    },
    username: "bhavyajoshi",
    firstName: "Bhavya",
    lastName: "Joshi",
    profileImg: "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
    postImage: "",
    createdAt: '2022-01-10 02:19:00',
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "Wonderful advice!.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2022-02-23 16:09:00',
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "krutijoshi",
        text: "Amazing!.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2022-03-06 08:12:00',
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "Thanks!.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2022-05-13 13:17:00',
        updatedAt: formatDate(),
      },
    ],
  },
];
