import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Aboutus from './components/Aboutus';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] =  useState('light');
  const [alert,setAlert] = useState('');
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.color = '#212529';
      showAlert("Dark mode has been activated","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.color = 'white';
      showAlert("Light mode has been activated","success");
    }
  }
  return (
    <>
    <Router>
        <Navbar showAlert={showAlert} title="TEXT CHAMELEON" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-4">
        <Switch>
            <Route exact path="/about">
              <Aboutus mode={mode}/>
            </Route>
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>
            </Route>
        </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
