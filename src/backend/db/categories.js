import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "directors",
    categoryTitle: "Directors",
    categoryImg:
      "https://images.unsplash.com/photo-1616527546362-bf6b7f80a751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },

  {
    _id: uuid(),
    categoryName: "motifs",
    categoryTitle: "Motifs & motives",
    categoryImg:
      "https://assets.videomaker.com/2020/03/unnamed-1-1-1392x783.jpg",
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "characters",
    categoryTitle: "Characters",
    categoryImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnO3onrCZYvCC-jm4P_yoO02sCo_GvixWfg&usqp=CAU",
    // "https://cdn.iconscout.com/icon/premium/png-128-thumb/actor-2802241-2322666.png",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "storytelling",
    categoryTitle: "Story telling",
    categoryImg:
      "https://media.istockphoto.com/photos/open-book-with-hand-drawn-landscape-picture-id1087508538?k=20&m=1087508538&s=612x612&w=0&h=XcvQO33daGQV1BQK1qSxqW__hVZIN2kRU-pUd91HLCE=",
    // "https://cdn.iconscout.com/icon/premium/png-128-thumb/story-board-3790035-3164765.png",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "scripts",
    categoryTitle: "Scripts",
    categoryImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UeWnIDTiadmfADqA9xVSP8AJ0XjuVO_Nxw&usqp=CAU",
    // "https://cdn.iconscout.com/icon/premium/png-128-thumb/movie-script-2055997-1734317.png",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "screenwriting",
    categoryTitle: "Screen writing",
    categoryImg:
      "https://images.freeimages.com/images/small-previews/0c5/writing-1239763.jpg",
    // "https://cdn.iconscout.com/icon/premium/png-128-thumb/story-screenwriting-3696623-3081232.png",
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
];
