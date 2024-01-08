
import React, { useState, useEffect } from 'react';
import WordAnimation from './WA-gallery';
import tattoo from './img/tattoo.jpg'
import tattoo2 from './img/tattoo2.jpg'
import tattoo3 from './img/tattoo3.jpg'
import tattoo4 from './img/tattoo4.jpg'
import tattoo5 from './img/tattoo5.jpg'
import tattoo6 from './img/tattoo6.jpg'
import './styles.css'
const Gallery = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeightVh = (7000 / window.innerHeight) * 100;

      if (scrollPosition > triggerHeightVh && !startAnimation) {
        setStartAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startAnimation]);

  return (
    <>
      <div className="typing-container">
        <h1 id="galeria" className="entries">
          <WordAnimation startAnimation={startAnimation} />
        </h1>
      </div>
      <div className="gallery">
        
        <img src={tattoo} className='tattoo' alt="tattoo"></img>
        
        <img src={tattoo2} className='tattoo' alt="tattoo"></img>
        
        <img src={tattoo3} className='tattoo' alt="tattoo"></img>
        
        <img src={tattoo4} className='tattoo' alt="tattoo"></img>
        
        <img src={tattoo5} className='tattoo' alt="tattoo"></img>
        
        <img src={tattoo6} className='tattoo' alt="tattoo"></img>
      </div>
    </>
  );
};

export default Gallery;
