import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home/home';
import Profile from './Pages/profile';
import Checking from './Pages/checking';
import Logup from './Pages/Logup/logup';
import LoginPage from './Pages/Login/loginPage';
import TopFilms from './Pages/TopFilms/topFilms';
import MoviesComp from './Pages/moviePage/movie';
import CurrFilm from './Pages/moviePage/CurrFilm';

import '../src/Assets/style/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TopFilms />} />
          <Route path="logup" element={<Logup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies" element={<MoviesComp />} />
          <Route path="/movies/:id" element={<CurrFilm />} />
          <Route path="/loginpage" element={<Navigate to="/login" />} />
          <Route
            path="/profile"
            element={
              <Checking>
                <Profile />
              </Checking>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
