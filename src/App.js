import { Route, Routes } from 'react-router-dom';

import Profile from './pages/profile';
import Checking from './pages/checking';
import LoginPage from './pages/loginPage';
import MoviesComp from './pages/moviePage/movie';
import CurrFilm from './pages/moviePage/CurrFilm';
import HomeComponent from './pages/homePage/home';

import './App.css';


const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomeComponent/>}>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/movies" element={<MoviesComp />}/>
        <Route path="/movies/:id" element={<CurrFilm/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/profile" element ={
          <Checking>
            <Profile/>
          </Checking>
        }/>
      </Route>
    </Routes>
  </div>
)

export default App;
