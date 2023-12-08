import path from 'path';
import React from 'react';

const BasicDetailsForm =({ onNext }: { onNext: () => void })  => {
    const handleSubmit = 
      console.log("Form submitted");(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Add form submission logic here
    };
  
  return (
    <div className="flex justify-center items-center my-10">
      <form onSubmit={handleSubmit} className="border p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
      </form>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" name="firstName" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" id="dob" name="dob" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Caste */}
        <div className="mb-4">
          <label htmlFor="caste" className="block text-sm font-medium text-gray-700">Caste</label>
          <input type="text" id="caste" name="caste" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Subcaste */}
        <div className="mb-4">
          <label htmlFor="subcaste" className="block text-sm font-medium text-gray-700">Subcaste</label>
          <input type="text" id="subcaste" name="subcaste" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select id="gender" name="gender" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Height in Inch */}
        <div className="mb-4">
          <label htmlFor="heightInch" className="block text-sm font-medium text-gray-700">Height (inches)</label>
          <input type="number" id="heightInch" name="heightInch" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Height in Ft */}
        <div className="mb-4">
          <label htmlFor="heightFt" className="block text-sm font-medium text-gray-700">Height (feet)</label>
          <input type="number" id="heightFt" name="heightFt" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm" required />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
          <button type="button" onClick={onNext} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Next</button>
        </div>
    </div>
  );
};

export default BasicDetailsForm;
