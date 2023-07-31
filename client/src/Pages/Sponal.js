import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const StudentCard = ({ name, email, dob, father_name, father_mobile, occupation, family_income, account_type, gender, course, onSelect }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
      <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{name}</h2>
      <p className="text-gray-600 text-sm flex justify-center">
        <span className="font-bold">Email:</span> {email}
      </p>
      <p className="text-gray-600 text-sm text-center">
        <span className="font-bold">Date of Birth:</span> {dob}
      </p>
      <button className="text-purple-600 font-bold mt-4 block text-center" onClick={() => onSelect({ name, email, dob, father_name, father_mobile, family_income, occupation, account_type, gender, course })}>
        View Details
      </button>
    </div>
  );
};

const StudentDetails = ({ student }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-14 ml-6 mr-6 mb-4 border-2 border-purple-500">
      <h2 className="text-xl font-bold mb-6 text-blue-700 text-center">{student.name}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Email:</span> {student.email}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Date of Birth:</span> {student.dob}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Family Income:</span> {student.family_income}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Father name:</span> {student.father_name}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Father Mobile:</span> {student.father_mobile}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">AadharNumber:</span> {student.occupation}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Account:</span> {student.account_type}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Gender:</span> {student.gender}
        </div>
        <div className="text-gray-600 text-sm">
          <span className="font-bold">Course:</span> {student.course}
        </div>
      </div>
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/spondata')
      .then((response) => response.json())
      .then((data) => {
        const combinedStudents = data.map((student) => ({
          ...student,
          ...student.sponreg2,
          ...student.sponreg3,
        }));
        setCombinedData(combinedStudents);
      })
      .catch((error) => console.error('Error fetching student data:', error));
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%', // Adjust the width as per your preference
      height: '80%', // Adjust the height as per your preference
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    openModal();
  };

  return (
    <div className="container mx-auto">
      <center>
        <h1 className="text-2xl font-bold mb-4">Registered Students</h1>
      </center>
      <RegisteredStudents students={combinedData} onStudentSelect={handleStudentSelect} />

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles} // Apply custom styles to the Modal component
        contentLabel="Student Details"
      >
        {selectedStudent && (
          <>
            <StudentDetails student={selectedStudent} />
            <div className="flex justify-center">
              <button className="mt-4 p-2 bg-blue-500 text-white rounded-md" onClick={closeModal}>
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Sponal;