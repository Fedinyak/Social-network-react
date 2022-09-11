import React from "react";
import { Field, reduxForm } from "redux-form";
import Posts from "./Post";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";
// import MyPostContainer from "./MyPostContainer";
// import ProfileInfo from "../ProfileInfo";
// import {
//   updateNewPostTextActionCreator,
//   addPostActionCreator,
// } from "../redux/profile-reducer";

const MyPosts = props => {
  // console.log(props, "profile---");
  // debugger;
  // const postsElements = props.state.posts.map(data => (
  const postsElements = props.posts.map(data => (
    <Posts
      message={data.message}
      key={data.id}
      id={data.id}
      likes={data.likesCount}
    ></Posts>
  ));

  const newPostElement = React.createRef();
  const maxLength10 = maxLengthCreator(10);

  let AddNewPostForm = props => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          name="newPostText"
          // component="textarea"
          placeholder={"Post message"}
          component={Textarea}
          validate={[required, maxLength10]}
        />
        {/* <textarea
        onChange={onPostChange}
        ref={newPostElement}
        // value={props.newPostText}
        value={props.newPostText}
      ></textarea> */}
        <div>
          <button>Add post</button>
          {/* <button onClick={onZhop}>zhop</button> */}
        </div>
      </form>
    );
  };

  let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
    AddNewPostForm
  );

  const onAddPost = values => {
    // debugger;
    props.addPost(values.newPostText);
    // props.dispatch(addPostActionCreator());
  };

  // const onPostChange = () => {
  //   const text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  //   // const action = updateNewPostTextActionCreator(text);
  //   // props.dispatch(action);
  // };

  // const onZhop = () => {
  //   props.zhop();
  // };
  return (
    <section className="profile">
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <h2>Posts</h2>
      {postsElements}
    </section>
  );
};

export default MyPosts;
