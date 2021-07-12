import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Detail from '../detail';

describe('Main', () => {
  it('renders correctly', () => {
    const DetailPage = () => {
      return (
        <Provider store={store}>
          <Detail />
        </Provider>
      );
    };
    const wrapper = shallow(<DetailPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
