// import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {Toggler} from './components/Toggler';
import {TogglerFunc} from './components/TogglerFunc';

function App() {
  return (
    <div className="App ">
      <Toggler />
      <hr />
      <TogglerFunc />
    </div>
  );
}

export default App;
