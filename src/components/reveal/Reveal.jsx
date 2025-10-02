// Reveal.jsx
import React, { useRef, useEffect, useState } from "react";

const Reveal = ({ children, className = "", threshold = 0.12 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // one-time reveal
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default Reveal;