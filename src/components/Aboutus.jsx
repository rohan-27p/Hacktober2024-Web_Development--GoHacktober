import React from 'react';
import acm_logo from '../assets/acm_logo.png';

const AboutUs = () => {
  return (
    <div className="flex items-center bg-white text-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4 text-left">
          ACM at Jabalpur Engineering College brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.
        </p>
        <p className="mb-4 text-left">
          As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.
        </p>
        
        <h3 className="text-2xl font-semibold mt-6 mb-4">Basic Info</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center">
            <strong>Establishment:</strong> <span className="ml-1">30 April, 2018</span>
          </div>
          <div className="flex items-center">
            <strong>Phone No:</strong> <span className="ml-1">+91-761-2331953</span>
          </div>
          <div className="flex items-center">
            <strong>Email:</strong> 
            <a href="mailto:jecjabalpur.acm@gmail.com" className="ml-1 text-blue-500 underline">jecjabalpur.acm@gmail.com</a>
          </div>
          <div className="flex items-center">
            <strong>Address:</strong> <span className="ml-1">Madhya Pradesh 482011</span>
          </div>
          <div className="flex items-center">
            <strong>Website:</strong> 
            <a href="http://www.jecjabalpur.ac.in" className="ml-1 text-blue-500 underline" target="_blank" rel="noopener noreferrer">www.jecjabalpur.ac.in</a>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <img src={acm_logo} alt="ACM Logo" className="h-50" /> 
      </div>
    </div>
  );
};

export default AboutUs;
