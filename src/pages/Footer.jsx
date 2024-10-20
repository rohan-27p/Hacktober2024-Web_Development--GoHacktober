import React from 'react';
import acm_logo from "../assets/acm_logo.png";
import './Footer.css';

export default function Footer({bg}){
return(
    <>
    <div  className="flex justify-center items-center bg-white">
    <div className="flex items-center">
    <a href="https://www.instagram.com/acmjec/"><i className="fa-brands fa-instagram m-2 pt-1 text-4xl sm:text-5xl"></i></a>
    <a href="https://www.linkedin.com/company/acmjec/"><i className="fa-brands fa-linkedin m-2 pt-1 text-4xl sm:text-5xl"></i></a>
    <a href="https://www.facebook.com/jecacm/"><i className="fa-brands fa-facebook m-2 pt-1 text-4xl sm:text-5xl"></i></a>
    <a href="https://github.com/acmjec"><i className="fa-brands fa-github pt-1 m-2 text-4xl sm:text-5xl" ></i></a>
    <a href="https://jecjabalpur.acm.org"><img src={acm_logo} alt="ACM Logo" className="h-16 sm:h-20 m-2"  /></a>
    </div>
    </div>
    </>
)
}
