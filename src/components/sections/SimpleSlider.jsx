import React, { useEffect, useRef } from "react";

const images = [
  "https://i.ibb.co/RK8qjPP/github.jpg",
  "https://i.ibb.co/LDs9Qg0X/git.png",
  "https://i.ibb.co/LDd0JPzL/bootstrap.png",
  "https://i.ibb.co.com/9HKDmWT6/download.jpg",
  "https://i.ibb.co/Lzh2nWCM/nextjs.png",
  "https://i.ibb.co.com/mCKRbBN5/images.png",
  "https://i.ibb.co.com/j98Z4w3M/tailwind-css-logo-png-seeklogo-354675.png",
  "https://i.ibb.co.com/RGp3qNM3/vite.png",
  "https://i.ibb.co.com/3y6ScC7J/css-icon5555-logowik-com.webp",
];

const ContinuousSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = 0;

    const animate = () => {
      start -= 0.5; // slide speed
      slider.style.transform = `translateX(${start}px)`;

      // loop back when end is reached
      if (Math.abs(start) >= slider.scrollWidth / 2) {
        start = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="py-16">
    <h1 className="text-center font-bold text-4xl text-blue-800 pb-10">Technologies</h1>
    <div className="overflow-hidden w-full container mx-auto rounded-lg p-2">
      <div
        ref={sliderRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="w-40 h-40 object-cover mx-2 flex-shrink-0 rounded-lg"
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default ContinuousSlider;
