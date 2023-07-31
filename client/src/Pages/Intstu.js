

// import React, { useState, useEffect } from 'react';

// const CompanyCard = ({ students, onStudentSelect }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {students.map((student, index) => (
//         <StudentCard key={index} onSelect={() => onStudentSelect(student)} {...student} />
//       ))}
//     </div>
//   );
// };

// const StudentCard = ({ internship_id, name, email, contactNumber, benefits, onSelect }) => {
//   return (
//     <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
//       <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
//       <p className="text-gray-600 text-sm flex justify-center">
//         <span className="font-bold">Email:</span> {email}
//       </p>
//       <p className="text-gray-600 text-sm text-center">
//         <span className="font-bold">Date of Birth:</span> {internship_id}
//       </p>
//       <button
//         className="text-purple-600 font-bold mt-4 block text-center"
//         onClick={() => onSelect()}
//       >
//         View Details
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   const [combinedData, setCombinedData] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/intsp')
//       .then(response => response.json())
//       .then(data => {
//         const combinedStudents = data.map(student => ({
//           ...student,
//           ...student.intal2
//         }));
//         setCombinedData(combinedStudents);
//       })
//       .catch(error => console.error('Error fetching student data:', error));
//   }, []);

//   const handleStudentSelect = student => {
//     setSelectedStudent(student);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-3xl font-semibold mb-8">Company Cards</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <CompanyCard students={combinedData} onStudentSelect={handleStudentSelect} />
//         </div>
//       </div>
//       {selectedStudent && <CompanyDetails student={selectedStudent} />}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';

const CompanyCard = ({ company, onClick }) => {
  return (
    <div
      className="flex flex-col cursor-pointer bg-white border border-gray-200 rounded-lg shadow mb-4 p-4"
      onClick={() => onClick(company)}
    >
      <h3 className="text-xl font-bold mb-2">{company.name}</h3>
      <p className="text-gray-700">{company.email}</p>
    </div>
  );
};

const CompanyDetails = ({ selectedCompany }) => {
  if (!selectedCompany) {
    return <div className="flex-grow p-4">Select a company to see details.</div>;
  }

  return (
    <div className="flex-grow p-4">
      <h2 className="text-2xl font-semibold mb-4">{selectedCompany.name}</h2>
      <p className="mb-4">{selectedCompany.email}</p>
      <p className="mb-4">{selectedCompany.companyName}</p>
      <p className="mb-4">{selectedCompany.benefits}</p>
      <p className="mb-4">{selectedCompany.fields}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Apply for Internship
      </button>
    </div>
  );
};

const App = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/intsp')
      .then(response => response.json())
      .then(data => {
        const combinedStudents = data.map(student => ({
          ...student,
          ...student.intal2
        }));
        setCombinedData(combinedStudents);
      })
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Company Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {combinedData.map((company) => (
            <CompanyCard
              key={company.internship_id}
              company={company}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <CompanyDetails selectedCompany={selectedCompany} />
      </div>
    </div>
  );
};

export default App;
