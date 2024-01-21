import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main/Main'
import { DetailPage } from './components/DetailPage/DetailPage'


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/detail-page/:heroParamns' element={<DetailPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;