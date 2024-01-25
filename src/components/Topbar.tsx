import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 z-50">
      <div className="h-full px-[20px] flex items-center justify-between">
        <div>
          <span className="text-[30px] text-[#555] font-bold cursor-pointer">
            My logo
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-[10px] text-[#555]">
            <NotificationsNone />
            <span className="absolute w-[15px] h-[15px] bg-red-500 text-white text-[10px] rounded-full top-[-5px] right-0 flex justify-center items-center">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-[10px] text-[#555]">
            <Language />
            <span className="absolute w-[15px] h-[15px] bg-red-500 text-white text-[10px] rounded-full top-[-5px] right-0 flex justify-center items-center">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-[10px] text-[#555]">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
