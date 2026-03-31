import React from "react";

function ProfileCard(props) {
  return (
    <div>
      <h1>
        Hello {props.Name} From {props.City} - {props.Role}
      </h1>
    </div>
  );
}

export default ProfileCard;
