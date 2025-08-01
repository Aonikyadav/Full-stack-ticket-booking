import React from 'react';
import { assets } from '../assets/assets';
import { CalendarIcon, ClockIcon, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='relative w-full h-screen bg-[url("/backgroundImage.png")] bg-cover bg-center'>
      {/* Optional: dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-start justify-center h-full gap-4 px-6 pt-24 md:px-16 lg:px-36'>
          <img src="/MarvelLogo.png" alt="Logo" className='w-60 mx-2 max-md:w-40' />
        <h1 className='text-5xl md:text-[70px] md:leading-[4.5rem] font-semibold max-w-[28rem] text-white'>
          Guardians <br /> of the Galaxy
        </h1>

        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | Adventure | Sci-Fi</span>

          <div className='flex items-center gap-1'>
            <CalendarIcon className='w-5 h-5' />
            <span>2018</span>
          </div>

          <div className='flex items-center gap-1'>
            <ClockIcon className='w-5 h-5' />
            <span>2h 8m</span>
          </div>
        </div>

        <p className='max-w-md text-gray-300'>
          In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
        </p>

        <button
          onClick={() => navigate('/movies')}
          className='flex items-center gap-2 px-6 py-3 text-sm bg-primary hover:bg-primary/80 transition rounded-full font-medium text-white'
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
