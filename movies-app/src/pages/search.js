import { useSelector } from 'react-redux';
import MovieItem from '../components/MovieItem';
import PosterModal from '../components/PosterModal';
import { useSearchMoviesData, useScroll, useModal } from '../hooks';

function App() {
  const moviesData = useSelector(state => state.movieReducers.searchMovieData);
  const [noData, loading, getMoviesData] = useSearchMoviesData();
  const scroll = useScroll(noData, getMoviesData, moviesData?.length);
  const [visible, data, onClick] = useModal();

  const renderMovieListItem = moviesData.map((movie, i) => (
    <MovieItem key={i} data={movie} onClickPoster={() => onClick(movie)} />
  ));

  return (
    <div>
      <div className="main">{renderMovieListItem}</div>
      {noData && <p style={{ textAlign: 'center' }}>Film tidak ditemukan</p>}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      <PosterModal visible={visible} onClose={onClick} data={data} />
    </div>
  );
}

export default App;
