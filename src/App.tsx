import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header/Header';
import { BodyPage } from './components/BodyPage/BodyPage';

function App() {
  return (
    <>
      <Header />
      <BodyPage />
      <GlobalStyles />
    </>
  );
}

export default App;
