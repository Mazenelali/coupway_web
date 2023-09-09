import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const NotificationCard = ({data}) => {
  return (
    <div
      
      className="px-1 py-2 flex flex-row w-full min-h-[90]  bg-white"
    >
      <div className="basis-[28%] max-h-[100]">
        <img src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className='w-full h-full' alt="foodimage"/>
      </div>

      <div className="ml-1 px-1 basis-[65%]">
        <div className="self-start">
          <p className="text-sm">{data.highlights}</p>
          <p>
            <span className="text-md text-light-green uppercase font-semibold">
              {data.company}
            </span>
            <span className="text-xs text-gray-500"> {data.location}</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-between mt-2">
          <div>
            <p className="text-xs uppercase">Deal Price</p>
            <p className='flex'>
              <span className="line-through text-light-green "><span className='text-black'>{data.old_price}$</span></span> -{' '}
              <span className="text-light-green">{data.new_price}$</span>
            </p>
          </div>
          <div className="bg-light-green  py-2 px-4">
            <p className="uppercase text-white font-semibold  tracking-wider">
              buy
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center basis-[5%] ml-auto">
        {/* Assuming you have imported the MaterialIcons properly */}
        <MdOutlineArrowForwardIos className="text-light-green"/>
      </div>
    </div>
  );
};



export default NotificationCard;
