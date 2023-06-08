import React, { useState } from "react";
import "../CSS/chat.css";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";
import Navbar from "../mini_components/Navbar";

function Chatting() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = [
    {
      name: "Vincent Porter",
      status: "left 7 mins ago",
      avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      name: "Aiden Chavez",
      status: "online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      name: "Mike Thomas",
      status: "online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      name: "Christian Kelly",
      status: "left 10 hours ago",
      avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      name: "Monica Ward",
      status: "online",
      avatar: "https://bootdey.com/img/Content/avatar/avatar8.png",
    },
    {
      name: "Dean Henry",
      status: "offline since Oct 28",
      avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
  ].filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <title>chat</title>
      <link rel="stylesheet" href="chat.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossOrigin="anonymous"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <Navbar />
      <div className="overall">
        <br></br>
        <br></br>
        <br></br>
        <div className="container">


          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card chat-app">
                <div id="plist" className="people-list">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      value={filter}
                      onChange={handleFilterChange}
                    />
                  </div>
                  <ContactList contacts={filteredContacts} />
                </div>
                <ChatWindow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
