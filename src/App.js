import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import View from './components/View';
import Enter from './components/Enter';



function App() {
  return (
    <div >
      <Navigation/>

      <Routes>
        <Route path='' element={<Enter/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
