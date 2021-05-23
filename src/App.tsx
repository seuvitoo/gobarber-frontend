import React from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
