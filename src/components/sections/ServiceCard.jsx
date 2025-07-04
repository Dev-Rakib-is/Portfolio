import { useState } from "react";

const ServiceCard = ({ icon, title, description, details  }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-lg transition"
        data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
      >
        <div className="text-4xl mb-4 text-blue-700">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          className="text-blue-700 font-semibold hover:underline"
          onClick={() => setShowModal(true)}
        >
          Read More →
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto text-center relative animate-fade-in-up">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{details}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
