import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedItem = () => {
  return (
    <div className="w-screen overflow-x-hidden text-green-900">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-slate-200 transition-all duration-200 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-2 transition-all duration-300">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col gap-4 items-center text-center justify-center">
              <h2 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h2>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">Rp. {item.price}</span>
              <button className="bg-green-900 text-white p-2 rounded-full">
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItem;
