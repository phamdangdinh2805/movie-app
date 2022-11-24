import { useEffect, useState } from 'react';

const useInnerWidth = () => {
  const [width, setWidth] = useState(Window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export default useInnerWidth;
