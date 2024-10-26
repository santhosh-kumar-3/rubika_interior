import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isInView, setIsInView] = useState(false);
  const hasLoaded = useRef(false);
  const imgRef = useRef();

  useEffect(() => {
    if (hasLoaded.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          hasLoaded.current = true;
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentImgRef = imgRef.current; // Save the ref value to a local variable
    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView || hasLoaded.current ? src : ''}
      alt={alt}
      className={className}
      style={{ opacity: isInView || hasLoaded.current ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
    />
  );
};

export default LazyImage;
