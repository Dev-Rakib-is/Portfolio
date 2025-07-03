import React from "react";
import counterData from "../../data/CounterData";
import CounterCard from "./CounterCard";

const Counter = () => {
  return (
    <section className="py-20 bg-blue-900" id="stats">
      <div
        className="max-w-7xl mx-auto px-4"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {counterData.map((item, index) => (
            <CounterCard key={index} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
