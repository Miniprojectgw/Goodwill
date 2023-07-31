
// import React, { useEffect, useState } from 'react';

// const StudentCard = ({
//   name,
//   email,
//   dob,
//   father_name,
//   father_mobile,
//   father_occupation,
//   mother_name,
//   mother_mobile,
//   mother_occupation,
//   gender,
//   occupation,
//   family_income,
//   house_owned,
//   num_rooms,
//   course,
//   profile_picture,
//   bank_name,
//   branch_name,
//   account_type,
//   ifsc_code,
//   bank_account_name,
//   account_number,
//   bank_address,
//   user_id,
//   onSelect
// }) => {
//   return (
//     <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
//       <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
//       <p className="text-gray-600 text-sm flex justify-center">
//         <span className="font-bold">Email:</span> {email}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Date of Birth:</span> {dob}
//       </p>
//       {/* Add button onClick event */}
//       <button
//         className="text-purple-600 font-bold mt-4 block text-center"
//         onClick={() =>
//           onSelect({
//             name,
//             email,
//             dob,
//             father_name,
//             father_mobile,
//             father_occupation,
//             mother_name,
//             mother_mobile,
//             mother_occupation,
//             gender,
//             occupation,
//             family_income,
//             house_owned,
//             num_rooms,
//             course,
//             profile_picture,
//             bank_name,
//             branch_name,
//             account_type,
//             ifsc_code,
//             bank_account_name,
//             account_number,
//             bank_address,
//             user_id
//           })
//         }
//       >
//         View Details
//       </button>
//     </div>
//   );
// };

// const StudentDetails = ({ student }) => {
//   return (
//     <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500">
//       <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{student.name}</h2>
//       <p className="text-gray-600 text-sm flex justify-center">
//         <span className="font-bold">Email:</span> {student.email}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Date of Birth:</span> {student.dob}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Family Income:</span> {student.family_income}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Father name:</span> {student.father_name}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Father Mobile:</span> {student.father_mobile}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Father Occupation:</span> {student.father_occupation}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Mother name:</span> {student.mother_name}
//       </p>
//       {/* Add more properties here */}
//     </div>
//   );
// };

// const RegisteredStudents = ({ students, onStudentSelect }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {students.map((student, index) => (
//         <StudentCard
//           key={index}
//           onSelect={onStudentSelect}
//           {...student}
//         />
//       ))}
//     </div>
//   );
// };

// const Sponal = () => {
//   const [combinedData, setCombinedData] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/spondata')
//       .then(response => response.json())
//       .then(data => {
//         const userIdFromSponreg1 = data.sponreg1.length > 0 ? data.sponreg1[0].user_id : null;

//         const filteredData = data.sponreg1
//           .filter(student => student.user_id === userIdFromSponreg1)
//           .concat(data.sponreg2.filter(student => student.user_id === userIdFromSponreg1))
//           .concat(data.sponreg3.filter(student => student.user_id === userIdFromSponreg1));

//         setCombinedData(filteredData);
//       })
//       .catch(error => console.error('Error fetching student data:', error));
//   }, []);

//   const handleStudentSelect = (student) => {
//     setSelectedStudent(student);
//   };

//   return (
//     <div className="container mx-auto">
//       <center>
//         <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
//       </center>
//       <RegisteredStudents students={combinedData} onStudentSelect={handleStudentSelect} />
//       {selectedStudent && <StudentDetails student={selectedStudent} />}
//     </div>
//   );
// };

// export default Sponal;


import React, { useEffect, useState } from 'react';

const StudentCard = ({ name, email, dob, father_name,father_mobile,occupation, family_income,account_type, onSelect }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
      <p className="text-gray-600 text-sm flex justify-center">
        <span className="font-bold">Email:</span> {email}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Date of Birth:</span> {dob}
      </p>
      <button
        className="text-purple-600 font-bold mt-4 block text-center"
        onClick={() => onSelect({ name, email, dob, father_name,father_mobile,family_income, occupation: occupation,account_type })}
      >
        View Details
      </button>
    </div>
  );
};

const StudentDetails = ({ student }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500">
      <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{student.name}</h2>
      <p className="text-gray-600 text-sm flex justify-center">
        <span className="font-bold">Email:</span> {student.email}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Date of Birth:</span> {student.dob}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Family Income:</span> {student.family_income}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Father name:</span> {student.father_name}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Father Mobile:</span> {student.father_mobile}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Father Occupation:</span> {}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Occupation:</span> {student.occupation}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Account:</span> {student.account_type}
      </p>
      

      {/* Add more properties here */}
    </div>
  );
};

const RegisteredStudents = ({ students, onStudentSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student, index) => (
        <StudentCard key={index} onSelect={onStudentSelect} {...student} />
      ))}
    </div>
  );
};

const Sponal = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:5000/spondata')
      .then(response => response.json())
      .then(data => {
        const combinedStudents = data.map(student => ({
          ...student,
          ...student.sponreg2,
          ...student.sponreg3
        }));
        setCombinedData(combinedStudents);
      })
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const handleStudentSelect = student => {
    setSelectedStudent(student);
  };

  return (
    <div className="container mx-auto">
      <center>
        <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      </center>
      <RegisteredStudents students={combinedData} onStudentSelect={handleStudentSelect} />
      {selectedStudent && <StudentDetails student={selectedStudent} />}
    </div>
  );
};

export default Sponal;