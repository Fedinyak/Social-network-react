// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
  
const initialState = {
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
  // newMessageBody: "",
};


const dialogsReducer = (state = initialState, action) => {

  // const stateCopy = {
  //   ...state,
  // };

  // let stateCopy;

  switch(action.type){
    // case UPDATE_NEW_MESSAGE_BODY:
    //   return {
    //       ...state,
    //       newMessageBody: action.body,
    //     };
      
      // stateCopy.newMessageBody = action.body;
      // return stateCopy;
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        // newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
      // stateCopy.newMessageBody = '';
      // stateCopy.messages.push({ id: 1, message: body });
      // return stateCopy;
    default:
      return state;
  }
}

// export const sendMessageCreator = () => {
//   return {
//     type: SEND_MESSAGE,
//   };
// };

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

// export const updateNewMessageBodyCreator = body => {
//   return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
// };

// export const updateNewMessageBodyCreator = body => 
// ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;