import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex gap-">
      <section>
        <div className="flex justify-center flex-col gap-2 max-w-[500px] xl:max-w-[600px]">
          <h3 className="text-lg sm:text-xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h3>

          <h1 className="text-3xl sm:text-4xl font-poppins font-bold leading-12">
            Committed to <span className="text-primary">Compassionate</span> and
            Quality Care
          </h1>

          <p className="text-base sm:text-lg">
            At Nepal Mediciti Hospital, we aim to set new standards in
            healthcare by combining advanced medical technology, dedicated
            professionals, and patient-focused services to ensure the wellbeing
            of our community.
          </p>
        </div>

        <div className="flex flex-col gap-6 py-8">
          <div className="flex items-start gap-4 bg-white shadow p-6 rounded">
            <div className="bg-gray-300 inline rounded-xl p-3">
              <HiLocationMarker />
            </div>
            <div>
              <h3>Managed IT Services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem a neque aliquid quidem voluptate dolorem, quasi qui
                facilis dolor nobis error odio maiores ipsum magni optio aut
                consequuntur obcaecati illo.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white shadow p-6 rounded">
            <div className="bg-gray-300 inline rounded-xl p-3">
              <HiLocationMarker />
            </div>
            <div>
              <h3>Managed IT Services</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem a neque aliquid quidem voluptate dolorem, quasi qui
                facilis dolor nobis error odio maiores ipsum magni optio aut
                consequuntur obcaecati illo.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer bg-black text-white font-bold px-6 py-4 rounded"
        >
          Explore More <FaPlus className="text-xs" />
        </button>
      </section>

      <section className="relative">
        <div className="relative bg-linear-to-l from-primary to-secondary h-[600px] w-[500px] rounded-tl-full flex justify-end">
          <h2 className="[writing-mode:vertical-lr] rotate-180 [text-orientation:mixed] pt-12 pl-4 text-2xl font-bold font-poppins text-white ">
            We are a certified IT Service company.
          </h2>
        </div>
        <div className="p-2 rounded-full bg-white inline-flex absolute -left-12 top-10">
          <div className="relative h-100 w-100">
            <Image
              src="/surgery.jpg"
              alt="Surgeon in a Surgery"
              className="rounded-full object-cover"
              fill
              priority
              sizes="240px"
            />
          </div>
        </div>

        <div className="p-2 rounded-full inline-flex absolute top-0 -left-24 bg-white">
          <div className="bg-linear-to-l from-primary to-secondary rounded-full h-40 w-40 text-white font-poppins text-center flex flex-col justify-center">
            <h3 className="text-lg font-normal">Since</h3>
            <h1 className="text-5xl font-bold">2000</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
