import React from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
// import {
//   sendMessageCreator,
//   updateNewMessageBodyCreator,
// } from "../redux/dialogs-reducer";

const DialogItem = props => {
  return (
    <li className="dialog__item">
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </li>
  );
};

const Message = props => {
  return <li className="message__item">{props.message}</li>;
};

const Dialogs = props => {
  let state = props.dialogsPage;
  // console.log(state, "props");
  // const state = props;

  const dialogElements = state.dialogs.map(data => (
    // const dialogElements = props.dialogs.map(data => (
    <DialogItem name={data.name} id={data.id} key={data.id} />
  ));

  const messageElements = state.messages.map(data => (
    // const messageElements = props.messages.map(data => (
    <Message message={data.message} id={data.id} key={data.id} />
  ));

  const newMessageBody = state.newMessageBody;
  // const newMessageBody = props.newMessageBody;

  // const onSendMessageClick = () => {
  //   props.sendMessage();
  //   // props.store.dispatch(sendMessageCreator());
  // };

  // const onNewMessageChange = e => {
  //   // debugger;
  //   let body = e.target.value;
  //   props.updateNewMessageBody(body);
  //   // props.store.dispatch(updateNewMessageBodyCreator(body));
  // };

  const addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className="dialogs">
      <ul className="list dialogs__list">{dialogElements}</ul>
      <div className="messages">
        <ul className="list messages__list">{messageElements}</ul>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name="newMessageBody"
        placeholder="Enter your message"
      />
      {/* <textarea
        placeholder="Enter your message"
        // value={props.newMessageBody}
        value={newMessageBody}
        onChange={onNewMessageChange}
      ></textarea> */}
      <button>Send</button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMesaForm" })(
  AddMessageForm
);

export default Dialogs;
