import React from "react";
import "../css/profileCard.css";

function FriendProfileCards({ profile }) {
  return (
    <div className="connections-card-container">
      <div className="connections-cover-photo">
        <img src={profile["img-url"]} className="connections-profile" />
      </div>
      <div className="connections-profile-name">{profile.name}</div>
      <p className="connections-about">
        User Interface Designer and
        <br />
        front-end developer
      </p>
      <button className="connections-msg-btn connections-button">
        Message
      </button>
      <button className="connections-follow-btn connections-button">
        Following
      </button>
    </div>
  );
}

export default FriendProfileCards;
