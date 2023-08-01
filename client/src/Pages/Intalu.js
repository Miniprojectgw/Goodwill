// import React, { useState , useEffect} from 'react';
// import axios from 'axios';


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
//     };

//     onSubmit(internshipData);
//     setName('');
//     setEmail('');
//     setContactNumber('');
//     setCompanyName('');
//     setCompanyAddress('');
//     setPosition('');
//     setFields([]);
//     setSkillsRequired('');
//     setTimeAndSchedule('');
//     setBenefits('');
//   };

//   const handleFieldChange = (field) => {
//     const updatedFields = [...fields];
//     if (fields.includes(field)) {
//       const index = fields.indexOf(field);
//       updatedFields.splice(index, 1);
//     } else {
//       updatedFields.push(field);
//     }
//     setFields(updatedFields);
//   };

//   return (
//     <div className="p-4 bg-gray-200 overflow-auto h-full">
//       <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Post your internships here!!</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-bold mb-1">Name:</label>
//           <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block font-bold mb-1">Company Email:</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="contactNumber" className="block font-bold mb-1">Contact Number:</label>
//           <input type="tel" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="companyName" className="block font-bold mb-1">Company Name:</label>
//           <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="companyAddress" className="block font-bold mb-1">Company Address:</label>
//           <input type="text" id="companyAddress" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="position" className="block font-bold mb-1">Your Position in the Company:</label>
//           <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold mb-1">Fields:</label>
//           <div className="flex">
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('Web Development')} onChange={() => handleFieldChange('Web Development')} className="mr-2" />
//               Web Development
//             </label>
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('AI/ML')} onChange={() => handleFieldChange('AI/ML')} className="mr-2" />
//               AI/ML
//             </label>
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('Ethical Hacking')} onChange={() => handleFieldChange('Ethical Hacking')} className="mr-2" />
//               Ethical Hacking
//             </label>
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('Cloud Computing')} onChange={() => handleFieldChange('Cloud Computing')} className="mr-2" />
//               Cloud Computing
//             </label>
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('Cyber Security')} onChange={() => handleFieldChange('Cyber Security')} className="mr-2" />
//               Cyber Security
//             </label>
//             <label className="mr-4">
//               <input type="checkbox" checked={fields.includes('Robotics')} onChange={() => handleFieldChange('Robotics')} className="mr-2" />
//               Robotics
//             </label>
//             <label>
//               <input type="checkbox" checked={fields.includes('Arduino in C++')} onChange={() => handleFieldChange('Arduino in C++')} className="mr-2" />
//               Arduino in C++
//             </label>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="skillsRequired" className="block font-bold mb-1">Skills Required for Doing the Intern:</label>
//           <input type="text" id="skillsRequired" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="timeAndSchedule" className="block font-bold mb-1">Time and Schedule:</label>
//           <input type="text" id="timeAndSchedule" value={timeAndSchedule} onChange={(e) => setTimeAndSchedule(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="benefits" className="block font-bold mb-1">Benefits of Doing the Work:</label>
//           <textarea id="benefits" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="w-full border-gray-300 rounded-md p-2" />
//         </div>
//         <button onClick={handleSubmit}  className="bg-blue-500 text-white py-2 px-4 rounded self-center">Submit</button>
//       </form>
//     </div>
//   );
// };

// const InternshipCard = ({ internship }) => {
//   return (
//     <div className="p-4 bg-blue-100 rounded-md shadow-md hover:shadow-xl mb-4">
//       <h3 className="text-lg font-bold mb-2">{internship.companyName}</h3>
//       <p>Company Name: {internship.companyName}</p>
//       <p>Contact Number: {internship.contactNumber}</p>
//       <p>Field: {internship.fields.join(', ')}</p>
//       <p>Skills Required: {internship.skillsRequired}</p>
//     </div>
//   );
// };

// // const App = () => {
// //   const [internshipDetails, setInternshipDetails] = useState([]);

// //   const handleSubmit = (internshipData) => {
// //     setInternshipDetails([...internshipDetails, internshipData]);
// //   };


// const App = () => {
//   const [internshipDetails, setInternshipDetails] = useState([]);

//   const handleSubmit = (internshipData) => {
//     setInternshipDetails([...internshipDetails, internshipData]);
//   };

//   useEffect(() => {
//     if (internshipDetails.length === 0) {
//       // No need to make the request if there are no internship details to submit
//       return;
//     }

//     // Assuming the backend server is running on port 5000, adjust the URL as needed
//     const backendURL = 'http://localhost:5000/intal';

//     // Send the entire internshipDetails array to the backend
//     axios.post(backendURL, { internships: internshipDetails })
//       .then((response) => {
//         // Handle successful response if needed
//         console.log('Internship data submitted to the backend:', response.data);
//       })
//       .catch((error) => {
//         // Handle error if needed
//         console.error('Error submitting internship data to the backend:', error);
//       });
//   }, [internshipDetails]); // This will trigger the effect whenever internshipDetails changes

//   return (
//     <div className="flex">
//       <div className="w-1/2 overflow-auto">
//         {internshipDetails.map((internship, index) => (
//           <InternshipCard key={index} internship={internship} />
//         ))}
//       </div>
//       <div className="w-1/2">
//         <InternshipForm onSubmit={handleSubmit} />
//       </div>
//     </div>
//   );
// };

// export default App;






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
    setFields([]);
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
          <label className="block font-bold mb-1">Fields:</label>
          <div className="flex">
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('Web Development')} onChange={() => handleFieldChange('Web Development')} className="mr-2" />
              Web Development
            </label>
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('AI/ML')} onChange={() => handleFieldChange('AI/ML')} className="mr-2" />
              AI/ML
            </label>
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('Ethical Hacking')} onChange={() => handleFieldChange('Ethical Hacking')} className="mr-2" />
              Ethical Hacking
            </label>
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('Cloud Computing')} onChange={() => handleFieldChange('Cloud Computing')} className="mr-2" />
              Cloud Computing
            </label>
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('Cyber Security')} onChange={() => handleFieldChange('Cyber Security')} className="mr-2" />
              Cyber Security
            </label>
            <label className="mr-4">
              <input type="checkbox" checked={fields.includes('Robotics')} onChange={() => handleFieldChange('Robotics')} className="mr-2" />
              Robotics
            </label>
            <label>
              <input type="checkbox" checked={fields.includes('Arduino in C++')} onChange={() => handleFieldChange('Arduino in C++')} className="mr-2" />
              Arduino in C++
            </label>
          </div>
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