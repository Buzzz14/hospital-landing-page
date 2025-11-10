"use client";

import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useSliderImagesQuery } from "@/hooks/useSliderImagesQuery";
import Slider from "../slider";
import NavigationContent from "../navigation/navigation-content";
import { useContactQuery } from "@/hooks/useContactQuery";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
  const { data: sliderImages = [] } = useSliderImagesQuery();
  const { data: contact } = useContactQuery();

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center md:h-[600px] xl:h-[700px]">
      <section className="hidden container mx-auto py-4 xl:flex justify-between items-center">
        <h3 className="text-sm font-semibold">
          Welcome to Nepal Mediciti Hospital - For Healthy and Prosperous Nation
        </h3>

        <div className="flex gap-4 items-center text-white text-sm font-bold">
          <div className="flex gap-2 items-center">
            <MdOutlineEmail />
            {contact?.email}
          </div>
          <div className="flex gap-2 items-center">
            <FaMapLocationDot />
            {contact?.location}
          </div>
        </div>
      </section>
      <section className=" xl:container mx-auto bg-background flex items-center justify-between xl:rounded py-4 xl:py-1 px-4 shadow-lg w-full">
        <NavigationContent />
      </section>
      <section className="relative container mx-auto">
        <div className="flex flex-col lg:flex-row py-8 md:py-0">
          <div className="flex justify-between items-center pt-16 px-6 container mx-auto">
            <div className="relative z-10 flex justify-center flex-col gap-2 sm:gap-6 max-w-[500px] xl:max-w-[600px]">
              <h3 className="text-lg sm:text-2xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
                We are Nepal Mediciti Hospital
              </h3>

              <h1 className="text-4xl sm:text-5xl font-poppins font-bold leading-16">
                Redefining <span className="text-primary">Healthcare</span>{" "}
                Excellence
              </h1>

              <p className="text-lg sm:text-xl">
                Nepal Mediciti Hospital delivers world-class medical care with
                advanced technology, expert doctors, and compassionate service
                for every patient.
              </p>

              <div className="flex flex-wrap gap-4 font-poppins">
                <button className="flex items-center gap-2 cursor-pointer bg-linear-to-l from-secondary from-15% to-primary text-white font-bold px-6 py-4 rounded">
                  About Us <FaPlus className="text-xs" />
                </button>

                <button className="flex items-center gap-2 cursor-pointer bg-black text-white font-bold px-6 py-4 rounded">
                  Our Services <FaPlus className="text-xs" />
                </button>
              </div>
            </div>
            <div></div>
          </div>

          <Slider
            sliderImages={sliderImages}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
