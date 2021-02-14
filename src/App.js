import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './config/redux';

function App() {
  return (
    <Provider store={store} >
          <Routes></Routes>
    </Provider>
  );
}

export default App;
