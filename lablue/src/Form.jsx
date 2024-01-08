
import React, { useState, useEffect } from 'react';
import WordAnimation from './WA-form';

const Form = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeightVh = window.innerWidth > 768 ? (18500 / window.innerHeight) * 100 : (28000 / window.innerHeight) * 100;

      if (scrollPosition > triggerHeightVh && !startAnimation) {
        setStartAnimation(true);
        console.log('aqui')
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
        <h1 id="formulario" className="entries">
          <WordAnimation startAnimation={startAnimation} />
        </h1>
      </div>
      <div className="textabout">

        <form id='formact' action="" method="post">
          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Apellidos</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Apellidos" />
          </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button id='submit' type="submit">Enviar</button>
          </form>
      </div>
    </>
  );
};

export default Form;
