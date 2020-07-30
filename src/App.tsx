import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
