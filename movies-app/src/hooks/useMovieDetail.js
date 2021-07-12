import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../redux/actions';

const useMovieDetail = imdbId => {
  const [loading, setLoading] = useState(false);
  const [noData, setNodata] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (imdbId) {
      getMovieDetail();
    }
  }, []);

  useEffect(() => {
    if (imdbId) {
      getMovieDetail();
    }
  }, [imdbId]);

  const getMovieDetail = () => {
    setLoading(true);
    dispatch(
      Actions.Movie.getMovieDetail(
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
