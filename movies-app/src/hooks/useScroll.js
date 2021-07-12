import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useScroll = (noData, handler, total = 0) => {
  const totalResults = useSelector(state => state.movieReducers.movieCount);
  useEffect(() => {
    window.onscroll = () => {
      const different =
        Math.round(window.innerHeight + document.documentElement.scrollTop) - document.documentElement.offsetHeight;
      if (Math.abs(different) < 10 && total <= totalResults) {
        console.log('fetch');
        if (!noData) {
          handler();
        }
      }
    };
    return () => {
      window.onscroll = () => {};
    };
  });

  return true;
};

export default useScroll;
