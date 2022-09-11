import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, Navigate } from "react-router-dom";
import {
  sendMessageCreator,
  // updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
// import StoreContext from "../StoreContext";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

// const DialogsContainer = () => {
//   // const state = props.store.getState().messagesPage;

//   return (
//     <StoreContext.Consumer>
//       {store => {
//         // const state = store.getState().messagesPage;

//         const onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         const onNewMessageChange = body => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };

//         return (
//           <Dialogs
//             sendMessage={onSendMessageClick}
//             updateNewMessageBody={onNewMessageChange}
//             // messagesPage={state}
//             messagesPage={store.getState().messagesPage}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
// const AuthRedirectComponent = props => {
//   if (!this.props.isAuth) return <Navigate to={"/login"} />;
//   return <Dialogs {...props} />;
// };

// const mapStateToPropsForRedirect = state => {
//   return {
//     isAuth: state.auth.isAuth,
//   };
// };

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    // isAuth: state.auth.isAuth,
    // dialogs: state.dialogsPage.dialogs,
    // messages: state.dialogsPage.messages,
    // newMessageBody: state.dialogsPage.newMessageBody,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: newMessageBody => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    // updateNewMessageBody: body => {
    //   dispatch(updateNewMessageBodyCreator(body));
    // },
  };
};
// compose(connect(mapStateToProps,mapDispatchToProps), withAuthRedirect)(Dialogs)

// const AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);
// // const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer;
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
