import React from "react";
import { connect } from "react-redux";
// import Posts from "./Post";
// import {
//   updateNewPostTextActionCreator,
//   addPostActionCreator,
// } from "../redux/profile-reducer";
import {
  // updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../redux/profile-reducer";
// import StoreContext from "../StoreContext";
// import Profile from "./Profile";
import MyPosts from "./MyPosts";

// const ProfileContainer = () => {
//   // const state = props.store.getState();

//   return (
//     <StoreContext.Consumer>
//       {store => {
//         const state = store.getState();

//         const addPost = () => {
//           // props.addPost();
//           // props.dispatch(addPostActionCreator());
//           store.dispatch(addPostActionCreator());
//         };

//         const onPostChange = text => {
//           // const text = newPostElement.current.value;
//           // props.updateNewPostText(text);
//           const action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//           // props.dispatch(action);
//         };

//         const zhop1 = () => {
//           alert("go");
//         };

//         return (
//           <Profile
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             // posts={props.store.posts}
//             posts={state.profilePage.posts}
//             // posts={state.profilePage.posts}
//             // newPostText={props.newPostText}
//             newPostText={state.profilePage.newPostText}
//             zhop={zhop1}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // updateNewPostText: text => {
    //   const action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
    addPost: newPostText => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
