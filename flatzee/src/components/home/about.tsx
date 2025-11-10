import Image from "next/image";
import { FaHospital, FaPlus } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 flex gap-32">
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
              <FaHospital />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                State-of-the-Art Facilities
              </h3>
              <p>
                Nepal Mediciti Hospital features world-class infrastructure and
                cutting-edge medical technology, providing a safe and
                comfortable environment for our patients and families.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white shadow p-6 rounded">
            <div className="bg-gray-300 inline rounded-xl p-3">
              <RiFirstAidKitFill />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Expert Care Team</h3>
              <p>
                Our team of highly skilled doctors, nurses, and specialists is
                dedicated to delivering compassionate, patient-centered care
                across a wide range of medical specialties.
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
            Committed to Healthcare Excellence.
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
