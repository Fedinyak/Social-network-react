import React from "react";
// import MyPostContainer from "./MyPostContainer";
import MyPostContainer from "./MyPostContainer";
// import ProfileInfo from "../ProfileInfo";
import ProfileInfo from "./ProfileInfo";

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
