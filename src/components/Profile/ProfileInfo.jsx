import React from "react";
// import Preloader from "./common/preloader/Preloader.js";
import Preloader from "../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import userPhoto from "../../asserts/images/users.png";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import { saveProfile } from "../../redux/profile-reducer";

const ProfileInfo = props => {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    // saveProfile(formData).then(() => {
    //   setEditMode(false);
    // });
    saveProfile(formData);
    setEditMode(false);
    // console.log(formData);
  };

  return (
    <section>
      <img
        style={{ width: "100%" }}
        src={props.profile.photos.large || userPhoto}
      />
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfileDataForm
          initialValues={props.profile}
          profile={props.profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          profile={props.profile}
          isOwner={props.isOwner}
        />
      )}

      <p>Profile Info</p>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </section>
  );
};

const ProfileData = props => {
  return (
    <div>
      {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
      <b>Full name:</b> {props.profile.fullName}
      <br />
      <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
      <br />
      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b>{" "}
          {props.profile.lookingForAJobDescription}
        </div>
      )}
      <b>About me:</b> {props.profile.aboutMe}
      <br />
      <b>Contacts: </b>
      {Object.keys(props.profile.contacts).map(key => {
        return (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={props.profile.contacts[key]}
          />
        );
      })}
    </div>
  );
};

// const ProfileDataForm = props => {
//   return (
//     <div>
//       {/* <b>Full name:</b> {props.profile.fullName}
//       <br />
//       <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
//       <br />
//       {props.profile.lookingForAJob && (
//         <div>
//           <b>My professional skills:</b>{" "}
//           {props.profile.lookingForAJobDescription}
//         </div>
//       )}
//       <b>About me:</b> {props.profile.aboutMe}
//       <br />
//       <b>Contacts: </b>
//       {Object.keys(props.profile.contacts).map(key => {
//         return (
//           <Contact
//             key={key}
//             contactTitle={key}
//             contactValue={props.profile.contacts[key]}
//           />
//         );
//       })} */}
//       Form
//     </div>
//   );
// };

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};
export default ProfileInfo;
