import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Main from '../main';

describe('Main', () => {
  it('renders correctly', () => {
    const MainPage = () => {
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      );
    };
    const wrapper = shallow(<MainPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
