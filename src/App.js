import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HooksCakeContainer />
      <CakeContainer />
      <IcecreamContainer />
    </div>
    </Provider>
    
  );
}

export default App;
