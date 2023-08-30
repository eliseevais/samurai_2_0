import { rerenderEntireTree } from "../render";

export const store = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Sofa" },
      { id: 2, name: "Nikolay" },
      { id: 3, name: "Maria" },
      { id: 4, name: "Denis" },
      { id: 5, name: "Mark" },
    ],
    messagesData: [
      { id: 1, message: "Hello!" },
      { id: 2, message: "How are you doing?" },
      { id: 3, message: "I am fine, thank you. And you?" },
    ]
  },
  profilePage: {
    postsData: [
      { id: 1, postText: "Hello, friends!", likesCount: 8 },
      { id: 2, postText: "How are you doing?", likesCount: 9 },
      { id: 3, postText: "I am fine!", likesCount: 4 },
    ]
  },
  friendsPage: {
    friendsData: [
      { id: 1, name: "Olya", surname: "Markova" },
      { id: 2, name: "Mikhail", surname: "Petrov" },
      { id: 3, name: "Sasha", surname: "Blank" },
      { id: 4, name: "Katya", surname: "Obukhova" },
      { id: 5, name: "Gena", surname: "Fillimonov" },
    ]
  },
  newsPage: {
    newsData: [
      { id: 1, newsText: "I took a start!", data: "2023-08-07" },
      { id: 2, newsText: "I like my study course.", data: "2023-08-10" },
      { id: 3, newsText: "I can do it easy.", data: "2023-08-13" },
      { id: 4, newsText: "My temp is very good.", data: "2023-08-22" }
    ]
  },
  musicPage: {
    musicData: [
      { id: 1, athor: "Sting", songName: "My heart" },
      { id: 2, athor: "Muse", songName: "Big black hole" },
      { id: 3, athor: "Lada", songName: "LaLaLand" },
    ]
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    postText: postMessage,
    likesCount: 5
  }
  store.profilePage.postsData.push(newPost);
  rerenderEntireTree(store);
};


