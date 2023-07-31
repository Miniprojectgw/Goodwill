
import Student from '../../Images/man.png';
import Kutti from '../../Images/People.png';
import People from '../../Images/ppl.png';
import React, { useRef, useEffect } from 'react';
import '../../Components/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


const AnimatedText = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      New to<span className='text-yellow-400'> G<span className='text-black'>oodWilL?</span></span> 
      </h1>
      <p className="text-white mt-4 text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      A platform that bridges the gap between aspiring students and caring alumni!Our platform offers a unique opportunity for students to pursue their dreams by connecting with generous alumni sponsors.Together, we build a tightly-knit community of learning and compassion, where students are empowered to realize their potential, and alumni proudly act as pillars of support. 
      </p>
    </>

 
  );
};

const AnimatedText2 = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black font-serif  text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      Sponsorships
      </h1>
      <p className="text-white  mt-4 font- text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      Our website offers a unique platform for students to secure sponsorships from alumni, providing them with financial support for their educational pursuits. We recognize the financial challenges that many students face during their academic journey, and we aim to bridge the gap by leveraging the power of alumni networks.
      </p>
    </>

 
  );
};
const AnimatedText3 = () => {
  useEffect(() => {
    setTimeout(() => {
      const replacers = document.querySelectorAll('[data-replace]');
      for (let i = 0; i < replacers.length; i++) {
        const replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(key => {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
        });
      }
    }, 1);
  }, []);

  return (
    <>
      <h1 className="font-black font-serif text-6xl text-black block duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      Internships
      </h1>
      <p className="text-white mt-6 text-lg block duration-700 delay-150 relative  transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
      Our platform offers a cutting-edge internship searching feature designed to help students find valuable and career-boosting internship opportunities. With our user-friendly interface, students can easily explore a diverse range of internship listings from reputed companies and organizations. Our search feature allows students to discover internships that align perfectly with their career aspirations, ensuring they gain relevant skills and exposure in their chosen fields.
      </p>
    </>

 
  );
};


function Hero() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="aos-container" id="new">
      <section
        className="relative bg-cover bg-blue-400 bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



        </div>
        <div>

        <img src={Kutti} data-aos="fade-left" alt="Description of the image" className='w-30 py-20 mt-20  ml-6 ' />

        </div>
        </div>
       

      </section>
      <section
        className="relative bg-cover bg-blue-400 bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
           
        <div>

        <img src={Student} data-aos="fade-right"  alt="Description of the image" className='w-30 py-20 mt-20  ml-6 ' />

        </div>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl  px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText2 />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



       
        </div>
       
      </div>
      </section>
      <section
        className="relative bg-cover bg-blue-400 bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${Student})` }}
      >
        <div className='grid grid-cols-2 '>
        <div data-aos="fade-up"  className="relative mx-auto max-w-screen-xl mt-12 px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">




        <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 px-10 max-w-2xl rounded-3xl mx-auto py-20 flex flex-col items-start justify-center">
      <div className="duration-1000 relative transform opacity-0 transition-all translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
        <AnimatedText3 />
      </div>
      
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start duration-700 delay-300 relative transform transition-all opacity-0 translate-y-12 ease-out" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
       
      </div>
    </div>
  



        </div>
        <div className=''>

        <img src={People} data-aos="fade-left" alt="Description of the image" className='w-30 py-20  mt-20  ml-24 ' />

        </div>
        </div>
       

      </section>
    </div>
  );
}

export default Hero;



