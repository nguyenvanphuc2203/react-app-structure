import logo from './logo.svg';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import  store  from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
  );
}

export default App;
