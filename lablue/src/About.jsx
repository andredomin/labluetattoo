// About.js
import React, { useState, useEffect } from 'react';
import WordAnimation from './WA-about';

const About = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeightVh = (4000 / window.innerHeight) * 100;

      if (scrollPosition > triggerHeightVh && !startAnimation) {
        console.log('funciona')
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
        <h1 id="about" className="entries">
          <WordAnimation startAnimation={startAnimation} />
        </h1>
      </div>
      <div className="textabout">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint voluptatum ipsa fuga ipsum aspernatur
          molestias impedit quibusdam iste quod totam, illo quasi culpa iusto dignissimos ipsam harum, rerum eius at?
        </p>
      </div>
    </>
  );
};

export default About;
