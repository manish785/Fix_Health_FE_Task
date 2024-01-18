import React from 'react';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: 'Manish Kumar',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      author: 'Rohit Barnwal',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className="bg-gray-900 p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Testimonials</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="mb-3">
          <p className="text-gray-300 italic text-sm">{testimonial.text}</p>
          <p className="text-gray-500 mt-1 text-xs">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};


export default Testimonials;