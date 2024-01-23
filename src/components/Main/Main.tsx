
import { Header } from '../Header/Header';
import { BodyPage } from '../BodyPage/BodyPage';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Footer } from '../Footer/Footer';

export const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <BodyPage />
      <Footer/>
    </Provider>
  );
}
