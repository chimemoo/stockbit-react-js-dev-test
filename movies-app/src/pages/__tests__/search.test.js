import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Search from '../search';

describe('Search', () => {
  it('renders correctly', () => {
    const SearchPage = () => {
      return (
        <Provider store={store}>
          <Search />
        </Provider>
      );
    };
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
