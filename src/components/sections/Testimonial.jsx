import Slider from "react-slick"; 
import testimonials from "../../data/testimonialsData";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-20 bg-blue-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Testimonials</h2>
        <p className="text-gray-600">What People Say</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 ">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="  p-6 rounded-xl bg-white text-left "
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <p className="text-gray-700 mb-4 italic">"{item.feedback}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-blue-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
