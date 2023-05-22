//import logo from './logo.svg';
import './App.css';

import Slogan from './components/text-transformation/text-transformation.js'

import Button from './components/button/button'

function App() {
  return (
    <>

    <div className="App">
      <Slogan text='Olá mundo! Eu sou o verde! 😄' color='#58912998'/>

      <Slogan text='Olá mundo! Eu sou laranja! 😄' 
      color='#e49800'/>

      <Button label="Baixar CV!"/>
    </div>
    </>

  );
}

export default App;
