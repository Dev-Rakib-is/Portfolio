import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="bg-purple-500 shadow-[0_0_10px_#ffff] w-12 h-12 rounded-full flex justify-center items-center fixed bottom-5 right-5 text-white cursor-pointer z-50"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
};

export default BackToTop;
