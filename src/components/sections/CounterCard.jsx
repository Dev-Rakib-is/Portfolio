import React from "react";
import CountUp from "react-countup";

const CounterCard = ({ number, label }) => {
  return (
    <div className="bg-white rounded-lg shadow text-center p-6">
      <h2 className="text-5xl text-blue-800 font-bold">
        <CountUp end={number} duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={false}  />
      </h2>
      <p className="text-green-700 font-bold mt-2">{label}</p>
    </div>
  );
};

export default CounterCard;
