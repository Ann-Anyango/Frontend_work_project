// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Signup = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/green.webp)' }}>
//     <div className="flex flex-col sm:flex-row h-screen font-poppins text-xl p-12">
//       <div className="bg-green-800 sm:w-1/3 flex justify-center " >
//         <div className="-ml-28  w-20 h-18 mt-28">
//         <img src="/images/Logo.png" alt="Logo" />
//         </div>
//         <div>
//         <p className="-ml-20 mt-64 text-5xl font-['Poppins'] font-semibold text-[#F59B22] mb-1">Welcome
//        </p>
//         <p className="-ml-20">Growing Tomorrow, One<br></br>
//           Click at a time</p>
//         </div>
//        </div>
//        <div className="w-full bg-white flex flex-col justify-center items-center p-6 sm:w-2/3 sm:p-12 mt-[-1.%]">
//         <p className=" text-center text-3xl font-['Poppins'] font-semibold text-[#0f0f0f]  w-1/ mt-[-69%]">Sign Up</p>
//         <p className="text-center text-3xl font-['Poppins'] font-semibold text-[#0f0f0f]  w-1/ mb-5">Welcome back!</p>
//         <form className="flex flex-col items-center  sm:w-80 h-4">
//           <div className="mb-4 sm:mb-5 w-/3">
//             <label className="text-sm text-black font-black  text-custom-color" htmlFor="email">
//             USER NAME
//             </label>
//             <input
//               id="UserName"
//               type="UserName"
//               placeholder="Enter UserName"
//               className="text-sm text-black  w-full border-solid border-custom-brown bg-white/70 h-10 border rounded px-4 py-2 mb-4"
//             />
//           </div>
          
         
//           <div className="mb-4 sm:mb-5 w-/3">
//             <label className="text-sm text-black font-bold text-black-color" htmlFor="email">
//             PHONE NUMBER
//             </label>
//             <input
            
//               id="Phone Number"
//               type="Last Phone Number"
//               placeholder="Enter Phone Number"
//               className="text-sm  text-black   w-full border-solid border-custom-brown bg-white/80 h-10 border rounded px-3 py-1 mb-5"
//             />
//           </div>

//             <button
//               type="button"
//               className="mt-52 absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
//               onClick={togglePasswordVisibility}
//               style={{ marginTop: "10px" }}
//             >
//               {passwordVisible ? (
//                 <FaEyeSlash />
//               ) : (
//                 <FaEye />
//               )}
//             </button>
          
//         </form>
//         </div>
//         <div className=" mt-[42%] ml-[-14%]">

//         <div className="w-full sm:w-120 ml-[-74%] mt-[-5%]">
//           <button className="bg-[#287100] text-white w-40 h-10  font-bold text-lg mt-12">
//             Log In
//           </button>
//         </div>
//         <div className="">
//         <p className="text-black text-1xl font-light text-custom-color lg:ml-[-78%]">
//           Don't have an account?{' '}
//           <Link href="/registration">
//             <span className="font-['Poppins'] font-bold">Sign Up</span>
//           </Link>
//         </p>
//         </div>
//         </div>
//         </div>
      
//     </div>
//   );
// };

// export default Signup;
