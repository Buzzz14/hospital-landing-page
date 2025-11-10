"use client";
import { SliderImage } from "@/hooks/useSliderImagesQuery";
import Image from "next/image";
import { useEffect } from "react";

type SliderProps = {
  sliderImages: SliderImage[];
  activeIndex: any;
  setActiveIndex: any;
};

const Slider = ({ sliderImages, activeIndex, setActiveIndex }: SliderProps) => {
  useEffect(() => {
    if (sliderImages.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex: any) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="hidden lg:block absolute top-12 xl:top-0 lg:right-4 xl:-right-12">
      {sliderImages.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="inline-flex p-2 bg-linear-to-l from-primary to-secondary  rounded-xl w-[500px] xl:w-[650px]">
            <div className="relative w-full h-60 md:h-90 xl:h-[500px]">
              <Image
                src={sliderImages[activeIndex].url}
                alt={sliderImages[activeIndex].alt}
                className="rounded-xl object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 650px"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            {sliderImages.map((_, idx) => (
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
