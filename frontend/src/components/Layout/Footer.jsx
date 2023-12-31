import React from 'react';

import { Link } from 'react-router-dom'

//Images Stuff
import mail from '../../assets/Footer/mail.png'
import linkedin from '../../assets/Footer/linkedin-2.png'
import facebook from '../../assets/Footer/facebook.png'
import call from '../../assets/Footer/call.png'

import TextHighlight from './Form/TextHighlight'

function Footer() {
  
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-1 grid-cols-2">
        {/* <div className="flex flex-col md:flex-wrap md:flex justify-between items-start md:items-center w-full"> */}
          {/* First Column */}
          <div className="my-4 mx-2 md:mb-0 md:w-1/2 w-full">
            <h3 className="mb-2"><TextHighlight title={'OFFICE LELO'} /></h3>
            <p className="text-sm">A platform to provide the places where you can conduct meet, enjoy vocation, or do many things after reserved a place</p>
          </div>

          {/* Second Column */}
          <div className="my-4 mx-2  md:mb-0 w-1/2">
            <h3 className="text-lg  font-semibold mb-2">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-1"><Link to="/about">About</Link></li>
              <li className="mb-1"><Link to="/privacy">Privacy</Link></li>
              <li className="mb-1"><Link to="/links">Important Links</Link></li>
              <a href='/#FAQs' target='_blank' className="mb-1">FAQs</a>
              {/* <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li>
               <li className="text-lg font-semibold mb-2">Links</li> */}
            </ul>
          </div>

          {/* Third Column */}
          <div className="my-4 mx-2  md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="list-none">
              <li className="mb-1"><Link to="/blogs">Blogs</Link></li>
              <li className="mb-1"><Link to="/apis">APIs</Link></li>
              <li className="mb-1"><Link to="/sponsors">Sponsors</Link></li>
              <li className="mb-1"><Link to="/users">Users</Link></li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="my-4 mx-2 md:mb-0 w-1/2">
            <h3 className="text-lg font-semibold mb-2 fs-primary">Contact Us</h3>
            <ul className="list-none text-center block mx-auto w-[50%]">
              <li className="mb-2"><a href='tel:+91 23930203'><img src={call} alt="Call Now" style={{ width: "23px" }} /></a></li>
              <li className="mb-2"><a href="mailto:admin23@gmail.com"> <img src={mail} alt="Mail US" style={{ width: "22px" }} /></a></li>
              <li className="mb-2"> <a href="http://linkedin.com/in/officelelo" target="linkedin" rel="noopener noreferrer" ><img src={linkedin} alt="Call Now" style={{ width: "28px" }} /></a></li>
              <li className="mb-2"><a href="http://facebook.com/officelelo" target="facebook" rel="noopener noreferrer" ><img src={facebook} alt="Facebook" style={{ width: "28px" }} /></a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-md">
        Copyright &copy; <span className="text-red-400">officelelo@{new Date().getFullYear()}</span> | All rights reserved.
      </div>
    </div>
    </footer >
  );
}

export default Footer;
