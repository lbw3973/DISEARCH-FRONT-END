import { useEffect, useState } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY > 200);
    });
  }, []);

  const handleClick = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`fixed bottom-6 right-6 rounded-full bg-white cursor-pointer duration-300 ease-in-out ${!scrollPosition && "translate-x-20"}`}
      onClick={handleClick}
    >
      <RiArrowUpDoubleFill size={50} color="#000" className="relative z-10" />
    </div>
  );
};

export default ScrollToTop;
