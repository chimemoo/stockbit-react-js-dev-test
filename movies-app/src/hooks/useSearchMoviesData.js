import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Actions from '../redux/actions';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useSearchMoviesData = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(Actions.resetSearchResult());
    getMoviesData(true);
    setPage(1);
  }, [query.get('keyword')]);

  const getMoviesData = (newKeyword = false) => {
    setLoading(true);
    setNoData(false);
    const currentPage = newKeyword ? 1 : page + 1;
    dispatch(
      Actions.getSearchMovieData(
        { page: currentPage, keyword: query.get('keyword') },
        res => {
          if (!newKeyword) {
            const newPage = currentPage;
            setPage(newPage);
          }
          if (res.Response === 'False') {
            setNoData(true);
          }
          setLoading(false);
        },
        () => {
          setLoading(false);
          console.log('gagal');
        }
      )
    );
  };

  return [noData, loading, getMoviesData];
};

export default useSearchMoviesData;
