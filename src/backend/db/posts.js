import { v4 as uuid } from "uuid";
import {
  postImg1,
  postImg2,
  postImg3,
  postImg4,
  postImg5,
  postImg6,
  dummyProfile,
} from "assets";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "This is a very famous lake in Ladakh. Pangong Lake, situated at a height of almost 4,350m, is the world's highest saltwater lake. Its water, which seems to be dyed in blue, stand in stark contrast to the arid mountains surrounding it. Extending to almost 160km, one-third of the Pangong Lake lies in India and the other two-thirds in China. Must visit!",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "guestguest",
    firstName: "John",
    lastName: "Doe",
    profileImg: dummyProfile,
    postImage: postImg1,
    createdAt: "2021-07-27 18:34:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "This is so good!",
        createdAt: "2021-09-18 21:15:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
      {
        _id: uuid(),
        username: "aloysobeck",
        text: "Really love your hard work.",
        createdAt: "2022-01-25 12:45:00",
        updatedAt: formatDate(),
        profileImg:
          "https://assets.reedpopcdn.com/horizon-forbidden-west-review-1644515572232.jpg/BROK/thumbnail/1200x1200/quality/100/horizon-forbidden-west-review-1644515572232.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Share this with your Ladakh gang! -> Zal Homestay, Leh. It was my home in Leh, and it was beautiful! I worked out of here, took my zoom calls and created my videos. Everything worked seamlessly. They have an amazing common room to chill and work out of. Lots of privacy when you need it, but can also end up making new friends here. It's around a 10 minute walk from the main market. My room was lovely and I've been dreaming to go back",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhavyajoshi",
    firstName: "Bhavya",
    lastName: "Joshi",
    profileImg:
      "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
    postImage: "",
    createdAt: "2019-11-14 20:05:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "So pretty!",
        createdAt: "2021-05-13 15:29:00",
        updatedAt: formatDate(),
        profileImg: dummyProfile,
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "5 things you must know before renting a car here in the US. I have rented out several cars so far, and I have a thing or two to tell you for sure! - If you are an Indian tourist, you do not need an international driving permit to rent a car. But you may have to be over 21/25 to rent it, based on the rules of different companies. - You can rent from many companies like Hertz, Enterprise etc. and some even peer-to-peer companies like Turo. Always check for competitive pricing, or ask your friends around who work in the US, if their companies provide them with an employee discount that you can borrow. I also came to know of the last point on this trip itself. - Refuelling can be a real pain for us guys, because let us face it, we never even have to get out of our cars in India. But doing it yourself is not that difficult. Just swipe your international card, remove nozzle, insert nozzle in fuel tank opening, select fuel type and begin. Replace nozzle! - Please do read up about important rules like right of way, merging into the highway, stop signs, when to yield etc. and atleast practice for a day with someone local. The last point is optional, but it really helped me get started. - Lastly, if you are sharing the car driving time with someone, you need to add an additional driver. Sometimes that is chargeable per day with some rental companies. But, you can get that done for free if you take up an aforementioned employee discount or if you have some privileges from using a certain credit card or car company!",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "bhavyajoshi",
    firstName: "Bhavya",
    lastName: "Joshi",
    profileImg:
      "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
    postImage: "",
    createdAt: "2022-01-10 02:19:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "Wonderful advice!",
        createdAt: "2022-02-23 16:09:00",
        updatedAt: formatDate(),
        profileImg: dummyProfile,
      },
      {
        _id: uuid(),
        username: "krutijoshi",
        text: "Amazing!",
        createdAt: "2022-03-06 08:12:00",
        updatedAt: formatDate(),
        profileImg:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
      },
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "Thanks a lot for this great info, look forward to using it during my trip!",
        createdAt: "2022-05-13 13:17:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The view from camp number 2 in Litham (11737 ft). It had started snowing slightly, and I saw 2 rebel horses shooed away from around the kitchen tent. The stream near the campsite was a bliss to listen to.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "krutijoshi",
    firstName: "Kruti",
    lastName: "Joshi",
    profileImg:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
    postImage: postImg2,
    createdAt: "2022-04-15 12:45:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "zendaya",
        text: "Beautiful!",
        createdAt: "2022-04-18 22:35:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
      },
      {
        _id: uuid(),
        username: "andrewgarfield",
        text: "What an incredible view.",
        createdAt: "2022-05-02 03:13:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1477337179709841411/IS_OEvzu_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Sky diving was definitely one of the best experiences I've had in my life! It felt wonderful to let go and drop from 15000 ft. Moreover, I got a beautiful bird's eye view over Boulder City. Thanks a ton Morro and @skydivelasvegas!",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "krutijoshi",
    firstName: "Kruti",
    lastName: "Joshi",
    profileImg:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
    postImage: postImg3,
    createdAt: "2022-02-12 16:23:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "So jealous!",
        createdAt: "2022-06-02 02:14:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Sightseeing on top of the world",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zendaya",
    firstName: "Zendaya",
    lastName: "Coleman",
    profileImg:
      "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
    postImage: postImg4,
    createdAt: "2021-12-27 14:25:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "Such a nice photo!",
        createdAt: "2022-01-05 05:45:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
      {
        _id: uuid(),
        username: "krutijoshi",
        text: "Incredible view!",
        createdAt: "2022-02-12 19:04:00",
        updatedAt: formatDate(),
        profileImg:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "When in San Francisco , one activity I would definitely recommend is cycling across the Golden Gate Bridge. It wasn't easy, but it was exhilarating! Just rent a cycle, cross the bridge, rush down the slope and grab a ferry to take you back.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "zendaya",
    firstName: "Zendaya",
    lastName: "Coleman",
    profileImg:
      "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
    postImage: "",
    createdAt: "2021-03-14 10:09:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "Great rec!",
        createdAt: "2021-04-07 15:48:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "On the Thousand Islands Tour, we saw a beautiful wedding taking place on one, but we passed by too quickly. There were some islands on which only people with a Canadian visa were allowed to deboard. And, a couple of them were up for sale. What do you think it would cost?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "danabramov",
    firstName: "Dan",
    lastName: "Abramov",
    profileImg:
      "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
    postImage: "",
    createdAt: "2022-06-05 11:19:00",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Coding while traveling, yes or no?",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "danabramov",
    firstName: "Dan",
    lastName: "Abramov",
    profileImg:
      "https://pbs.twimg.com/profile_images/1336281436685541376/fRSl8uJP_400x400.jpg",
    postImage: "",
    createdAt: "2022-02-02 01:29:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "aloysobeck",
        text: "No!",
        createdAt: "2022-04-07 11:44:00",
        updatedAt: formatDate(),
        profileImg:
          "https://assets.reedpopcdn.com/horizon-forbidden-west-review-1644515572232.jpg/BROK/thumbnail/1200x1200/quality/100/horizon-forbidden-west-review-1644515572232.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Another gem in Andhra, the gorge view in Gandikota is breathtaking. It's called the Grand Canyon of India. Gandikota in itself was beautiful. We went there in the evening and reached the gorge by 5 p.m. It was pleasant and windy, and I wish we'd had more time to spend there. If you like climbing rocks, you're going to have an added advantage.The only drawback of Gandikota is that there's not a lot of other things to see around the place and it's a long drive from Hyderabad. They do have camps set up there, so you can drive down, camp there at night, and visit Belum caves on your way back.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "andrewgarfield",
    firstName: "Andrew",
    lastName: "Garfield",
    profileImg:
      "https://pbs.twimg.com/profile_images/1477337179709841411/IS_OEvzu_400x400.jpg",
    postImage: postImg5,
    createdAt: "2022-04-04 18:36:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "krutijoshi",
        text: "Amazing picture, will definitely visit soon!",
        createdAt: "2022-05-17 17:04:00",
        updatedAt: formatDate(),
        profileImg:
          "https://media-exp1.licdn.com/dms/image/C4E03AQFuF0si6WbHsw/profile-displayphoto-shrink_800_800/0/1594139517656?e=1660176000&v=beta&t=wN7_44ugIcbMnuFu0y186-P9XJpzJLdJD_6wpe9_NbU",
      },
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "This looks breathtaking",
        createdAt: "2022-5-14 13:18:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The Marina Bay Sands Sky Park observation deck, located on the 57th floor, is something that I definitely will recommend. If possible, the deck should be your first stop in Singapore. With spectacular views of the city and information about everything that you can see from the deck, it will give an idea of what all there is to see in Singapore. Some people do prefer to go on the Singapore Flyer. I chose the Sky Park, because it was at a greater height than the flyer, and the ticket was cheaper too. Whatever you choose, at least one of these two are a must visit. And if you're feeling up to it, visit both! Don't forget to let me know which was better, though.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "andrewgarfield",
    firstName: "Andrew",
    lastName: "Garfield",
    profileImg:
      "https://pbs.twimg.com/profile_images/1477337179709841411/IS_OEvzu_400x400.jpg",
    postImage: "",
    createdAt: "2022-03-06 12:26:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "guestguest",
        text: "This view is to die for!",
        createdAt: "2022-05-19 12:05:00",
        updatedAt: formatDate(),
        profileImg: dummyProfile,
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "If you really want to appreciate the beauty of a place, one thing you must do, is just walk down the streets. We were walking down to the Lau Pa Sat food centre when we saw the incredible and iconic Singapore landscape.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aloysobeck",
    firstName: "Aloy",
    lastName: "Sobeck",
    profileImg:
      "https://assets.reedpopcdn.com/horizon-forbidden-west-review-1644515572232.jpg/BROK/thumbnail/1200x1200/quality/100/horizon-forbidden-west-review-1644515572232.jpg",
    postImage: "",
    createdAt: "2022-05-14 09:28:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "zendaya",
        text: "Pretty iconic!",
        createdAt: "2022-05-29 20:03:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Travelling in a train with your dog is amazing!",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aloysobeck",
    firstName: "Aloy",
    lastName: "Sobeck",
    profileImg:
      "https://assets.reedpopcdn.com/horizon-forbidden-west-review-1644515572232.jpg/BROK/thumbnail/1200x1200/quality/100/horizon-forbidden-west-review-1644515572232.jpg",
    postImage: postImg6,
    createdAt: "2022-03-09 19:46:00",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "zendaya",
        text: "Must be so much fun!",
        createdAt: "2022-06-03 04:21:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1422942795958980618/q3DuyOZ3_400x400.jpg",
      },
      {
        _id: uuid(),
        username: "guestguest",
        text: "So cute!",
        createdAt: "2022-05-29 20:03:00",
        updatedAt: formatDate(),
        profileImg: dummyProfile,
      },
      {
        _id: uuid(),
        username: "bhavyajoshi",
        text: "Wish I could do this still",
        createdAt: "2022-03-10 19:30:00",
        updatedAt: formatDate(),
        profileImg:
          "https://pbs.twimg.com/profile_images/1506155260527915013/4vqOiEu7_400x400.jpg",
      },
    ],
  },
];
