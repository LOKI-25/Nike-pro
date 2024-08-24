import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="max-container flex gap-10 flex-1 justify-wrap items-center max-xl:flex-col-reverse w-full">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className=" text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover stylish Nike arrivals,quality,comfort, and innovation for
          your active life
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your ssatisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />

        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
