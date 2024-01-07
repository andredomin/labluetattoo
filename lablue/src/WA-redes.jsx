// WordAnimation.js
import React, { useEffect, useState } from 'react';
import './WordAnimation.css';

const WordAnimation = ({ startAnimation }) => {
  const [word, setWord] = useState('');

  useEffect(() => {
    const text = 'social.';
    const words = text.split(' ');

    setWord(
      words.map((word, wordIndex) => (
        <span key={wordIndex} className="word">
          {word.split('').map((letter, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationPlayState: startAnimation ? 'running' : 'paused',
              }}
            >
              {letter}
            </span>
          ))}
          {wordIndex !== words.length - 1 && <span className="letter-spacing">&nbsp;</span>}
        </span>
      ))
    );
  }, [startAnimation]);

  return <div id="word-container" className="word-animation">{word}</div>;
};

export default WordAnimation;
