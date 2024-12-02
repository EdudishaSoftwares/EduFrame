import './App.css'
import { Routes, Route } from 'react-router-dom';
import envCongfig from './environments/environment';
function App() {
  document.title = envCongfig.title;

  return (
    <Routes>
    </Routes>
  )
}

export default App
