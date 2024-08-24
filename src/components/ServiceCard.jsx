import React from "react";
import { bigShoe1 } from "../assets/images";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center rounded-full items-center  bg-coral-red ">
        <img
          src={imgURL}
          alt="cd"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-slate-gray text-lg leading-normal">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
