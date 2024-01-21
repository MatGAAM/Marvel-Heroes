import { GlobalStyles } from './styles/GlobalStyles';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
