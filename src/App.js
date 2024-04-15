import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is  ebabled or not

 const toggleMode = ()=>{
  if (mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
  }else{
    setMode('light'); 
    document.body.style.backgroundColor = 'white';
  }
 }

  return (
    <div className="App">
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
      <TextForm heading="Enter the text to analyze"/>
      {/* <About /> */}
      </div>
     
    </div>
  );
}

export default App;
