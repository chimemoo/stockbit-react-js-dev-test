import { useHistory, Link } from 'react-router-dom';
import { debounce } from '../utils/commons';
import { useAutocomplete } from '../hooks';
import { useSelector } from 'react-redux';

export default function Header() {
  const history = useHistory();
  const autocomplete = useSelector(state => state.searchReducers.autocomplete);
  const [noData, keyword, setKeyword, onSelect] = useAutocomplete();

  const onChangeKeyword = debounce(e => {
    e.preventDefault();
    setKeyword(e?.target?.value);
    handleChangeKeyword(e);
  }, 300);

  const handleChangeKeyword = debounce(e => {
    e.preventDefault();
    console.log('change keyword');
    history.push(`/search?keyword=${e?.target?.value}`);
  }, 1000);

  const makeBold = (item, keyword) => {
    var re = new RegExp(keyword, 'g');
    return item.replace(re, '<i>' + keyword + '</i>');
  };

  const renderAutocomplete = autocomplete.map((data, i) => (
    <Link
      to={`/movie/${data.imdbID}`}
      key={i}
      onClick={() => onSelect()}
      dangerouslySetInnerHTML={{ __html: makeBold(data.Title, keyword) }}
    />
  ));

  return (
    <div className="search-input-container">
      <input className="search-input" placeholder="Cari film" onChange={onChangeKeyword} role="search" />
      <div className="autocomplete">
        {autocomplete && !noData && renderAutocomplete}
        {noData && keyword !== '' && <p>No Result</p>}
      </div>
    </div>
  );
}
