


// import React, { useState } from 'react';
// import axios from 'axios';


// const Userhome = () => {
  
// ////wow


//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       dob: '',
//       father_name: '',
//       father_mobile: '',
//       father_occupation: '',
//       mother_name: '',
//       mother_mobile: '',
//       mother_occupation: '',
//       gender: '',
//       occupation: '',
//       family_income: '',
//       house_owned: '',
//       num_rooms: '',
//       course: '',
//       profile_picture: null,
//       bank_name: '',
//       branch_name: '',
//       account_type: '',
//       ifsc_code: '',
//       bank_account_name: '',
//       account_number: '',
//       bank_address: '',
          
//         });
  
  
                
  
//           const handleChange = (e) => {
//               const { name, value } = e.target;
             
  
//               setFormData((prevState) => ({
//                   ...prevState,
//                   [name]: value
//               }));
//               }
         
  
//           const handleSubmit = (e) => {
//               e.preventDefault();
  
          
  
//         // Make a POST request to the backend
//       axios
//       .post("http://localhost:5000/sponreg", formData)
//       .then((response) => {
//         // Handle success response
//         console.log("formData creds created:", response.data);
        
       
         
     
//       })
//       .catch((error) => {
//         // Handle error response
//         console.error("Error creating question:", error);
//       });
//   };
  
//           const {       name,
//           email,
//           dob,
//           father_name,
//           father_mobile,
//           father_occupation,
//           mother_name,
//           mother_mobile,
//           mother_occupation,
//           gender,
//           occupation,
//           family_income,
//           house_owned,
//           num_rooms,
//           course,
          
//           bank_name,
//           branch_name,
//           account_type,
//           ifsc_code,
//           bank_account_name,
//           account_number,
//           bank_address} = formData;



//   ////new

//   return (
//     <div className="max-w-7xl mx-auto p-8 bg-white mt-9 rounded-lg shadow-lg">
//     <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Scholarship Registration Form</h1>

//     <form onSubmit={handleSubmit}>
//       <div className="grid grid-cols-2 gap-8">
//         <div>
//           {/* Personal Details Section */}
//           <div className="mb-4">
//             <label className="text-lg font-medium text-gray-700" htmlFor="name">
//               Name:
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
              
//             />
//           </div>

//           <div className="mb-4">
//             <label className="text-lg font-medium text-gray-700" htmlFor="email">
//               Email:
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
              
//             />
//           </div>

//           {/* ... (remaining personal details fields) ... */}

        

//           <div class="input-container mb-4">
//             <div>
//               <label class="text-lg font-medium text-gray-700" for="father_name">Father's Name:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="father_name" name="father_name" value={formData.father_name}
//                 onChange={handleChange} />
//             </div>
//             <div>
//               <label class="text-lg font-medium text-gray-700" for="father_mobile">Father's Mobile:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="tel" id="father_mobile" name="father_mobile" value={formData.father_mobile}
//                 onChange={handleChange} />
//             </div>

//             <div>
//               <label class="text-lg font-medium text-gray-700" for="father_occupation">Father's Occupation:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="father_occupation" name="father_occupation" value={formData.father_occupation}
//                 onChange={handleChange} />
//             </div>

//             <div class="mb-4">
//              <label class="text-lg font-medium text-gray-700" for="mother_name">Mother's Name:</label>
//            <input
//               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="text" id="mother_name" name="mother_name" value={formData.mother_name}
//               onChange={handleChange}/>
//           </div>

//           <div class=" mb-4">
//             <div>
//               <label class="text-lg font-medium text-gray-700" for="mother_mobile">Mother's Mobile:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="tel" id="mother_mobile" name="mother_mobile" value={formData.mother_mobile}
//                 onChange={handleChange}/>
//             </div>
//           </div>
          
//             <div>
//               <label class="text-lg font-medium text-gray-700" for="mother_occupation">Mother's Occupation:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="mother_occupation" name="mother_occupation" value={formData.mother_occupation}
//                 onChange={handleChange} />
//             </div>
//           {/* fdjftyjr */}

//         </div>
//         </div> 
//         <div>
//         <div>
//           {/* Family Details Section */}
//           <div className="mb-4">
//             <label className="text-lg font-medium text-gray-700" htmlFor="gender">
//               Gender:
//             </label>
//             <select
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               id="gender"
//               name="gender"
//               value={formData.gender || ''}
//               onChange={handleChange}
//             >
//               <option value="" disabled hidden>Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>


//           <div className="mb-4">
//           <label className="text-lg font-medium text-gray-700" htmlFor="dob">
//              Date of Birth:
//            </label>
//           <input
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//             type="date"
//             id="dob"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
            
