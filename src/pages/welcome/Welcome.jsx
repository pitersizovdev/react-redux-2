import React, { useEffect, useRef } from 'react'
import {useNavigate } from 'react-router-dom';
import styles from './welcome.module.scss';
import Marquee from '../../components/marquee/MarqueeLogo';
import Chatting from '../../components/chatting/Chatting';
import gsap from 'gsap'

const Welcome = () => {
  const navigate = useNavigate();
  const btnContainer = useRef(null);
  const logoContainer = useRef(null);
  const chattingContainer = useRef(null);

  const handlePortfolioClick = () => {
    gsap.to(logoContainer.current, { y: -200, duration: 1 });
    gsap.to([chattingContainer.current, btnContainer.current], { opacity: 0, duration: 1, delay: 0.5 });
    // Для перехода на страницу /home после завершения анимации, используйте navigate
    setTimeout(() => {
      navigate('/home');
    }, 1500); // Подождать 1.5 секунды перед переходом
  };

  useEffect(() => {
    gsap.fromTo(btnContainer.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 4 });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={logoContainer} className={styles.logoContainer}>
        <Marquee />
      </div>

      <div ref={chattingContainer} className={styles.chattingContainer}>
        <Chatting />
      </div>

      <div ref={btnContainer} className={styles.btnContainer}>
        <button className={styles.btn} onClick={handlePortfolioClick}>
          Посмотреть портфолио
        </button>
        <a>Резюме PDF</a>
      </div>
    </div>
  );
};

export default Welcome;