import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import studentImage from "../Images/rolestudent.png";
import alumniImage from "../Images/ppl.png";

const Role = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    navigate(role); // Redirect to the corresponding role page
  };

  return (
    <div className="bg-yellow-200 min-h-screen flex justify-center items-center">
      <div className="px-16 py-12 bg-blue ">
        <h2 className="text-6xl font-bold mb-6 text-center font-Century Schoolbook">
          Select Your Role
        </h2>
        <div className="grid grid-cols-2 gap-16">

<div class="bg-white hover:bg-sky-200 overflow-hidden cursor-pointer rounded-full" onClick={() => handleRoleSelect("student")}>
  <div>
    <img src={studentImage} alt="Student" class="w-full h-72 object-cover rounded-full" />
    {/* <div class="p-4 bg-white hover:bg-sky-200 overflow-hidden cursor-pointer rounded-full"> */}
      <h3 class="text-2xl font-semibold font-serif text-center">Student</h3>
    {/* </div> */}
  </div>
</div>


<div class="bg-white hover:bg-sky-200 overflow-hidden cursor-pointer rounded-full" onClick={() => handleRoleSelect("alumni")}>
  <div>
    <img src={alumniImage} alt="Alumni" class="w-full h-72 object-cover rounded-full" />
    {/* <div class="p-4 bg-white hover:bg-sky-200 overflow-hidden cursor-pointer rounded-full"> */}
      <h3 class="text-2xl font-semibold font-serif text-center">Alumni</h3>
    {/* </div> */}
  </div>
</div>
</div>      
             
            </div>
          </div>

  );
};

export default Role;
