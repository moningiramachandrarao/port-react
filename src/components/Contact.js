import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faHome
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="container-fluid my-2">
      <div className="d-flex justify-content-center" style={{ borderBottom: "grey solid" }}>
        <h1 className="text-light">Contact</h1>
        <h1 className="text-danger px-2">Details</h1>
      </div>

      <div className="container my-3">
        <div className="d-flex justify-content-left text-light p-1">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className='px-2' />
          <p className="fs-5" style={{ color: 'white' }}>moningiramachandrarao@gmail.com</p>
        </div>
        <div className="d-flex justify-content-left text-light">
          <FontAwesomeIcon icon={faPhone} size="2x" className='px-2' />
          <p className="fs-5" style={{ color: 'white' }}>9515278387</p>
        </div>
        <div className="d-flex justify-content-left text-light">
          <FontAwesomeIcon icon={faHome} size="2x" className='px-2' />
          <p className="fs-5" style={{ color: 'white' }}>Hiramandalam, Srikakulam District</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
