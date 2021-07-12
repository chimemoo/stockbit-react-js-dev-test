import { useHistory } from 'react-router-dom';
import { debounce } from '../utils/commons';

export default function Header() {
  const history = useHistory();

  const handleChangeKeyword = debounce(e => {
    e.preventDefault();
    console.log('change keyword');
    history.push(`/search?keyword=${e?.target?.value}`);
  }, 1000);

  return (
    <div>
      <input placeholder="Cari film" onChange={handleChangeKeyword} role="search" />
    </div>
  );
}
