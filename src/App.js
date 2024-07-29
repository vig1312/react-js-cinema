import './App.css';
import { Route, Routes } from 'react-router-dom';
import './assets/style/home.css'
import LoginPage from './pages/loginPage';
import MoviesComp from './pages/moviePage/movie';
import CurrFilm from './pages/moviePage/CurrFilm';
import HomeComponent from './pages/homePage/home';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path='/' element={<HomeComponent/>}>
              <Route path="/movies" element={<MoviesComp />}/>
              <Route path="/movies/:id" element={<CurrFilm/>}/>
              <Route path="/loginpage" element={<LoginPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
