import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/main';
import Search from './pages/search';
import Detail from './pages/detail';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movie/:imdbId">
          <Detail />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
