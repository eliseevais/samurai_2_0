const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';

export const storeOOP = {
  _state: {
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
      ],
      newMesssageText: 'Enter your text...'
    },
    profilePage: {
      postsData: [
        { id: 1, postText: "Hello, friends!", likesCount: 8 },
        { id: 2, postText: "How are you doing?", likesCount: 9 },
        { id: 3, postText: "I am fine!", likesCount: 4 },
      ],
      newPostText: 'Hop! Hey! La-la-ley!'
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
      ],
      newNewsDataElement: "It's my 34th lesson."
    },
    musicPage: {
      musicData: [
        { id: 1, athor: "Sting", songName: "My heart" },
        { id: 2, athor: "Muse", songName: "Big black hole" },
        { id: 3, athor: "Lada", songName: "LaLaLand" },
      ]
    }
  },
  _callSubscriber() {
    console.log('store was changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        postText: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMesssage = {
        id: 4,
        message: this._state.dialogsPage.newMesssageText
      }
      this._state.dialogsPage.messagesData.push(newMesssage);
      this._state.dialogsPage.newMesssageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMesssageText = action.newMesssageParameter;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEWS) {
      let newNewsText = {
        id: 5,
        newsText: this._state.newsPage.newNewsDataElement,
        data: "2023-09-02"
      }
      this._state.newsPage.newsData.push(newNewsText);
      this._state.newsPage.newNewsDataElement = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_NEWS_TEXT) {
      this._state.newsPage.newNewsDataElement = action.newNewsTextProps;
      this._callSubscriber(this._state);
    }
  },
}

export let addPostAC = () => {
  return { type: ADD_POST };
};

export let updateNewPostAC = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
};

export let sendMessageAC = () => {
  return { type: SEND_MESSAGE }
};

export let updateNewMessageTextAC = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMesssageParameter: text };
};

export let addNewsAC = () => {
  return { type: ADD_NEWS }
};

export let updateNewNewsTextAC = (news) => {
  return { type: UPDATE_NEW_NEWS_TEXT, newNewsTextProps: news }
};

window.state = storeOOP;


