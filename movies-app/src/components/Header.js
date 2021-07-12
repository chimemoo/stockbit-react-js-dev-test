import { Link } from 'react-router-dom';
import Search from './Search';

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Movie App</h1>
      </Link>
      <Search />
    </header>
  );
}
