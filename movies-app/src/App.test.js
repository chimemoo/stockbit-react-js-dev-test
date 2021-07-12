import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import App from './App';

test('render app', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/MovieDB/i);
  expect(linkElement).toBeInTheDocument();
});
