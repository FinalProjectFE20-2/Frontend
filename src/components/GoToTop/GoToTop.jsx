import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import style from './GoToTop.module.scss';

function GoToTop() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showGoToTop && (
        <FaArrowCircleUp className={style.to__top} onClick={scrollUp} />
      )}
    </div>
  );
}

export default GoToTop;
