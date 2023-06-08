import React from "react";
import "../CSS/chat.css";
const ChatWindow = () => {
  return (
    <div className="chat">
      <div className="chat-header clearfix">
        <div className="row">
          <div className="col-lg-6">
            <a
              href="javascript:void(0);"
              data-toggle="modal"
              data-target="#view_info"
            >
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt="avatar"
              />
            </a>
            <div className="chat-about">
              <h6 className="m-b-0">Aiden Chavez</h6>
              <small>Last seen: 2 hours ago</small>
            </div>
          </div>
          <div className="col-lg-6 hidden-sm text-right">
            {/* <button className="navigate-back" onclick={back()}>
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button> */}
            {/* <a href="javascript:void(0);" className="btn btn-outline-info">
              <i className="fa fa-cogs" />
            </a>
            <a href="javascript:void(0);" className="btn btn-outline-warning">
              <i className="fa fa-question" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="chat-history">
        <ul className="m-b-0">
          <li className="clearfix">
            <div className="message-data text-right">
              <span className="message-data-time">10:10 AM, Today</span>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="avatar"
              />
            </div>
            <div className="message other-message float-right">
              Hi Aiden, how are you? How is the project coming along?
            </div>
          </li>
          <li className="clearfix">
            <div className="message-data text-right">
              <span className="message-data-time">10:10 AM, Today</span>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="avatar"
              />
            </div>
            <div className="message other-message float-right">
              how are you? How is the project coming along?
            </div>
          </li>
          <li className="clearfix">
            <div className="message-data text-right">
              <span className="message-data-time">10:10 AM, Today</span>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="avatar"
              />
            </div>
            <div className="message other-message float-right">
              Hi Aidenow is the project coming along?
            </div>
          </li>
          <li className="clearfix">
            <div className="message-data">
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">Are we meeting today?</div>
          </li>
          <li className="clearfix">
            <div className="message-data">
              <span className="message-data-time">10:15 AM, Today</span>
            </div>
            <div className="message my-message">
              Project has been already finished and I have results to show you.
            </div>
          </li>
        </ul>
      </div>
      <div className="chat-message clearfix">
        <div className="input-group mb-0">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-send" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text here..."
          />
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-paperclip" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
