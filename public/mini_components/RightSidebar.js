import React from "react";
import '../css/rightSidebar.css';

function RightSidebar() {
  return (
    // <div className="feed-right">
      <section className="rightSidebar" id="rightSidebar">
      <div className="row">
        <h3 className="title">Events</h3>
        <div className="boxContainer">
          {/* /.box  */}
          <article
            className="box"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="date" style={{ border: "3.5px solid #000067" }}>
              <h4 className="day">18</h4>
              <h5 className="month">September</h5>
            </div>
            <div className="content">
              <h3 className="title">JS bootcamp</h3>
              <p className="location">
                <i className="fas fa-map-marker-alt icon" />
                IIT KGP
              </p>
              <a href="./#read-more" className="readMore">
                read more
              </a>
            </div>
          </article>
          <article className="box">
            <div className="date" style={{ border: "3.5px solid #000067" }}>
              <h4 className="day">10</h4>
              <h5 className="month">November</h5>
            </div>
            <div className="content">
              <h3 className="title">PHP bootcamp</h3>
              <p className="location">
                <i className="fas fa-map-marker-alt icon" />
                GITAM
              </p>
              <a href="./#read-more" className="readMore">
                read more
              </a>
            </div>
          </article>
          {/* /.box  */}
          <article className="box">
            <div className="date" style={{ border: "3.5px solid #000067" }}>
              <h4 className="day">22</h4>
              <h5 className="month">December</h5>
            </div>
            <div className="content">
              <h3 className="title">React bootcamp</h3>
              <p className="location">
                <i className="fas fa-map-marker-alt icon" />
                JNTUK
              </p>
              <a href="./#read-more" className="readMore">
                read more
              </a>
            </div>
          </article>
          {/* /.box  */}
        </div>
        {/* /.boxContainer */}
      </div>
      {/* /.row */}
      {/* /.row */}
      <div className="contact">
        <h3 className="title friends-title">
          friends online
          <span className="icons">
            <i className="fas fa-video icon" title="Video call" />
            <i className="fas fa-search icon" title="Search" />
            <i className="fas fa-ellipsis-h icon" title="Settings" />
          </span>
        </h3>
        <div className="boxContainer">
          <article className="box">
            <img src="/assets/images/member-4.png" alt="member-4" className="img" />
            <h4 className="name">Jalil</h4>
          </article>
          <article className="box">
            <img src="/assets/images/member-3.png" alt="member-4" className="img" />
            <h4 className="name">Riya</h4>
          </article>
          <article className="box">
            <img src="/assets/images/member-2.png" alt="member-4" className="img" />
            <h4 className="name">imam hossain</h4>
          </article>
        </div>
      </div>
      {/* /.contact */}
    </section>
    // </div>
  );
}

export default RightSidebar;
