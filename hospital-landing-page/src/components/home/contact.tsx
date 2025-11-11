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
    <section className="container mx-auto py-24 flex flex-col gap-12">
      <section className="flex justify-center gap-8 items-center">
        <div className="flex justify-center flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h3>

          <h1 className="text-3xl sm:text-4xl max-w-lg text-start font-poppins font-bold leading-12">
            Grow Your Business With{" "}
            <span className="text-primary">Our Expertise</span>
          </h1>
        </div>
        <div>
          <p className="text-lg max-w-lg">
            We understand the importance of approaching each work integrally and
            believe in the power of simple.
          </p>
        </div>
      </section>

      <section className="grid justify-items-center grid-cols-6">
        <div className="col-span-2 flex flex-col gap-8">
          <div className="bg-gray-100 py-8 px-10 flex items-center gap-6 rounded-lg shadow-md">
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
            className="bg-gray-100 py-8 px-10 flex items-center gap-6 rounded-lg shadow-md cursor-pointer"
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
            className="bg-gray-100 py-8 px-10 flex items-center gap-6 rounded-lg shadow-md cursor-pointer"
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

        <div className="col-span-4 bg-gray-100 w-full flex items-center justify-center py-18 px-8 rounded-lg shadow-md">
          <ContactForm />
        </div>
      </section>
    </section>
  );
};

export default Contact;
