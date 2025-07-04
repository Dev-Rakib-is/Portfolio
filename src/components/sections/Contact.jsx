import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pmbg64y",
        "template_vnfkt2k",
        form.current,
        "HnsQHRAGPiQnq0MYG"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2
          className="text-4xl font-bold text-blue-900 mb-2"
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          Contact Me
        </h2>
        <p className="text-gray-600" data-aos="zoom-in" data-aos-delay="100">
          Let's connect and work together
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 w-full border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 w-full border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 w-full border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 w-full border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 px-6 rounded hover:bg-blue-800"
          >
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div
          data-aos="zoom-in"
          data-aos-daley="200"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <iframe
            className="w-full h-full rounded"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.416104355021!2d90.40388637502772!3d23.874859283987586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4313907ce31%3A0x1a1877388fa780c0!2sDewanpara%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1751564675459!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="top-right" />
    </section>
  );
};

export default Contact;
