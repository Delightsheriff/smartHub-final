import React from 'react';
import AbtTitle from '../../components/Abt-Vid/AbtTitle';
import ContactUs from '../../components/ContactUs/ContactUs';
import GoogleMap from '../../components/ContactUs/GoogleMap';

const Contact = () => {
  return (
    <>
      <AbtTitle
        title="
Our Contact Info"
        liContent="Contact"
      />
      <ContactUs />
      <GoogleMap />
    </>
  );
};

export default Contact;
