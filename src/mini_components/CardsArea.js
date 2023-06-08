import React from "react";
import FriendProfileCards from "./FriendProfileCards.js";
import ExploreProfileCards from "./ExploreProfileCards.js";
import "../CSS/cardsArea.css";
function cardsArea({ toggleState }) {
  const profiles = [
    {
      name: "Aarav Gupta",
      about: "Full Stack Developer",
    },
    {
        name: "Advait Sharma",
        about: "Data Scientist",
    },
    {
        name: "Saanvi Patel",
      about: "Artificial Intelligence Researcher",
    },
    {
      name: "Anup Desai",
      about: "Cybersecurity Analyst",
    },
    {
      name: "Reyansh Iyer",
      about: "Blockchain Developer",
    },
    {
      name: "Babbar Babu",
      about: "UX/UI Designer",
    },
    {
      name: "Mohan Reddy",
      about: "State Developer",
    },
    {
      name: "Paul K.A",
      about: "Peace Maker",
    },
    {
      name: "Arjun Sharma",
      about: "Data Analyst",
    },
    {
      name: "N.B. Krishna",
      about: "Web Developer",
    },
    {
      name: "Bobby",
      about: "Machine Learning Engineer",
    },
    {
      name: "Gajala",
      about: "CEO Sonic solutions",
    },
  ];
  return (
    <div className="card-area">
      {profiles.map((profile, i) =>
        toggleState === 0 ? (
          <FriendProfileCards profile={profile} index={i} />
        ) : (
          <ExploreProfileCards profile={profile} index={i} />
        )
      )}
    </div>
  );
}

export default cardsArea;
