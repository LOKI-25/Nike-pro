import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants/index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen max-container">
      <div className="xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block ">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arraivals,quality,comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full gap-16 mt-20">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{item.value}</p>
              <p className="font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40  border-2 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={bigShoeImg}
          alt="Big shoe"
          className="object-contain relative z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, i) => (
            <div key={i}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
