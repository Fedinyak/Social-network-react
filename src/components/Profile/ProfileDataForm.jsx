import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>
      {error && <div>{error}</div>}
      <b>Full name:</b>
      {createField("Full name", "fullName", [], Input)}
      <br />
      <b>Looking for a job:</b>
      {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      <br />
      <div>
        <b>My professional skills:</b>
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <b>About me:</b>
      {createField("About me", "aboutMe", [], Textarea)}
      <br />
      <b>Contacts: </b>
      {Object.keys(profile.contacts).map(key => {
        return (
          <div key={key}>
            <b>
              {key}: {createField(key, "contacts." + key, [], Input)}
            </b>
          </div>
        );
      })}
    </form>
  );
};
// const Contact = ({ contactTitle, contactValue }) => {
//   return (
//     <div>
//       <b>{contactTitle}: </b>
//       {contactValue}
//     </div>
//   );
// };
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
