"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const bannerData = [
  {
    title: "Welcome to TechShop",
    description: "Discover the latest gadgets & electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    primaryBtn: "Shop Now",
    secondaryBtn: "View Deals",
  },
  {
    title: "Smart Devices for Smart Life",
    description: "Phones, laptops, headphones & more",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    primaryBtn: "Explore Products",
  },
  {
    title: "Best Deals & Offers",
    description: "Upgrade your tech at unbeatable prices",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    primaryBtn: "Grab Offers",
  },
];

const offerBanners = [
  {
    id: 1,
    image: "https://endgadgets.com/wp-content/uploads/2025/08/Untitled-design-5.png",
  },
  {
    id: 2,
    image: "https://blog.gadgetandgear.com/wp-content/uploads/2023/08/Exchange-Bonus-1024x576.jpg",
  },
];

const TechShopBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4 h-[50vh] md:min-h-[70vh] xl:min-h-[70vh]">

        {/* Slider */}
        <div className="lg:col-span-8 h-full overflow-hidden rounded-lg relative">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {bannerData.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full items-center px-6 md:px-12">
                  <div className="text-white max-w-xl space-y-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold">
                      {slide.title}
                    </h1>
                    <p className="opacity-90">{slide.description}</p>
                    <div className="flex gap-3">
                      <button className="btn btn-primary">
                        {slide.primaryBtn}
                      </button>
                      {slide.secondaryBtn && (
                        <button className="btn btn-outline text-white">
                          {slide.secondaryBtn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between z-20">
            <button
              className="btn btn-circle btn-sm md:btn-md"
              onClick={() =>
                setCurrent(
                  current === 0 ? bannerData.length - 1 : current - 1
                )
              }
            >
              ❮
            </button>
            <button
              className="btn btn-circle btn-sm md:btn-md"
              onClick={() =>
                setCurrent((current + 1) % bannerData.length)
              }
            >
              ❯
            </button>
          </div>
        </div>

        {/* Offers */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {offerBanners.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-lg overflow-hidden group"
            >
              <Image
                src={offer.image}
                alt="Offer"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition">
                <button className="btn btn-outline opacity-0 group-hover:opacity-100">
                  View Offer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechShopBanner;
