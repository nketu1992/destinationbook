import React, { useState } from 'react';
// import './HowBookPlace.css'; // Import your CSS file

//Images Stuff
import step1 from '../../assets/Steps/step-1.gif'
import step2 from '../../assets/Steps/step-2.gif'
import step3 from '../../assets/Steps/step-3.gif'

function HowBookPlace() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="my-2 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-85">
        <div className="mb-4">
          {step === 1 && <h2 className="text-xl font-semibold">Step 1: Select a Place</h2>}
          {step === 2 && <h2 className="text-xl font-semibold">Step 2: Book Now</h2>}
          {step === 3 && <h2 className="text-xl font-semibold">Step 3: Fill Details</h2>}
        </div>

        <div className="mb-4">
          {step === 1 && (
            <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              Select Place
            </button>
          )}
          {step === 2 && (
            <>
              <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full mr-2">
                Back
              </button>
              <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                Book Now
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <button onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full mr-2">
                Back
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">
                Confirm Booking
              </button>
            </>
          )}
        </div>

        <div className="bg-gray-600 border border-red-200 shadow-md rounded-lg transition-opacity" style={{ display: step === 1 ? 'block' : 'none' }}>
          {/* Step 1 Content */}
          <img src={step1} alt="Step 1: Select a place" height={40}/>
        </div>
        <div className="bg-gray-600 border border-red-200 shadow-md rounded-lg transition-opacity" style={{  display: step === 2 ? 'block' : 'none' }}>
        {/* <div className="bg-gray-600 border border-red-200 shadow-md rounded-lg transition-opacity" style={{ opacity: step === 2 ? 1 : 0 }}> */}
          {/* Step 1 Content */}
          <img src={step2} alt="Click 'Book Now' to proceed." height={40}/>
        </div>
        <div className="bg-gray-600 border border-red-200 shadow-md rounded-lg transition-opacity" style={{  display: step === 3 ? 'block' : 'none' }}>
          {/* Step 1 Content */}
          <img src={step3} alt="Fill in your booking details" height={40}/>
        </div>

        {/* <div className="bg-gray-200 p-4 rounded-lg transition-opacity" style={{ opacity: step === 2 ? 1 : 0 }}>
          {/* Step 2 Content */}
          {/* <p>Click "Book Now" to proceed.</p>
        </div> */}

        {/* <div className="bg-gray-200 p-4 rounded-lg transition-opacity" > */}
          {/* Step 3 Content */}
          {/* <p>Fill in your booking details.</p>
        </div> */}
      </div>
    </div>
  );
}

export default HowBookPlace;