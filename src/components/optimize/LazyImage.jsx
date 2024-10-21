import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false); // State to track if the image is in view
  const imgRef = useRef(); // Reference to the image element

  useEffect(() => {
    // Intersection Observer callback
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // When the image enters the viewport, mark it as in view
          setIsInView(true);
          observer.disconnect(); // Stop observing once the image is loaded
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is in view
      }
    );

    if (imgRef.current) {
      // Start observing the image element
      observer.observe(imgRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ''} // Load the image only when it's in view
      alt={alt}
      className={className}
      style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.3s ease-in' }} // Smoothly fade in the image
    />
  );
};

export default LazyImage;
