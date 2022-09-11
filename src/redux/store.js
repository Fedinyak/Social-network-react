import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from './sidebar-reducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "ja", likesCount: 10 },
        { id: 2, message: "Hi", likesCount: 2 },
      ],
      newPostText: 'Type text',
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Kot" },
        { id: 2, name: "Hitry" },
        { id: 3, name: "Nehitry" },
      ],
      messages: [
        { id: 1, message: "hi!" },
        { id: 2, message: "Raaaaa" },
        { id: 3, message: "Goth!" },
        { id: 4, message: "Yo!" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state is changed');
  },
  
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
}

export default store;
window.store = store;
// export default state;