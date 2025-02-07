import React from "react";
import CardImg from "../cardImg/CardImg";
import { cardImg1, cardImg2, cardImg3, clock } from "../../assets";
import { calender } from "./../../assets";
import Button from "../button/Button";
import { transcripted } from "../../assets";

const Card = () => {
  const cardImages1 = [
    {
      id: 1,
      img: cardImg1,
    },
    {
      id: 2,
      img: cardImg2,
    },
    {
      id: 3,
      img: cardImg3,
    },
    {
      id: 4,
      text: "+2",
    },
  ];

  return (
    <div className="px-4 pb-[16px] space-y-4 bg-[rgb(16,19,26)]">
      <div className="bg-[rgb(40,44,58)] rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex">
                <img src={calender} alt="" />
                <span className="text-xs text-gray-300 font-inter text-[12px] pl-1">
                  15 Aug 2024 | Stage 01
                </span>
              </div>
              <Button buttonText={"Transcripted"} buttonIcon={transcripted} />
            </div>
            <h3 className="text-[16px] font-[500] mt-1 text-white font-inter leading-0 w-full border-[#868C98] border-b border-dotted py-2">
              Shaping the Financial Ecosystem of the Future
            </h3>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex -space-x-2 rounded-3xl bg-white py-1 pr-4">
            {cardImages1.map((data) => {
              return (
                <CardImg
                  key={data.id}
                  dataImg={data.img}
                  dataText={data.text}
                />
              );
            })}
          </div>
          <div className="flex justify-end items-center">
            <img src={clock} alt="" className="p-1" />
            <span className="text-xs text-[#CDD0D5]">8:00 AM - 9:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
