import { useSelector } from 'react-redux';
import { useModal, useMoviesData, useScroll } from '../hooks';
import MovieItem from '../components/MovieItem';
import PosterModal from '../components/PosterModal';

function Main() {
  const moviesData = useSelector(state => state.movieReducers.movieData);
  const [noData, loading, getMoviesData] = useMoviesData();
  const scroll = useScroll(noData, getMoviesData, moviesData?.length);
  const [visible, data, onClick] = useModal();

  const renderMovieListItem = moviesData.map((movie, i) => (
    <MovieItem key={i} data={movie} onClickPoster={() => onClick(movie)} />
  ));

  return (
    <main>
      <div className="main">{renderMovieListItem}</div>
      {loading && <p className="loading">Loading...</p>}
      <PosterModal visible={visible} data={data} onClose={() => onClick()} />
    </main>
  );
}

export default Main;
