import React from 'react';


const HeroImage = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://img.freepik.com/free-vector/thank-you-doctor-superhero-concept_52683-36927.jpg"
        alt="doctor hero pic"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Your Heroic Title
          </h1>
          <p className="text-lg text-gray-300">
            A brief description of your hero image.
          </p>
        </div>
      </div>
    </div>
  );
};


export default HeroImage;
