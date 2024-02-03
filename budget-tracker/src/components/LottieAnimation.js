import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

function ResponsiveLottieAnimation({ animationData }) {
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      // Adjust these values based on your preferences
      if (width < 768) {
        setDimensions({ width: 400, height: 200 });
      } else if (width < 1024) {
        setDimensions({ width: 500, height: 300 });
      } else {
        setDimensions({ width: 550, height: 500 });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once initially to set the initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={dimensions.height} width={dimensions.width} />;
}

export default ResponsiveLottieAnimation;
