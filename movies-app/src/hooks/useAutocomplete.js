import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from '../redux/actions';

const useAutocomplete = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    getMoviesData(true);
    setPage(1);
  }, [keyword]);

  const getMoviesData = () => {
    setNoData(false);
    dispatch(
      Actions.Search.getSearchAutocompleteMovieData(
        { page: page, keyword: keyword },
        res => {
          if (res.Response === 'False') {
            setNoData(true);
          }
        },
        () => {
          setNoData(true);
          console.log('gagal');
        }
      )
    );
  };

  const onSelect = () => {
    dispatch(Actions.Search.resetSearchAutocomplete());
  };

  return [noData, keyword, setKeyword, onSelect];
};

export default useAutocomplete;
