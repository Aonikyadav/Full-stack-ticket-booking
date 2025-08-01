import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useAppContext } from '../context/Appcontext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const {favoriteMovies} = useAppContext();

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5 bg-white dark:bg-black backdrop-blur shadow'>
      {/* Logo */}
      <Link to='/' className='max-md:flex-1' onClick={() => setMenuOpen(false)}>
        <img src={assets.logo} alt="Logo" className='w-36 h-auto' />
      </Link>

      {/* Navigation Links */}
      <div className={`
        ${menuOpen ? 'flex' : 'hidden'} 
        md:flex 
        max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen 
        bg-black text-white z-40 flex-col md:flex-row items-center justify-center 
        gap-8 transition-all duration-300
      `}>
        <XIcon 
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'
          onClick={() => setMenuOpen(false)} 
        />
        <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to='/movies' onClick={() => setMenuOpen(false)}>Movies</Link>
        <Link to='/' onClick={() => setMenuOpen(false)}>Theaters</Link>
        <Link to='/' onClick={() => setMenuOpen(false)}>Releases</Link>
        { favoriteMovies.length > 0 &&
           <Link to='/favorite' onClick={() => setMenuOpen(false)}>Favorites</Link>

        }
             </div>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        {
          !user ? (
            <button 
              onClick={() => openSignIn()} 
              className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary/80 transition rounded-full font-medium cursor-pointer'
            >
              Login
            </button>
          ) : (
            <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={()=> navigate('/my-bookings') }/>
                </UserButton.MenuItems>
            </UserButton>
          )
        }
        <MenuIcon 
          className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer'
          onClick={() => setMenuOpen(true)} 
        />
      </div>
    </div>
  );
};

export default Navbar;
