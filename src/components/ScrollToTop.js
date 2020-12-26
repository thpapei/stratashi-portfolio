import scrollToTop from '../images/scrollToTop.png';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {

  const [isScrolledTop, setIsScrolledTop] = useState(true);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setIsScrolledTop(true);
      } else {
        setIsScrolledTop(false);
      }
    };
  });

  return (
    <div className={`scroll-to-top ${isScrolledTop && 'hidden'}`} onClick={() => { scroll.scrollToTop() }}>
      <img src={scrollToTop} alt='Scroll to top' />
    </div>
  );
}

export default ScrollToTop;