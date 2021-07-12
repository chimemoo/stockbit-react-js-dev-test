import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Actions from '../redux/actions';

const useMovieDetail = imdbId => {
  const [loading, setLoading] = useState(false);
  const [noData, setNodata] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imdbId) {
      getMovieDetail();
    }
  }, []);

  const getMovieDetail = () => {
    setLoading(true);
    dispatch(
      Actions.getMovieDetail(
        { imdbId },
        res => {
          setLoading(false);
          if (res.Response === 'False') {
            setNodata(true);
          }
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  return [noData, loading];
};

export default useMovieDetail;
