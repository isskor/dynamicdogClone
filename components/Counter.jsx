import React, { useEffect, useState } from 'react';

const Counter = ({ title, maxNum, interval }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = setInterval(() => {
      if (count < maxNum) return setCount(count + 1);
      clearInterval(counter);
    }, interval);

    return () => {
      clearInterval(counter);
    };
  });

  return (
    <>
      {title}
      <span>{count}</span>
    </>
  );
};

export default Counter;
