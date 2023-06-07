import React from "react";
import '../css/mainFeed.css';

function MainFeed() {
  return (
    <section className="main" id="main">
      <div className="container">
        {/* /.stories */}
        <div className="post">
          <div className="content">
            <img
              src="/assets/images/profile-pic.jpg"
              alt="profile-pic"
              className="avatar"
            />
            <input
              type="text"
              className="textBox"
              placeholder="what's on your mind, Nithin?"
            />
          </div>
          {/* /.content  */}
          <div className="features">
            <div className="feature">
              <i className="fas fa-video icon" title="Live Video" />
              <span className="name hidden">live video</span>
            </div>
            <div className="feature">
              <i className="fas fa-image" title="Photo/Video" />
              <span className="name hidden">photo/ video</span>
            </div>
            <div className="feature">
              <i className="fas fa-grin icon" title="Feeling/Activity" />
              <span className="name hidden">feeling/activity</span>
            </div>
            {/* /.feature */}
          </div>
          {/* /.features */}
        </div>
        {/* /.post */}
        <div className="postPublished">
          <header className="top">
            <div className="user">
              <img
                src="/assets/images/profile-pic.jpg"
                alt="profile-pic"
                className="avatar"
              />
              <div className="info">
                <a href="./#profile" className="name">
                  Nithin
                </a>
                <p className="time">10 july 2022, 04:30PM</p>
              </div>
            </div>
            <div className="actions">
              <i className="fas fa-ellipsis-v icon" />
            </div>
            {/* /.user */}
          </header>
          {/* /.header */}
          <div className="content">
            <p className="text">
              Working on groundbreaking robotic assistant, empowering disabled
              individuals with newfound independence and support.
              <a href="/.#hashtag" className="link">
                #InclusiveInnovation{" "}
              </a>
            </p>
            <img src="/assets/images/feed-image-1.jpg" alt="news" className="img" />
          </div>
          {/* /.content */}
          <div className="bottom">
            <div className="after">
              <article className="likes">
                <i className="fas fa-thumbs-up icon" />
                sakil &amp; 100 others
              </article>
              <div className="others">
                <article className="box">50 comments</article>
                <article className="box">30 share</article>
              </div>
            </div>
            {/* /.after */}
            <div className="before">
              <div className="box">
                <i className="fas fa-thumbs-up icon" />
                like
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-comment-alt icon" />
                comment
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-share-square icon" />
                share
              </div>
            </div>
            {/* /.after  */}
          </div>
          {/* /.bottom */}
        </div>
        {/* /.postPublished */}
        <div className="postPublished">
          <header className="top">
            <div className="user">
              <img
                src="/assets/images/member-1.jpg"
                alt="profile-pic"
                className="avatar"
              />
              <div className="info">
                <a href="./#profile" className="name">
                  {" "}
                  Roja{" "}
                </a>
                <p className="time">05 july 2021, 08:30PM</p>
              </div>
            </div>
            {/* /.user */}
            <div className="actions">
              <i className="fas fa-ellipsis-v icon" />
            </div>
          </header>
          {/* /.header */}
          <div className="content">
            <p className="text">
              Embracing memories, laughter, and achievements as we bid farewell
              to an unforgettable journey at IIT Bombay
              <a href="/.#hashtag" className="link">
                {" "}
                #FarewellVibes"{" "}
              </a>
            </p>
            <img src="/assets/images/feed-image-2.jpg" alt="news" className="img" />
          </div>
          {/* /.content */}
          <div className="bottom">
            <div className="after">
              <article className="likes">
                <i className="fas fa-thumbs-up icon" />
                Mohan &amp; 2K others
              </article>
              <div className="others">
                <article className="box">10 comments</article>
                <article className="box">5 share</article>
              </div>
            </div>
            {/* /.after */}
            <div className="before">
              <div className="box">
                <i className="fas fa-thumbs-up icon" />
                like
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-comment-alt icon" />
                comment
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-share-square icon" />
                share
              </div>
            </div>
            {/* /.after  */}
          </div>
          {/* /.bottom */}
        </div>
        {/* /.postPublished */}
        <div className="postPublished">
          <header className="top">
            <div className="user">
              <img
                src="/assets/images/member-3.png"
                alt="profile-pic"
                className="avatar"
              />
              <div className="info">
                <a href="./#profile" className="name">
                  Riya
                </a>
                <p className="time">10 july 2021, 04:30PM</p>
              </div>
            </div>
            {/* /.user */}
            <div className="actions">
              <i className="fas fa-ellipsis-v icon" />
            </div>
          </header>
          {/* /.header */}
          <div className="content">
            <p className="text">
              Thrilled by the innovative teaching methods revolutionizing Indian
              schools, nurturing a love for learning
              <a href="/.#hashtag" className="link">
                #EducationEvolution
              </a>
              <a href="/.#hashtag" className="link">
                {" "}
                #FutureFocused
              </a>
            </p>
            <img src="/assets/images/feed-image-3.jpg" alt="news" className="img" />
          </div>
          {/* /.content */}
          <div className="bottom">
            <div className="after">
              <article className="likes">
                <i className="fas fa-thumbs-up icon" />
                Somesh &amp; 1K others
              </article>
              <div className="others">
                <article className="box">11 comments</article>
                <article className="box">51 share</article>
              </div>
            </div>
            {/* /.after */}
            <div className="before">
              <div className="box">
                <i className="fas fa-thumbs-up icon" />
                like
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-comment-alt icon" />
                comment
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-share-square icon" />
                share
              </div>
            </div>
            {/* /.before  */}
          </div>
          {/* /.bottom */}
        </div>
        <div className="postPublished">
          <header className="top">
            <div className="user">
              <img
                src="/assets/images/member-1.jpg"
                alt="profile-pic"
                className="avatar"
              />
              <div className="info">
                <a href="./#profile" className="name">
                  {" "}
                  Roja{" "}
                </a>
                <p className="time">05 july 2021, 08:30PM</p>
              </div>
            </div>
            {/* /.user */}
            <div className="actions">
              <i className="fas fa-ellipsis-v icon" />
            </div>
          </header>
          {/* /.header */}
          <div className="content">
            <p className="text">
              Join us at the grand stage of innovation and technology as we
              invite you to Techfest, IIT Bombay. Unleash your potential and
              witness the future unfold!
              <a href="/.#hashtag" className="link">
                {" "}
                #Techfest2017
              </a>
              <a href="/.#hashtag" className="link">
                {" "}
                #InnovationUnbound
              </a>
            </p>
            <img src="/assets/images/feed-image-4.jpg" alt="news" className="img" />
          </div>
          {/* /.content */}
          <div className="bottom">
            <div className="after">
              <article className="likes">
                <i className="fas fa-thumbs-up icon" />
                rony &amp; 1.5K others
              </article>
              <div className="others">
                <article className="box">10 5comments</article>
                <article className="box">59 share</article>
              </div>
            </div>
            {/* /.after */}
            <div className="before">
              <div className="box">
                <i className="fas fa-thumbs-up icon" />
                like
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-comment-alt icon" />
                comment
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-share-square icon" />
                share
              </div>
            </div>
            {/* /.before  */}
          </div>
          {/* /.bottom */}
        </div>
        {/* /.postPublished */}
        <div className="postPublished">
          <header className="top">
            <div className="user">
              <img
                src="/assets/images/member-4.png"
                alt="profile-pic"
                className="avatar"
              />
              <div className="info">
                <a href="./#profile" className="name">
                  {" "}
                  Jalil{" "}
                </a>
                <p className="time">05 june 2021, 08:30PM</p>
              </div>
            </div>
            {/* /.user */}
            <div className="actions">
              <i className="fas fa-ellipsis-v icon" />
            </div>
          </header>
          {/* /.header */}
          <div className="content">
            <p className="text">
              Gear up for the ultimate battle of machines! Witness the intensity
              and adrenaline rush at Robowars, IIT Kharagpur. Who will emerge
              victorious?
              <a href="/.#hashtag" className="link">
                #Robowars2023
              </a>
              <a href="/.#hashtag" className="link">
                #UnleashTheBots
              </a>
            </p>
            <img src="/assets/images/feed-image-5.jpg" alt="news" className="img" />
          </div>
          {/* /.content */}
          <div className="bottom">
            <div className="after">
              <article className="likes">
                <i className="fas fa-thumbs-up icon" />
                rubel &amp; 200 others
              </article>
              <div className="others">
                <article className="box">60 comments</article>
                <article className="box">55 share</article>
              </div>
            </div>
            {/* /.after */}
            <div className="before">
              <div className="box">
                <i className="fas fa-thumbs-up icon" />
                like
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-comment-alt icon" />
                comment
              </div>
              {/* /.box */}
              <div className="box">
                <i className="fas fa-share-square icon" />
                share
              </div>
            </div>
            {/* /.before  */}
          </div>
          {/* /.bottom */}
        </div>
        {/* /.postPublished */}
        <div className="loadMore">
          <i className="fas fa-spinner icon" title="Loading More..." />
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}

export default MainFeed;
