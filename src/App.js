import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import MainSearch from './components/MainSearch';
import SecondSearch from './components/SecondSearch';
import Route from './components/Route';

function App() {

  const [mode, setMode] = useState("")
  const [route, setRoute] = useState("")

  return (
    <div className="App">
      <Header/>
      <h1 className="mt-10 ml-auto text-center">Transport For London Line Information</h1>
      <MainSearch setMode={setMode}/>
      {mode && <SecondSearch mode={mode} setRoute={setRoute}/>}
      <Route route={route}/>
    </div>
  );
}

export default App;
