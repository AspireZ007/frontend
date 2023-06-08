import React from "react";
import "../CSS/profileCard.css";

function FriendProfileCards({ profile , index }) {
  const coverUrl = `/assets/uploads/cover_picture_${index + 1}.jpg`;
  const imgUrl = `/assets/uploads/profile_picture_${index + 1}.jpg`;

  return (
    <div className="connections-card-container">
      <div className="connections-cover-photo">
        <img src={imgUrl} className="connections-profile" />
      </div>
      <div className="connections-profile-name">{profile.name}</div>
      <p className="connections-about">
        {profile.about}
      </p>
      <button className="connections-msg-btn connections-button">
        Message
      </button>
      <button className="connections-follow-btn connections-button following-button">
        Following
      </button>
    </div>
  );
}

export default FriendProfileCards;
