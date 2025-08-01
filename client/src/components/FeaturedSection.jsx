import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/Appcontext';

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { axios, getToken, image_base_url, user } = useAppContext();

  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const fetchNowPlayingMovies = async () => {
    try {
      const { data } = await axios.get('/api/show/now-playing', {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });

      if (data.success) {
        setNowPlayingMovies(data.movies);
      }
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchNowPlayingMovies();
    }
  }, [user]);

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px' />
        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' />
        </button>
      </div>

      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {nowPlayingMovies.slice(0, 10).map((movie) => (
          <MovieCard key={movie._id} movie={{ ...movie, poster_path: image_base_url + movie.poster_path }} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary/80 transition rounded-md font-medium cursor-pointer'
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
