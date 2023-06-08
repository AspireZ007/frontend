import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul className="list-unstyled chat-list mt-2 mb-0">
      {contacts.map((contact, index) => (
        <li className="clearfix" key={index}>
          <img src={contact.avatar} alt="avatar" />
          <div className="about">
            <div className="name">{contact.name}</div>
            <div className="status">
              {contact.status === "online" ? (
                <i className="fa fa-circle online" />
              ) : (
                <i className="fa fa-circle offline" />
              )}{contact.status}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
