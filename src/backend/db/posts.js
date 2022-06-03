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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
    firstName: "Guest",
    lastName: "Doe",
    postImage: postImg1,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
        text: "Hope it gets better soon.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2022-02-13',
        updatedAt: '2022-02-13',
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Congratulations on your new job!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: '2020-07-07',
        updatedAt: '2020-07-07',
      },
    ],
    firstName: "Bhavya",
    lastName: "Joshi",
    postImage: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
