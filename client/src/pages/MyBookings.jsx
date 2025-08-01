import React, { useEffect, useState } from 'react';
import { dummyBookingData } from '../assets/assets';
import Loading from '../components/Loading';
import BlurCircle from '../components/BlurCircle'; // Make sure this exists
import timeFormat from '../lib/timeFormat';
import { dateFormat } from '../lib/dateFormat';
import { useAppContext } from '../context/Appcontext';


const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
const { axios , getToken , user ,image_base_url} = useAppContext();

  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  


  const getMyBookings = async () => {
    // setBookings(dummyBookingData);
    // setIsLoading(false);
  try {
    const { data } = await axios.get('/api/user/bookings', {
      headers: {
        Authorization: `Bearer ${await getToken()}`
      }
    });

    if (data.success) {
      setBookings(data.bookings);
    }
  } catch (error) {
    console.log("Error fetching bookings:", error);
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    if(user) {
      getMyBookings();
    }
    }, [user]);

  return !isLoading ? (
    <div className="relative mt-20 px-4 sm:px-6 md:px-14 lg:px-24 pt-10 min-h-[70vh] mb-10 max-md:mt-15">
      <BlurCircle top="100" left="100" />
      <div>
        <BlurCircle bottom="0" right="80vh" />
      </div>
      <h1 className="text-lg sm:text-xl font-medium text-gray-300 mb-6">Your Bookings</h1>
      {bookings.map((item, index) => (
  <div
    key={index}
    className="flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl"
  >
    <div className="flex flex-col md:flex-row">
      <img
        src={image_base_url + item.show.movie.poster_path}
        alt=""
        className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded"
      />
      <div className="flex flex-col p-4">
        <p className="text-lg font-semibold">{item.show.movie.title}</p>
        <p className="text-gray-400 text-sm">{timeFormat(item.show.movie.runtime)}</p>
        <p className="text-gray-400 text-sm mt-auto">{dateFormat(item.show.showDateTime)}</p>
      </div>
    </div>

    <div className="flex flex-col md:items-end md:text-right justify-between p-4">
  <div className="flex items-center gap-4">
    <p className="text-2xl font-semibold mb-3">
      {currency}{item.amount}
    </p>
    {!item.isPaid && (
      <button className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer">
        Pay Now
      </button>
    )}
  </div>
  <div className="text-sm">
    <p>
      <span className="text-gray-400">Total Tickets:</span> {item.bookedSeats.length}
    </p>
    <p>
      <span className="text-gray-400">Seat Number:</span> {item.bookedSeats.join(", ")}
    </p>
  </div>
</div>

    </div>
    ))}
  </div>
) : (
  <Loading />
);
};

export default MyBookings;
