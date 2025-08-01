import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import BlurCircle from "./BlurCircle";
import toast from "react-hot-toast";

const DateSelect = ({ datetime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onDateCheck = () => {
    if (!selected) {
      toast.error('Please choose a date');
    } else {
      navigate(`/movies/${id}/${selected}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id='dateSelect' className="pt-30">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-50px" left="100px" />

        <div className="w-full text-white">
          <p className='text-lg font-semibold'>Choose Date</p>
          <div className='flex items-center gap-6 text-sm mt-5'>
            <ChevronLeftIcon width={28} />
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              {datetime && Object.keys(datetime).map((date) => (
                <button
                  onClick={() => setSelected(date)}
                  key={date}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                    selected === date
                      ? "bg-primary text-white font-semibold"
                      : "border border-primary/70 text-white hover:bg-primary/10"
                  }`}
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>
                    {new Date(date).toLocaleDateString("en-US", { month: "short" })}
                  </span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>

        <button
          onClick={onDateCheck}
          className="mt-4 md:mt-0 px-6 py-2 bg-primary hover:bg-primary/90 transition rounded-lg text-md font-medium w-36 md:px-8"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
