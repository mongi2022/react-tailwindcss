import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Acceuil from './Acceuil';
import Login from './Login';
import AdminPage from './AdminPage';
import AddUser from './AddUser';
import Theme5 from './Theme5';
import AdminCon from './AdminCon';
import AddBook from './AddBook';
import AccLang from './AccLang';
import AdminP2 from './AdminP2';
import BookDetails from './BookDetails';
import AddUser2 from './AddUser2';
function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/acclang">Acceuil langue</Link>
        </li>
         <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/addbook">Ajouter livre</Link>
        </li>
        <li>
          <Link to="/adduser">Ajouter utilisateur</Link>
        </li>
        <li>
          <Link to="/adduser2">Ajouter utilisateur2</Link>
        </li>
        <li>
          <Link to="/admincon">Admin connecte</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/admin2">Admin2</Link>
        </li> 
        <li>
          <Link to="/theme5">Theme5</Link>
        </li> 
      </ul>

      <hr />

   
      <Routes>
      <Route exact path='/' element={< Acceuil />}></Route>
      <Route exact path='/acclang' element={< AccLang />}></Route>
      <Route exact path='/addbook' element={< AddBook />}></Route>
      <Route exact path='/adduser' element={< AddUser />}></Route>
      <Route exact path='/adduser2' element={< AddUser2 />}></Route>
      <Route exact path='/admincon' element={< AdminCon />}></Route>
      <Route exact path='/admin2' element={< AdminP2 />}></Route>
      <Route exact path='/admin' element={< AdminPage />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
      <Route exact path='/theme5' element={< Theme5 />}></Route>

      </Routes>
      {/*   <Route  path="/">
          <Acceuil />
        </Route>
        <Route  path="/acclang">
          <AccLang />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addbook">
          <AddBook />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/adduser2">
          <AddUser2 />
        </Route>
        <Route path="/admincon">
          <AdminCon />
        </Route>
        <Route path="/admin2">
          <AdminP2 />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route> */}
     
    </div>
  </Router>
  );
}

export default App;
