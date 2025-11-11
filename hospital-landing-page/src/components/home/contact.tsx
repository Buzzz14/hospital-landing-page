"use client";
import { useContactQuery } from "@/hooks/useContactQuery";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import ContactForm from "./contact-form";

const Contact = () => {
  const { data: contact } = useContactQuery();

  return (
    <section className="container mx-auto py-24 px-6 flex flex-col gap-12">
      <section className="flex justify-center flex-col md:flex-row gap-8 items-center">
        <div className="flex justify-center flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h3>

          <h1 className="text-3xl sm:text-4xl max-w-lg text-start font-poppins font-bold leading-12">
            Connect with <span className="text-primary">Nepal Mediciti Hospital</span>
          </h1>
        </div>
        <div>
          <p className="text-lg max-w-lg">
            For appointments, queries, and more information about our healthcare services, please reach out to our team. We are here to assist you with compassionate and quality care, every step of the way.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-6 gap-8 justify-items-center w-full">
        <div className="w-full col-span-1 lg:col-span-2 flex flex-col gap-8">
          <div className="bg-gray-100 py-8 px-6 sm:px-8 flex items-center gap-6 rounded-lg shadow-md w-full">
            <FaLocationDot className="text-3xl text-secondary" />
            <div>
              <h3 className="text-xl font-bold">Main Office</h3>
              <p className="text-base text-gray-500">
                {contact?.location || "New Baneshwor, Kathmandu"}
              </p>
            </div>
          </div>
          <a
            href={`tel:${(contact?.phone || "+977 - 01 - 421 7766").replace(
              /[^+\d]/g,
              ""
            )}`}
            className="bg-gray-100 py-8 px-6 sm:px-8 flex items-center gap-6 rounded-lg shadow-md cursor-pointer w-full"
          >
            <FaPhoneAlt className="text-3xl text-secondary" />
            <div>
              <h3 className="text-xl font-bold">Phone Number</h3>
              <p className="text-base text-gray-500">
                {contact?.phone || "+977 - 01 - 421 7766"}
              </p>
            </div>
          </a>
          <a
            href={`mailto:${contact?.email || "info@nepalmediciti.com"}`}
            className="bg-gray-100 py-8 px-6 sm:px-8 flex items-center gap-6 rounded-lg shadow-md cursor-pointer w-full"
          >
            <IoMail className="text-3xl text-secondary" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-base text-gray-500">
                {contact?.email || "info@nepalmediciti.com"}
              </p>
            </div>
          </a>
        </div>

        <div className="w-full col-span-1 lg:col-span-4 bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-8 rounded-lg shadow-md mt-4 lg:mt-0">
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Contact;
