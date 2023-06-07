import React from "react";
import '../CSS/profileCard.css';

function FriendProfileCards({profile}) {
  return (
    <div className="connections-card-container">
  <div className="connections-cover-photo">
    <img
      src={profile['cover-img-url']}
      className="connections-profile"
    />
  </div>
  <div className="connections-profile-name">Beni Smith</div>
  <p className="connections-about">
    User Interface Designer and
    <br />
    front-end developer
  </p>
  <button className="connections-follow-btn connections-button">Follow</button>
</div>

  );
}

export default FriendProfileCards;
