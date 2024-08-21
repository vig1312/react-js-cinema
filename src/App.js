import { useDispatch } from 'react-redux';
import { Routes , Route, Navigate } from 'react-router-dom';

import Home from './Pages/Home/home';
import Profile from './Pages/profile';
import Checking from './Pages/checking';
import LoginPage from './Pages/loginPage';
import TopFilms from './Pages/TopFilms/topFilms';
import MoviesComp from './Pages/moviePage/movie';
import CurrFilm from './Pages/moviePage/currentFilm';
import { currentData } from './store/actions/profileSlice';

import '../src/Assets/style/App.css';

function App() {
  const dispatch = useDispatch()

  if (localStorage.loggedUser) {
    const loggedUserData = JSON.parse(localStorage.getItem("loggedUser"))
    const {username, fullName, password, email} = loggedUserData
    dispatch(currentData({
      email,
      fullName,
      password,
      username
    }))
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<TopFilms />}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/movies" element={<MoviesComp />}/>
          <Route path="/loginpage" element={<Navigate to="/login"/>}/>
          <Route path="/movies/:id" element={<CurrFilm/>}/>
          <Route path="/profile" element ={
            <Checking>
              <Profile/>
            </Checking>
          }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App

