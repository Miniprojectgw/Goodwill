import React from 'react';
import Logo from '../../Images/GoodwilL.png'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-gray-800 text-white" id="Footer">
      <div className="px-12 mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img  src={Logo} className="w-100 mb-4" />
            <p className="text-gray-300">Supporting Future Leaders Together<br></br>

Join our sponsorship program and empower students' dreams<br></br>

Together, we build a brighter future<br></br>

Empowering education, one student at a time<br></br>

Alumni making a difference, transforming lives</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Office</h3>
            <p>Goodwill</p>
            <p>CUSAT, Kochi</p>
            <p>kerala, PIN 682022, India</p>
            <p className="email-id">goodwill2023@gmail.com</p>
            <h4>+91-0123456789</h4>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul>
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#new" className="text-gray-300 hover:text-white">Explore</a></li>
              <li><a href="#card" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex">
              <input type="email" placeholder="Enter your email id" required className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
            </form>
            <div className="mt-4">
              <i className="fab fa-facebook text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-twitter text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-whatsapp text-gray-300 hover:text-white mr-4"></i>
              <i className="fab fa-pinterest text-gray-300 hover:text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-8 border-white-600" />
      <p className="text-center text-gray-300">Goodwill © 2023-All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
