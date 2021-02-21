import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
          <Routes></Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
