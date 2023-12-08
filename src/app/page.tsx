import React from 'react';
import Link from 'next/link';
import WelcomePage from './profile/WelcomePage/WelcomePage';
import dynamic from 'next/dynamic';


const BasicDetailsForm = dynamic(
  () => import('./profile/BasicDetailsForm/BasicDetailsForm'),
  { ssr: false } // Disable server-side rendering for this component
);

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-red-500  via-red-500 to-red-500  min-h-screen overflow-auto ">
      <div className="flex justify-between">
        {/* Left Section: Logo and Name */}
        <div className="flex h-20 w-full border-2 border-red-500 bg-red-600 text-white p-4 space-x-8 items-center justify-between">
          <div className="flex">
            <img src="/marriage-logo/logo2-.svg" alt="Logo" className="w-20 h-20 p-2 fill-current text-white-500" />
            <span className="text-2xl font-bold pt-6 tracking-widest">GAYATRI</span>
          </div>


          {/* Right Section: Menu Items */}
          <div className="m-2 flex flex-col md:flex-row tracking-widest space-y-2 md:space-y-0 md:space-x-4 p-5">
          <Link href="/home" ><a className="mb-2 md:mb-0">Home</a> <span className="hidden md:inline">|</span></Link>        
            <Link href="/About" ><a className="mb-2 md:mb-0">About</a> <span className="hidden md:inline">|</span></Link>
            <Link href="/Terms" ><a className="mb-2 md:mb-0">Terms</a> <span className="hidden md:inline">|</span></Link>
            <Link href="/FAQs" ><a className="mb-2 md:mb-0">FAQs</a> <span className="hidden md:inline">|</span></Link>
            <Link href="/Manage Account" ><a className="mb-2 md:mb-0">Manage Account</a> <span className="hidden md:inline">|</span></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between ">
        {/*main heading*/}
          <div className="tracking-widest animate-slideIn">
            <h1 className="text-5xl text-center text-white font-bold pt-40 px-10 m-10 " > Gayatri Marriage Bureau</h1>
            <h1 className=" text-xl px-10 text-white p-5 m-10"> Find Life Partner of your Choice.</h1>
          </div>
          {/*branner*/}
          <div className="justify-center m-18 p-20 animate-fadeIn">
            <img src="/marriage-logo/god1.png" alt="Banner" className="w-full h-135" />
          </div>
         </div>
         <div > 
         <img src="/marriage-logo/Pastedimage.png" alt="Banner" className="w-full  h-1/5 object-cover" style={{ marginTop: '-1%' }} />
         </div>
        
        <WelcomePage/>
        <BasicDetailsForm onNext={function (): void {
        throw new Error('Function not implemented.');
      } } />

    </div>
  );
};

export default Page;




