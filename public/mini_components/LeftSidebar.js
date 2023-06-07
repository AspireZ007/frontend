import React from "react";
import '../css/leftSidebar.css';

function LeftSidebar() {
  return (
    <div className = "feed-leftbar">

    <section className="leftSidebar" id="leftSidebar">
      <div className="row">
        <h3 className="boxTitle">
          My Favorites
          <i className="fas fa-edit icon" title="Edit" />
        </h3>
        <nav className="navLinks favourite-tab">
          <a href="./#" className="link favourite-item">
            <img
              src="/assets/images/shortcut-3.png"
              alt="shortcut-1"
              className="img"
              />
            <span className="name">javascript scripting</span>
          </a>
          <a href="./#" className="link favourite-item">
            <img
              src="/assets/images/shortcut-4.png"
              alt="shortcut-1"
              className="img"
              />
            <span className="name">HTML Markup</span>
          </a>
          <a href="./#" className="link favourite-item">
            <img
              src="/assets/images/shortcut-1.png"
              alt="shortcut-1"
              className="img"
              />
            <span className="name">CSS stylesheet</span>
          </a>
          <a href="./#" className="link favourite-item">
            <img
              src="/assets/images/shortcut-1.png"
              alt="shortcut-1"
              className="img"
              />
            <span className="name">github VCS </span>
          </a>
          <a href="./#" className="link favourite-item">
            <img
              src="/assets/images/shortcut-2.png"
              alt="shortcut-2"
              className="img"
              />
            <span className="name">fontawesome icons</span>
          </a>
        </nav>
      </div>
    </section>
      </div>
  );
}

export default LeftSidebar;
