import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";

export default function Carousel({
  autoSlide = true,
  autoSlideInterval = 15000,
  slides,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-pri-mold group">
      <div className="overflow-hidden relative max-h-[400px] max-w-[1000px] mx-auto">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((img) => (
            <img src={img} alt="" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-red-600/0 text-gray-800 active:animate-ping md:group-hover:bg-white"
          >
            <ArrowLeftCircleIcon className="h-10 w-10 opacity-60" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-red-600/0 text-gray-800 active:animate-ping md:group-hover:bg-white"
          >
            <ArrowRightCircleIcon className="h-10 w-10 opacity-50" />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
