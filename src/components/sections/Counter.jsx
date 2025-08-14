import counterData from "../../data/counterData";
import CounterCard from "./CounterCard";

const Counter = () => {
  return (
    <section className="py-20 bg-black/10" id="stats">
      <div
        className="max-w-7xl mx-auto px-4"
        data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {counterData.map((item, index) => (
            <CounterCard
              key={index}
              number={item.number}
              label={item.label}
              delay={item.delay}      
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
