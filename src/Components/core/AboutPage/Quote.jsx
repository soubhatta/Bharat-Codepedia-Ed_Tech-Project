import React from 'react';

const Quote = () => {
  return (
    <div className='text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white'>
      "Education is the most powerful weapon which you can use to change the world."
      <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>
        — Nelson Mandela
      </span>
      <p className='mt-8 text-gray-600'>
        <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold'>
          Transforming Lives through Knowledge
        </span>
        We believe in the transformative power of education. Our mission is to empower individuals with knowledge and skills to make a positive impact on society.
      </p>
    </div>
  );
};

export default Quote;