//           />
//         </div>
//           <div class="mb-4">
//             <label class="text-lg font-medium text-gray-700" for="occupation">Your Aadhar number:</label>
//             <input
//               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="text" id="occupation" name="occupation"  value={formData.occupation}
//               onChange={handleChange} />
//           </div>

//           <div class="mb-4">
//             <label class="text-lg font-medium text-gray-700" for="family_income">Annual Family Income :</label>
//             <input
//               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="text" id="family_income" name="family_income"  value={formData.family_income}
//               onChange={handleChange} />
//           </div>

//           <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="house_owned">House Owned:</label>
//               <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 id="house_owned" name="house_owned" onChange={handleChange}   value={formData.house_owned || ''}>
//                 <option value="yes" >Yes</option>
//                 <option value="no" >No</option>
//               </select>
//             </div>


//           <div class="mb-4">
//             <label class="text-lg font-medium text-gray-700" for="num_rooms">Number of Rooms:</label>
//             <input
//               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               type="number" id="num_rooms" name="num_rooms" value={formData.num_rooms}
//               onChange={handleChange} />
//           </div>

//           <div class="mb-4">
//             <label class="text-lg font-medium text-gray-700" for="course">Course</label>
//             <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//               id="course" name="course" value={formData.course}
//               onChange={handleChange} >
//               <option value="yes">Btech</option>
//               <option value="no">Bsc</option>
//               <option value="no">Bcom</option>
//             </select>
//           </div>

//         </div>
//       {/* </div> */}

//           {/* ... (remaining family details fields) ... */}

//         </div>
//       </div>

//       <div className="mt-8">
//         {/* Bank Details Section */}
//         <h2 className="text-center text-4xl text-bold text-blue-800 mb-6">Bank Details</h2>
//         {/* ... (remaining bank details fields) ... */}

//         <div class="grid grid-cols-2 gap-8">
//            <div>
//              <div class="mb-4">
//                <label class="text-lg font-medium text-gray-700" for="bank_name">Bank Name:</label>
//                <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="bank_name" name="bank_name" value={formData.bank_name}
//                 onChange={handleChange} />
//             </div>

//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="branch_name">Branch Name:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="branch_name" name="branch_name" value={formData.branch_name}
//                 onChange={handleChange} />
//             </div>
//           </div>

//           <div>
//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="account_type">Account Type:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="account_type" name="account_type" value={formData.account_type}
//                 onChange={handleChange} />
//             </div>

//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="ifsc_code">IFSC Code:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="ifsc_code" name="ifsc_code" value={formData.ifsc_code}
//                 onChange={handleChange} />
//             </div>
//           </div>
//         </div>

//         <div class="grid grid-cols-2 gap-8 mt-4">
//           <div>
//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="bank_account_name">Name as per Bank Record:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="bank_account_name" name="bank_account_name" value={formData.bank_account_name}
//                 onChange={handleChange} />
//             </div>

//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="account_number">Account Number:</label>
//               <input
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 type="text" id="account_number" name="account_number" value={formData.account_number}
//                 onChange={handleChange} />
//             </div>
//           </div>

//           <div>
//             <div class="mb-4">
//               <label class="text-lg font-medium text-gray-700" for="bank_address">Bank Address:</label>
//               <textarea
//                 class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
//                 id="bank_address" name="bank_address" rows="3" value={formData.bank_address}
//                 onChange={handleChange} ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>
      

//       <div className="mt-8">
//         {/* Submit Button */}
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   </div>
//   );
// }

// export default Userhome;


import React, { useState } from 'react';
import axios from 'axios';

