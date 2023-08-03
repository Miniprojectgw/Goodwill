






import React, { useState , useEffect } from 'react';
import axios from 'axios';
import InternshipListing from '../Components/Intlisting';

const InternshipForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [position, setPosition] = useState('');
  const [fields, setFields] = useState([]);
  const [skillsRequired, setSkillsRequired] = useState('');
  const [timeAndSchedule, setTimeAndSchedule] = useState('');
  const [benefits, setBenefits] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const internshipData = {
      name,
      email,
      contactNumber,
      companyName,
      companyAddress,
      position,
      fields,
      skillsRequired,
      timeAndSchedule,
      benefits,
      user_id: sessionStorage.getItem('userId'),
    };

    // Make a POST request to the backend with the internshipData
    axios.post('http://localhost:5000/intal', internshipData)
      .then((response) => {
        // Handle success response
        console.log('Internship data submitted to the backend:', response.data);
      })
      .catch((error) => {
        // Handle error response
        console.error('Error submitting internship data to the backend:', error);
      });

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setContactNumber('');
    setCompanyName('');
    setCompanyAddress('');
    setPosition('');
    setFields('');
    setSkillsRequired('');
    setTimeAndSchedule('');
    setBenefits('');
  };

  const handleFieldChange = (field) => {
    const updatedFields = [...fields];
    if (fields.includes(field)) {
      const index = fields.indexOf(field);
      updatedFields.splice(index, 1);
    } else {
      updatedFields.push(field);
    }
    setFields(updatedFields);
  };
 
  return (
    <div className='flex '>
    <div className="p-4 w-1/2 bg-gray-200 overflow-auto h-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Post your internships here!!</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-1">Company Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block font-bold mb-1">Contact Number:</label>
          <input type="tel" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block font-bold mb-1">Company Name:</label>
          <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="companyAddress" className="block font-bold mb-1">Company Address:</label>
          <input type="text" id="companyAddress" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block font-bold mb-1">Your Position in the Company:</label>
          <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">Enter required Tech field:</label>
          <input type="text" id="fields" value={fields} onChange={(e) => setFields(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
          
        </div>
        <div className="mb-4">
          <label htmlFor="skillsRequired" className="block font-bold mb-1">Skills Required for Doing the Intern:</label>
          <input type="text" id="skillsRequired" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="timeAndSchedule" className="block font-bold mb-1">Time and Schedule:</label>
          <input type="text" id="timeAndSchedule" value={timeAndSchedule} onChange={(e) => setTimeAndSchedule(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="benefits" className="block font-bold mb-1">Benefits of Doing the Work:</label>
          <textarea id="benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
        </div>
        <button onClick={handleSubmit}  className="bg-blue-500 text-white py-2 px-4 rounded self-center">Submit</button>
      </form>
    </div>

    <div className='p-4 w-1/2 bg-white overflow-auto h-full'>
      <InternshipListing/>
    </div>
    </div>
  );
};
export default InternshipForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InternshipListing from '../Components/Intlisting';

// const InternshipForm = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [companyAddress, setCompanyAddress] = useState('');
//   const [position, setPosition] = useState('');
//   const [fields, setFields] = useState([]);
//   const [skillsRequired, setSkillsRequired] = useState('');
//   const [timeAndSchedule, setTimeAndSchedule] = useState('');
//   const [benefits, setBenefits] = useState('');
//   const [internp, setInternp] = useState(0); // Initialize internp with 0

//   useEffect(() => {
//     const userId = sessionStorage.getItem('userId');
//     axios.get(`http://localhost:5000/intal/count?user_id=${userId}`)
//       .then(response => {
//         // If the user has already posted internships, update internp with the count
//         setInternp(response.data.count);
//       })
//       .catch(error => {
//         console.error('Error fetching internship count:', error);
//       });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const internshipData = {
//       name,
//       email,
//       contactNumber,
//       companyName,
//       companyAddress,
//       position,
//       fields,
//       skillsRequired,
//       timeAndSchedule,
//       benefits,
//       user_id: sessionStorage.getItem('userId'),
//       internp: internp + 1, // Increment the internp count before submitting
//     };

//     // Make a POST request to the backend with the internshipData
//     axios.post('http://localhost:5000/intal', internshipData)
//       .then((response) => {
//         // Handle success response
//         console.log('Internship data submitted to the backend:', response.data);

//         // Update the internp count after successful submission
//         setInternp(prevInternp => prevInternp + 1);
//       })
//       .catch((error) => {
//         // Handle error response
//         console.error('Error submitting internship data to the backend:', error);
//       });

//     // Clear the form fields after submission
//     setName('');
//     setEmail('');
//     setContactNumber('');
//     setCompanyName('');
//     setCompanyAddress('');
//     setPosition('');
//     setFields('');
//     setSkillsRequired('');
//     setTimeAndSchedule('');
//     setBenefits('');
//   };

//   const handleFieldChange = (field) => {
//     const trimmedField = field.trim(); // Remove leading and trailing spaces
  
//     if (trimmedField === '') {
//       // If the trimmed field is empty, do nothing
//       return;
//     }
  
//     const lastField = fields[fields.length - 1];
  
//     if (lastField && lastField.endsWith(',')) {
//       // If the last field already ends with a comma, append the new field without a comma
//       setFields((prevFields) => [...prevFields.slice(0, -1), trimmedField]);
//     } else {
//       // If the last field does not end with a comma, append the new field with a comma
//       setFields((prevFields) => [...prevFields, `${trimmedField},`]);
//     }
//   };
  

//   return (
//     <div className='flex '>
//       <div className="p-4 w-1/2 bg-gray-200 overflow-auto h-full">
//         <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Post your internships here!!</h2>
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-4">
//             <label htmlFor="name" className="block font-bold mb-1">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-bold mb-1">Company Email:</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="contactNumber" className="block font-bold mb-1">Contact Number:</label>
//             <input type="tel" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="companyName" className="block font-bold mb-1">Company Name:</label>
//             <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="companyAddress" className="block font-bold mb-1">Company Address:</label>
//             <input type="text" id="companyAddress" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} className="w-full border-gray-300
//                         rounded-md p-2" />
//                         </div>
//                         <div className="mb-4">
//                           <label htmlFor="position" className="block font-bold mb-1">Your Position in the Company:</label>
//                           <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//                         </div>
//                         <div className="mb-4">
//                           <label className="block font-bold mb-1">Enter required Tech field:</label>
//                           <input
//                             type="text"
//                             id="fields"
//                             value={fields}
//                             onChange={(e) => handleFieldChange(e.target.value)}
//                             className="w-full border-gray-300 rounded-md p-2"
//                           />
//                         </div>
//                         <div className="mb-4">
//                           <label htmlFor="skillsRequired" className="block font-bold mb-1">Skills Required for Doing the Intern:</label>
//                           <input type="text" id="skillsRequired" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//                         </div>
//                         <div className="mb-4">
//                           <label htmlFor="timeAndSchedule" className="block font-bold mb-1">Time and Schedule:</label>
//                           <input type="text" id="timeAndSchedule" value={timeAndSchedule} onChange={(e) => setTimeAndSchedule(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//                         </div>
//                         <div className="mb-4">
//                           <label htmlFor="benefits" className="block font-bold mb-1">Benefits of Doing the Work:</label>
//                           <textarea id="benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//                         </div>
//                         <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded self-center">Submit</button>
//                       </form>
//                     </div>
              
//                     <div className='p-4 w-1/2 bg-white overflow-auto h-full'>
//                       <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Number of Internships Posted: {internp}</h2>
//                       <InternshipListing />
//                     </div>
//                   </div>
//                 );
//               };
              
//               export default InternshipForm;
              