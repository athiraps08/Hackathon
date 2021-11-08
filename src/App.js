import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import View from './components/SearchFud';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DeleteFud from './components/DeleteFud';
import UpdateFud from './components/UpdateFud';
import SearchFud from './components/SearchFud';
import Front from './components/Front';


function App() {
  return (
   
    <div   className="App" >
<BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' exact element={<Front/>} />
      <Route path='/add' exact element={<Add/>} />
      <Route path='/search' exact element={<SearchFud/>} />
      <Route path='/update' exact element={<UpdateFud/>} />
      <Route path='/delete' exact element={<DeleteFud/>} />
    </Routes>


</BrowserRouter>

      
    </div>
  
  );
}

export default App;
