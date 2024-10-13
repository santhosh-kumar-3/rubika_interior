import React, { useEffect, useState } from "react";

const CountUp = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const range = end - start;
    const increment = Math.ceil(range / (duration / 10));

    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return <span className="text-[35px] font-bold">{count}+</span>;
};

export default CountUp;
