// import React from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink, Outlet } from 'react-router-dom'

// const Nav3 = () => {

  


//   const handleClick =()=>{
//     window.location.reload()
//   }
//   return (
//     <div> 
//     <div className='ml-4 mr-4'>
//     <nav className="bg-white py-4 px-6 flex items-center justify-between w-full">
//       <ul className="flex justify-between items-center text-black w-full">
//         <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}><Link to="/Alumhome/feed">Feed</Link></li>
//         <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}><Link to="/Alumhome/sponsorships">Sponsorships</Link></li>
//         <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}><Link to="/Alumhome/internships">Internships</Link></li>
//         <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}><Link to="/chat">Chat</Link></li>
//         <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//     </div>
//     <Outlet/>
//     </div>

//   );
// };

// export default Nav3;


import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Nav2 = () => {
  const handleClick = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    window.location.reload();
    sessionStorage.removeItem('userId');
    // Redirect to the login page or any other action after logout
    // Example: window.location.href = '/login';
  };

  return (
    <div>
      <div className='ml-4 mr-4'>
        <nav className="bg-white py-4 px-6 flex items-center justify-between w-full">
          <ul className="flex justify-between items-center text-black w-full">
            <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}>
              <Link to="/Studhome/feed">Feed</Link>
            </li>
            <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}>
              <Link to="/Studhome/sponsorships">Sponsorships</Link>
            </li>
            <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}>
              <Link to="/Studhome/internships">Internships</Link>
            </li>
            <li className="hover:text-blue-200 cursor-pointer" onClick={handleClick}>
              <Link to="/chat">Chat</Link>
            </li>
            <li className="hover:text-blue-200 cursor-pointer" onClick={handleLogout}>
              <Link to="../../../">
                <button className="list-none bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center text-white mr-3 md:mr-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-600">Logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav2;