import React, { useState } from 'react';

const companies = [
  {
    id: 1,
    title: 'Company A',
    description: 'Short description of Company A',
    details:
      'Company A is a leading tech company specializing in web development and AI solutions. We offer various internship opportunities for students to gain practical experience and enhance their skills in the field of software development.',
  },
  {
    id: 2,
    title: 'Company B',
    description: 'Short description of Company B',
    details:
      'Company B is a creative agency that provides design and marketing services to businesses. Our internship program aims to mentor aspiring designers and marketers to work on real-world projects and build a strong portfolio.',
  },
  // Add more companies as needed
];

const CompanyCard = ({ company, onClick }) => {
  return (
    <div
      className="flex flex-col cursor-pointer bg-white border border-gray-200 rounded-lg shadow mb-4 p-4"
      onClick={() => onClick(company)}
    >
      <h3 className="text-xl font-bold mb-2">{company.title}</h3>
      <p className="text-gray-700">{company.description}</p>
    </div>
  );
};

const CompanyDetails = ({ selectedCompany }) => {
  if (!selectedCompany) {
    return <div className="flex-grow p-4">Select a company to see details.</div>;
  }

  return (
    <div className="flex-grow p-4">
      <h2 className="text-2xl font-semibold mb-4">{selectedCompany.title}</h2>
      <p className="mb-4">{selectedCompany.details}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Apply for Internship
      </button>
    </div>
  );
};

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Company Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
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
