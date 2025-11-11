"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiClient from "@/lib/apiClient";
import MotionToast from "@/components/toast";
import { ContactSchema } from "@/schemas/ContactSchema";

type ContactFormValues = z.infer<typeof ContactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setSubmitSuccess(null);
    try {
      await apiClient.post("/messages", {
        ...values,
        createdAt: new Date().toISOString(),
      });
      setSubmitSuccess("Message sent successfully.");
      reset();
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <MotionToast
        open={!!submitError}
        onClose={() => setSubmitError(null)}
        variant="error"
        position="top-right"
      >
        {submitError}
      </MotionToast>
      <MotionToast
        open={!!submitSuccess}
        onClose={() => setSubmitSuccess(null)}
        variant="success"
        position="top-right"
      >
        {submitSuccess}
      </MotionToast>
      <form
        className="w-full max-w-2xl flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label htmlFor="name" className="block text-base font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
            {...register("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-base font-semibold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <label
              htmlFor="mobile"
              className="block text-base font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="98XXXXXXXX"
              {...register("mobile")}
              aria-invalid={!!errors.mobile}
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-600">
                {errors.mobile.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={5}
            placeholder="Write your message here..."
            {...register("message")}
            aria-invalid={!!errors.message}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-primary cursor-pointer text-white font-bold py-3 rounded transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
