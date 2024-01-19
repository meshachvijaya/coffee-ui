"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "The best latte for every late game",
    image: "/latte.jpg",
  },
  {
    id: 2,
    title: "Express yourself with favourite espresso",
    image: "/espresso.jpg",
  },
  {
    id: 3,
    title: "Mocachino for every ratio",
    image: "/mocha.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-green-900 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-green-900 text-white px-8 py-2 rounded-full font-semibold">
          Pesan Sekarang
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
