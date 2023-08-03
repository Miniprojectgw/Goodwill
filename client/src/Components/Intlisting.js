// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const InternshipListing = () => {
//   const [internships, setInternships] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/intsp')
//       .then(response => {
//         // Filter internships based on the user_id in sessionStorage
//         const userId = sessionStorage.getItem('userId');
//         const filteredInternships = response.data.filter(internship => internship.user_id === parseInt(userId));
//         setInternships(filteredInternships);
//       })
//       .catch(error => {
//         console.error('Error fetching internship data:', error);
//       });
//   }, []);

//   return (
//     <div className="">
//       {internships.map(internship => (
//         <div key={internship.internship_id} className="p-4 bg-blue-100 rounded-md shadow-md hover:shadow-xl mb-4">
//           <h3 className="text-lg font-bold mb-2">{internship.Name}</h3>
//           <p>Company Name: {internship.companyName}</p>
//           <p>Contact Number: {internship.contactNumber}</p>
//           <p>Skills Required: {internship.companyAddress}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InternshipListing;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternshipListing = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/intsp')
      .then(response => {
        // Filter internships based on the user_id in sessionStorage
        const userId = sessionStorage.getItem('userId');
        const filteredInternships = response.data.filter(internship => internship.user_id === parseInt(userId));
        setInternships(filteredInternships);
      })
      .catch(error => {
        console.error('Error fetching internship data:', error);
      });
  }, []);

  // Function to handle internship deletion
  const handleDeleteInternship = (internshipId) => {
    const userId = sessionStorage.getItem('userId');
    axios.delete(`http://localhost:5000/delete/delete`, { data: { user_id: userId, internship_id: internshipId } })
      .then(response => {
        // If deletion is successful, update the internships state
        setInternships(prevInternships => prevInternships.filter(internship => internship.internship_id !== internshipId));
      })
      .catch(error => {
        console.error('Error deleting internship:', error);
      });
  };

  return (
    <div className="">
      {internships.map(internship => (
        <div key={internship.internship_id} className="p-4 bg-blue-100 rounded-md shadow-md hover:shadow-xl mb-4">
          <h3 className="text-lg font-bold mb-2">{internship.Name}</h3>
          <p>Company Name: {internship.companyName}</p>
          <p>Contact Number: {internship.contactNumber}</p>
          <p>Company Address: {internship.companyAddress}</p>
          <button
            onClick={() => handleDeleteInternship(internship.internship_id)}
            className="bg-red-500 text-white rounded px-2 py-1 mt-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default InternshipListing;
