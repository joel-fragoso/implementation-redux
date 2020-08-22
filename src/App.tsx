import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
}

export default App;
