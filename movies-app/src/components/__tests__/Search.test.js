import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Search from '../Search';

describe('Search', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
