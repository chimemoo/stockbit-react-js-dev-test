import { shallow } from 'enzyme';
import PosterModal from '../PosterModal';

describe('PosterModal', () => {
  const data = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  };

  it('renders correctly', () => {
    const wrapper = shallow(<PosterModal data={data} visible={true} onClose={() => console.log('close')} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<PosterModal data={null} visible={false} onClose={() => console.log('close')} />);
    expect(wrapper).toMatchSnapshot();
  });
});
