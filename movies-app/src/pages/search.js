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
    <main>
      <div className="main">{renderMovieListItem}</div>
      {noData && <p style={{ textAlign: 'center' }}>Film tidak ditemukan</p>}
      {loading && <p className="loading">Loading...</p>}
      <PosterModal visible={visible} onClose={onClick} data={data} />
    </main>
  );
}

export default App;
