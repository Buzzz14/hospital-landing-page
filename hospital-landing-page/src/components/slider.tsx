"use client";
import { SliderImage } from "@/hooks/useSliderImagesQuery";
import Image from "next/image";
import { useEffect } from "react";

type SliderProps = {
  sliderImages: SliderImage[];
  activeIndex: any;
  setActiveIndex: any;
};

const fallbackImages = [
  {
    id: "1",
    url: "https://www.nepalmediciti.com/images/slider/Trusted-Pre-Hospital-Care-and-Emergency-Facilities.svg",
    alt: "This is an alt text 1.",
  },
  {
    id: "2",
    url: "https://www.nepalmediciti.com/images/slider/International-Insurance.svg",
    alt: "This is an alt text 2.",
  },
  {
    id: "3",
    url: "https://www.nepalmediciti.com/images/slider/Medical-Examination-for-Australia-Japan-and-New-Zealand.jpg",
    alt: "This is an alt text 3.",
  },
];

const Slider = ({ sliderImages, activeIndex, setActiveIndex }: SliderProps) => {
  const imagesToShow = sliderImages && sliderImages.length > 0 ? sliderImages : fallbackImages;

  useEffect(() => {
    if (!imagesToShow.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex: any) =>
        prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesToShow.length, setActiveIndex]);

  return (
    <section className="hidden lg:block absolute top-12 xl:top-0 lg:right-4 xl:-right-12">
      {imagesToShow.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="inline-flex p-4 shadow-xl rounded-xl w-[500px] xl:w-[650px]">
            <div className="relative w-full h-60 md:h-90 xl:h-[500px] border rounded-xl border-gray-100">
              <Image
                src={imagesToShow[activeIndex].url}
                alt={imagesToShow[activeIndex].alt}
                className="rounded-xl object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 650px"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {imagesToShow.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show slide ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                type="button"
                className={`h-3 w-3 min-h- min-w-1 m-0.5 rounded-full bg-black outline-none cursor-pointer
                ${
                  activeIndex === idx
                    ? "ring-3 ring-primary ring-offset-4 bg-black"
                    : ""
                }
              `}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Slider;
