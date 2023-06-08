import React from 'react';

const ContactInformation = ({ contactInfo }) => {
  return (
    <div className="profile-info">
      <h5 className="mb-20 h5 text-blue">Contact Information</h5>
      <ul>
        {contactInfo.map((item, index) => (
          <li key={index}>
            <span>{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInformation;
