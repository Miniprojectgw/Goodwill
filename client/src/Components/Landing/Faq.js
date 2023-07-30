import React, { useState } from 'react';
import Dropdown from './Dropdown.js';

const faqData = [
  {
    question: 'How to apply for Goodwill Scholarship?',
    answer: 'To apply for the Goodwill scholarship, you can visit our website and navigate to the scholarship application page. There, you will find the necessary steps and requirements to complete your application.',
  },
  {
    question: 'Can I apply for the Goodwill scholarship if I am already receiving financial aid from another source?',
    answer: 'Yes, you can still apply for the Goodwill scholarship even if you are receiving financial aid from another source. The scholarship aims to support students in their educational journey and can complement other forms of financial assistance.',
  },
  {
    question: 'How are scholarship recipients selected?',
    answer: 'Scholarship recipients are selected by Goodwills alumni network. Alumni have the opportunity to review eligible student profiles and choose the candidates they believe would benefit the most from the scholarship. The selection process is based on various factors, including academic achievements, extracurricular involvement, and personal statements.',
  },
  
  // Add more FAQ items as needed
];

function App() {
  return (
    <div className="bg-gradient-to-r from-yellow-400  to-yellow-600 min-h-screen">
      <main className="p-20  max-w-2xl mx-auto">
        <h1 className="text-4xl font-Italics font-bold text-white text-center mt-20 mb-12">Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <Dropdown
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
// export default Dropdown;
// export default AboutUs;

  