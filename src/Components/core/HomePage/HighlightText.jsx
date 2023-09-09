import React from 'react';

function HighlightText({ text }) {
  return (
    <span className='bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF6347] text-transparent bg-clip-text font-bold'>
      {text}
    </span>
  );
}

export default HighlightText;
