import { Link } from 'react-router-dom';
import PosterImage from './PosterImage';

export default function MovieItem({ data, onClickPoster }) {
  return (
    <div className="movie-poster-item">
      <PosterImage imageUrl={data.Poster} title={data.Title} onClick={() => onClickPoster()} />
      <Link className="movie-item-title" to={`movie/${data.imdbID}`}>{data.Title}</Link>
    </div>
  );
}
