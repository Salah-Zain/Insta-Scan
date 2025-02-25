import React, { useState } from "react";
import {
  clockBlack,
  overview,
  overviewCal,
  overviewProfile,
  resourceimg,
  rightButton,
  share,
  shareBlack,
  social,
  takeAwayIcon,
} from "../../assets";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] rounded-lg px-4">
        {/* Div 1: Header */}
        <div className="flex justify-between items-center py-4 w-full text-[#0A0D14] border-b border-[#FBF9F9]">
          <Link to="/">
            <button className="w-[32px] h-[32px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
              <img src={rightButton} alt="" className="" />
            </button>
          </Link>
          <h1 className="px-3 font-inter font-medium text-[16px] sm:text-[16px] leading-6">
            Shaping the Financial Ecosystem of the Future
          </h1>
        </div>

        {/* Div 2: Profile */}
        <div className="flex items-center py-4 w-full text-[#0A0D14]">
          <div className="w-[48px] h-[48px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
            <img src={overviewProfile} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <h2 className="px-3 font-inter font-medium text-[#0A0D14] text-[16px] sm:text-[14px] leading-[16.94px]">
              Safari Sanders Dennyes
            </h2>
            <p className="px-3 font-inter text-[12px] text-[#525866]">
              Ai Research Director, Tecnosys
            </p>
          </div>
        </div>

        {/* Div 3: Date and Time */}
        <div className="flex justify-between items-center pb-3">
          <div className="flex">
            <div className="flex items-center border-r-2 border-black">
              <img src={overviewCal} alt="" className="p-2" />
              <p className="text-[12px] text-[#0A0D14] font-inter pr-2">
                Jan 17, 2025
              </p>
            </div>
            <div className="flex items-center">
              <img src={clockBlack} alt="" className="p-2" />
              <p className="text-[10px] sm:text-[12px] font-inter text-[#0A0D14]">
                45 min
              </p>
            </div>
          </div>
          <div>
            <img src={shareBlack} alt="" />
          </div>
        </div>
      </div>

      {/* Section 0-2: Links */}
      <div className="flex items-center justify-around pt-4">
        {/* overview */}
        <Link to="/overview">
          <div className="flex items-center flex-col justify-center py-4">
            <img
              src={overview}
              alt=""
              className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
            />
            <p className="text-[#FFFFFF] text-[12px] sm:text-[14px] border-b-2 border-[#5BF5FF] pb-2">
              Overview
            </p>
          </div>
        </Link>

        {/* overview take away */}
        <Link to="/overview/takeaway">
          <div className="flex items-center flex-col justify-center">
            <img
              src={takeAwayIcon}
              alt=""
              className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
            />
            <p className="text-[#868C98] text-[12px] sm:text-[14px]">
              Take Away
            </p>
          </div>
        </Link>

        {/* overview social  */}
        <Link to="/social/twitter">
          <div className="flex items-center justify-center flex-col">
            <img
              src={social}
              alt=""
              className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
            />
            <p className="text-[#868C98] text-[12px] sm:text-[14px]">Social</p>
          </div>
        </Link>

        {/* overview resource  */}
        <Link to="/overview/resource">
          <div className="flex items-center justify-center flex-col">
            <img
              src={resourceimg}
              alt=""
              className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
            />
            <p className="text-[#868C98] text-[12px] sm:text-[14px]">
              Resources
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Menu;
