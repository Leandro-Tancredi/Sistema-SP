import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNewExp from './components/AddNewExp';
import Editar from './components/Editar';

function App() {
  return (
          <>
          <BrowserRouter>
              <NavBar />
            <Routes>
              <Route path='/expedientes' element={<Table />}/>
              <Route path='/añadir_nuevo' element={<AddNewExp />}/>
              <Route path='/expedientes/editar/:id' element={<Editar />}/>
            </Routes>
          </BrowserRouter>
          </>
          );
};
export default App;



