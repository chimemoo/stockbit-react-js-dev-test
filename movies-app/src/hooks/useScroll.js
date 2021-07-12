import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { debounce } from '../utils/commons';

const useScroll = (noData, handler, total = 0) => {
  const totalResults = useSelector(state => state.movieReducers.movieCount);
  useEffect(() => {
    window.onscroll = () => {
      if (
        Math.round(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight &&
        total <= totalResults
      ) {
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
