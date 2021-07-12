import { shallow } from 'enzyme';
import MovieItem from '../MovieItem';

describe('MovieItem', () => {
  const data = {
    Title: 'Batman Begins',
    Year: '2005',
    imdbID: 'tt0372784',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  };
  it('renders correctly', () => {
    const wrapper = shallow(<MovieItem data={data} onClickPoster={() => console.log('success')} />);
    expect(wrapper).toMatchSnapshot();
  });
});
