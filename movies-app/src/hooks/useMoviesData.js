import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../redux/actions';

const useMoviesData = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    setLoading(true);
    setNoData(false);
    dispatch(
      Actions.Movie.getMovieData(
        { page, keyword: 'Batman' },
        res => {
          const newPage = page + 1;
          setPage(newPage);
          if (res.Response === 'False') {
            setNoData(true);
          }
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  return [noData, loading, getMoviesData];
};

export default useMoviesData;
