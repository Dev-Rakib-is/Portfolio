import CountUp from "react-countup";

const CounterCard = ({ number, label, delay }) => {
  return (
    <div
      className="bg-white rounded-lg shadow text-center p-6"
      data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
    >
      <h2 className="text-5xl text-blue-800 font-bold">
        <CountUp
          end={number}
          duration={3}
          suffix="+"
          enableScrollSpy
          scrollSpyOnce
        />
      </h2>
      <p className="text-green-700 font-bold mt-2">{label}</p>
    </div>
  );
};

export default CounterCard;
