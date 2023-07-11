import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-[url('/Error/green_bg.png')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="/Logo/logo_dark.png" alt="Logo" className="h-24" />
        <img src="/Error/plugs_1.png" alt="Image" className="mt-8" />
        <button className="bg-[url('/Error/button_brown.png')] h-12 w-80 mt-8 px-4 py-2 ">
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
