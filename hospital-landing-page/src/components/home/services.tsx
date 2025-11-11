"use client";
import { useServicesQuery } from "@/hooks/useServicesQuery";
import { truncate } from "@/utils/truncate";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { motion } from "motion/react";

const fallbackServices = [
  {
    id: "1",
    name: "Emergency & Trauma Care",
    description:
      "24/7 advanced emergency and trauma services equipped with modern facilities and expert medical teams ready to respond instantly.",
    image:
      "https://www.nepalmediciti.com/images/slider/Trusted-Pre-Hospital-Care-and-Emergency-Facilities.svg",
  },
  {
    id: "2",
    name: "Cardiology",
    description:
      "Comprehensive heart care services including diagnostics, interventions, and cardiac surgery delivered by leading cardiologists.",
    image:
      "https://www.nepalmediciti.com/images/slider/Trusted-Pre-Hospital-Care-and-Emergency-Facilities.svg",
  },
  {
    id: "3",
    name: "Neurology & Neurosurgery",
    description:
      "Specialized care for brain, spine, and nervous system disorders with cutting-edge technology and experienced neurospecialists.",
    image:
      "https://www.nepalmediciti.com/images/slider/Trusted-Pre-Hospital-Care-and-Emergency-Facilities.svg",
  },
  {
    id: "4",
    name: "Orthopedics & Joint Replacement",
    description:
      "Advanced orthopedic treatments and joint replacement surgeries for restoring movement, strength, and quality of life.",
    image:
      "https://www.nepalmediciti.com/images/slider/Trusted-Pre-Hospital-Care-and-Emergency-Facilities.svg",
  },
];

const Services = () => {
  const {
    data: services,
    // isLoading: servicesLoading,
    // isError: servicesError,
  } = useServicesQuery();

  // Use fallback if no services data
  const servicesToShow =
    services && services.length > 0 ? services : fallbackServices;

  // const isLoading = servicesLoading;
  // const hasError = servicesError;

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (hasError) {
  //   return <div>Something went wrong while fetching data.</div>;
  // }

  return (
    <section className="pb-12">
      <section className="flex justify-center flex-col items-center gap-2">
        <h3 className="text-lg sm:text-xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
          What We Do
        </h3>

        <h1 className="text-3xl sm:text-4xl max-w-lg text-center font-poppins font-bold leading-12">
          We Offer World-Class <span className="text-primary">Healthcare</span>{" "}
          Services
        </h1>
      </section>

      <section className="flex justify-center items-center flex-wrap gap-10 container mx-auto mt-24 pb-12">
        {servicesToShow.map((service) => (
          <motion.div
            key={service.id}
            className="relative inline-block mt-16"
            whileHover={{ y: -16 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute -top-24 right-12 z-20 p-2 bg-white rounded-full">
              <div className="relative w-48 h-48">
                <Image
                  src={service.image}
                  alt={service.name || "Service Image"}
                  className="rounded-full object-cover"
                  fill
                  priority
                  sizes="80px"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 shadow-2xl z-10 bg-gray-100 w-70 pt-32 pb-12 px-6 m-2 [clip-path:polygon(0%_30%,100%_0%,100%_100%,0%_100%)]">
              <h3 className="font-bold text-xl">
                {truncate(service.name, 20)}
              </h3>
              <p
                className="font-normal text-base text-gray-600 line-clamp-2"
                title={service.description}
              >
                {truncate(service.description, 110)}
              </p>
              <button className="flex justify-center items-center gap-2 cursor-pointer bg-primary text-white font-bold px-4 py-2 rounded">
                Read more <FaPlus className="text-xs" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      <button
        type="button"
        className="flex mx-auto items-center gap-2 cursor-pointer bg-black text-white font-bold px-6 py-4 rounded"
      >
        More Services <FaPlus className="text-xs" />
      </button>
    </section>
  );
};

export default Services;
