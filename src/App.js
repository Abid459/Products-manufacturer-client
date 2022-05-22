import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [isDark,setIsDark] = useState(false)
  return (
    <div className="App" data-theme={isDark? "dark":"light"}>
      <Header setIsDark={setIsDark} isDark ={isDark}></Header>
    </div>
  );
}

export default App;
