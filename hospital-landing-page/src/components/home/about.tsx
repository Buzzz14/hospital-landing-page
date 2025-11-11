import Image from "next/image";
import { FaHospital, FaPlus } from "react-icons/fa";
import { RiFirstAidKitFill } from "react-icons/ri";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-30 flex flex-col-reverse lg:flex-row gap-16 lg:gap-20 xl:gap-32 items-center">
      <aside className="w-full lg:w-1/2">
        <div className="flex flex-col gap-2 max-w-full sm:max-w-[500px] xl:max-w-[600px] xl:mx-auto">
          <h3 className="text-lg sm:text-xl font-poppins font-bold bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent">
            About Us
          </h3>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold leading-10 sm:leading-12">
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

        <div className="flex flex-col gap-6 py-6 sm:py-8">
          <div className="flex items-start gap-4 bg-white shadow p-4 sm:p-6 rounded">
            <div className="bg-gray-300 inline rounded-xl p-3">
              <FaHospital />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">
                State-of-the-Art Facilities
              </h3>
              <p className="text-sm sm:text-base">
                Nepal Mediciti Hospital features world-class infrastructure and
                cutting-edge medical technology, providing a safe and
                comfortable environment for our patients and families.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white shadow p-4 sm:p-6 rounded">
            <div className="bg-gray-300 inline rounded-xl p-3">
              <RiFirstAidKitFill />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold">Expert Care Team</h3>
              <p className="text-sm sm:text-base">
                Our team of highly skilled doctors, nurses, and specialists is
                dedicated to delivering compassionate, patient-centered care
                across a wide range of medical specialties.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer bg-black text-white font-bold px-6 py-4 rounded mt-2"
        >
          Explore More <FaPlus className="text-xs" />
        </button>
      </aside>

      <section className="relative w-full lg:w-1/2 min-h-[360px] flex justify-center items-center">
        <div className="relative mx-auto bg-linear-to-l from-primary to-secondary h-[300px] w-[280px] sm:h-[380px] sm:w-[320px] md:h-[430px] md:w-[320px] rounded-tl-full flex justify-end">
          <h2 className="[writing-mode:vertical-lr] rotate-180 [text-orientation:mixed] pt-6 pl-2 sm:pl-4 text-xl sm:text-2xl font-bold font-poppins text-white ">
            Committed to Healthcare.
          </h2>
        </div>
        <div className="p-2 rounded-full bg-white inline-flex absolute left-4 top-6 sm:left-24 md:left-6 z-10">
          <div className="relative h-48 w-48 sm:h-64 sm:w-64">
            <Image
              src="/surgery.jpg"
              alt="Surgeon in a Surgery"
              className="rounded-full object-cover"
              fill
              priority
              sizes="(max-width: 768px) 160px, 224px"
            />
          </div>
        </div>

        <div className="p-2 rounded-full inline-flex absolute -top-2 -left-2 sm:-top-4 sm:left-10 md:-top-12 md:-left-4 bg-white z-20">
          <div className="bg-linear-to-l from-primary to-secondary rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 xl:h-40 xl:w-40 text-white font-poppins text-center flex flex-col justify-center">
            <h3 className="text-base md:text-lg font-normal">Since</h3>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">2016</h1>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