const Userhome = () => {
  const initialFormData = {
    name: '',
    email: '',
    dob: '',
    father_name: '',
    father_mobile: '',
    father_occupation: '',
    mother_name: '',
    mother_mobile: '',
    mother_occupation: '',
    gender: '',
    occupation: '',
    family_income: '',
    house_owned: '',
    num_rooms: '',
    course: '',
    profile_picture: null,
    bank_name: '',
    branch_name: '',
    account_type: '',
    ifsc_code: '',
    bank_account_name: '',
    account_number: '',
    bank_address: '',
    user_id: sessionStorage.getItem('userId'),
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the backend
    axios
      .post('http://localhost:5000/sponreg', formData)
      .then((response) => {
        // Handle success response
        console.log('Form submitted successfully:', response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        // Handle error response
        console.error('Error submitting form:', error);
      });
  };

  const handleEditForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white mt-9 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Scholarship Registration Form</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* ... (rest of the form fields) ... */}
          {/* ... (omitted for brevity) ... */}
          <div className="grid grid-cols-2 gap-8">
        <div>
          {/* Personal Details Section */}
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>

          {/* ... (remaining personal details fields) ... */}

        

          <div class="input-container mb-4">
            <div>
              <label class="text-lg font-medium text-gray-700" for="father_name">Father's Name:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="father_name" name="father_name" value={formData.father_name}
                onChange={handleChange} />
            </div>
            <div>
              <label class="text-lg font-medium text-gray-700" for="father_mobile">Father's Mobile:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="tel" id="father_mobile" name="father_mobile" value={formData.father_mobile}
                onChange={handleChange} />
            </div>

            <div>
              <label class="text-lg font-medium text-gray-700" for="father_occupation">Father's Occupation:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="father_occupation" name="father_occupation" value={formData.father_occupation}
                onChange={handleChange} />
            </div>

            <div class="mb-4">
             <label class="text-lg font-medium text-gray-700" for="mother_name">Mother's Name:</label>
           <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="mother_name" name="mother_name" value={formData.mother_name}
              onChange={handleChange}/>
          </div>

          <div class=" mb-4">
            <div>
              <label class="text-lg font-medium text-gray-700" for="mother_mobile">Mother's Mobile:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="tel" id="mother_mobile" name="mother_mobile" value={formData.mother_mobile}
                onChange={handleChange}/>
            </div>
          </div>
          
            <div>
              <label class="text-lg font-medium text-gray-700" for="mother_occupation">Mother's Occupation:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="mother_occupation" name="mother_occupation" value={formData.mother_occupation}
                onChange={handleChange} />
            </div>
          {/* fdjftyjr */}

        </div>
        </div> 
        <div>
        <div>
          {/* Family Details Section */}
          <div className="mb-4">
            <label className="text-lg font-medium text-gray-700" htmlFor="gender">
              Gender:
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              id="gender"
              name="gender"
              value={formData.gender || ''}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>


          <div className="mb-4">
          <label className="text-lg font-medium text-gray-700" htmlFor="dob">
             Date of Birth:
           </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            
          />
        </div>
          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="occupation">Your Aadhar number:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="occupation" name="occupation"  value={formData.occupation}
              onChange={handleChange} />
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="family_income">Annual Family Income :</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="text" id="family_income" name="family_income"  value={formData.family_income}
              onChange={handleChange} />
          </div>

          <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="house_owned">House Owned:</label>
              <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                id="house_owned" name="house_owned" onChange={handleChange}   value={formData.house_owned || ''}>
                <option value="yes" >Yes</option>
                <option value="no" >No</option>
              </select>
            </div>


          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="num_rooms">Number of Rooms:</label>
            <input
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              type="number" id="num_rooms" name="num_rooms" value={formData.num_rooms}
              onChange={handleChange} />
          </div>

          <div class="mb-4">
            <label class="text-lg font-medium text-gray-700" for="course">Course</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              id="course" name="course" value={formData.course}
              onChange={handleChange} >
              <option value="yes">Btech</option>
              <option value="no">Bsc</option>
              <option value="no">Bcom</option>
            </select>
          </div>

        </div>
      {/* </div> */}

          {/* ... (remaining family details fields) ... */}

        </div>
      </div>

      <div className="mt-8">
        {/* Bank Details Section */}
        <h2 className="text-center text-4xl text-bold text-blue-800 mb-6">Bank Details</h2>
        {/* ... (remaining bank details fields) ... */}

        <div class="grid grid-cols-2 gap-8">
           <div>
             <div class="mb-4">
               <label class="text-lg font-medium text-gray-700" for="bank_name">Bank Name:</label>
               <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="bank_name" name="bank_name" value={formData.bank_name}
                onChange={handleChange} />
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="branch_name">Branch Name:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="branch_name" name="branch_name" value={formData.branch_name}
                onChange={handleChange} />
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="account_type">Account Type:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="account_type" name="account_type" value={formData.account_type}
                onChange={handleChange} />
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="ifsc_code">IFSC Code:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="ifsc_code" name="ifsc_code" value={formData.ifsc_code}
                onChange={handleChange} />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8 mt-4">
          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="bank_account_name">Name as per Bank Record:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="bank_account_name" name="bank_account_name" value={formData.bank_account_name}
                onChange={handleChange} />
            </div>

            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="account_number">Account Number:</label>
              <input
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                type="text" id="account_number" name="account_number" value={formData.account_number}
                onChange={handleChange} />
            </div>
          </div>

          <div>
            <div class="mb-4">
              <label class="text-lg font-medium text-gray-700" for="bank_address">Bank Address:</label>
              <textarea
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                id="bank_address" name="bank_address" rows="3" value={formData.bank_address}
                onChange={handleChange} ></textarea>
            </div>
          </div>
        </div>
      </div>

          <div className="mt-8">
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        // Show success message and option to edit the form
        <div className="mt-8 text-center">
          <p className="text-2xl font-semibold text-green-700 mb-4">Form submitted successfully!</p>
          <button
            onClick={handleEditForm}
            className="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
          >
            Edit Form
          </button>
        </div>
      )}
    </div>
  );
};

export default Userhome;

