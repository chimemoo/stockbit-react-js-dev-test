import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMovieDetail from '../hooks/useMovieDetail';

export default function MovieDetail() {
  const { imdbId } = useParams();
  const [noData, loading] = useMovieDetail(imdbId);
  const movieDetail = useSelector(state => state.movieReducers.movieDetail);

  window.scroll(() => {});

  const renderMovieDetail = () => (
    <div className="movie-detail">
      <img src={movieDetail?.Poster} alt={movieDetail?.Title} />
      <div className="movie-content">
        <h1 className="title-text mb-10 bold">{movieDetail?.Title}</h1>
        <p className="mb-10">Rating imdb :{movieDetail?.imdbRating}</p>
        <h2 className="mb-5 bold">Deskripsi</h2>
        <p className="mb-10">{movieDetail?.Plot}</p>
        <h2 className="mb-5 bold">Aktor</h2>
        <p className="mb-10">{movieDetail?.Actors}</p>
        <h2 className="mb-5 bold">Genre</h2>
        <p className="mb-10">{movieDetail?.Genre}</p>
        <h2 className="mb-5 bold">Negara</h2>
        <p className="mb-10">{movieDetail?.Country}</p>
        <h2 className="mb-5 bold">Bahasa</h2>
        <p className="mb-10">{movieDetail?.Language}</p>
        <h2 className="mb-5 bold">Rate</h2>
        <p className="mb-10">{movieDetail?.Rated}</p>
      </div>
    </div>
  );

  if (imdbId) {
    return (
      <div>
        {!loading && renderMovieDetail()}
        {noData && <p style={{ textAlign: 'center' }}>Film tidak ditemukan</p>}
        {loading && <p>Loading...</p>}
      </div>
    );
  }
  return <div />;
}
