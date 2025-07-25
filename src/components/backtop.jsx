import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >  300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-5 right-5 bg-pink-600 hover:bg-pink-800 text-white p-2 rounded-full cursor-pointer shadow-lg transition duration-300 ease-in-out z-50"
          title="Back to top"
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;