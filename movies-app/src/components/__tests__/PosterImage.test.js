import { shallow } from 'enzyme';
import PosterImage from '../PosterImage';

describe('PosterImage', () => {
  const data = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Title: 'Test',
  };

  it('renders correctly', () => {
    const wrapper = shallow(<PosterImage imageUrl={data.Poster} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<PosterImage imageUrl={data.Poster} title={data.Title} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <PosterImage imageUrl={data.Poster} title={data.Title} onClick={() => console.log('test')} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
