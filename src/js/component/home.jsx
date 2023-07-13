import React, { useEffect, useState } from 'react';
import SecondsCounter from './SecondsCounter';

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <SecondsCounter seconds={counter} />
    </div>
  );
};

export default Home;



