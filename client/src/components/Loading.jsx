import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Loading = () => {
  const { nextUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        navigate('/' + nextUrl);
      }, 8000);
    }
  }, [nextUrl, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-48 h-auto p-4 flex flex-col items-center shadow-xl">
        {/* GIF */}
        <img
          src="/loading-run.gif" // Ensure the path is correct (public folder)
          alt="Loading animation"
          className="w-60 h-60 object-contain" // adjusted size for a consistent look
        />
        {/* Text below gif */}
        <p className="text-white text-sm font-medium mt-3 text-center">
          Loading... Please wait
        </p>
      </div>
      
          

    </div>
  );
};

export default Loading;
