import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header/Header';
import { BodyPage } from './components/BodyPage/BodyPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BodyPage />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
