import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home';
import TopFilms from './Pages/TopFilms/topFilms';
import RestFilms from './Pages/RestFilms/restFilms';


function App() {

  return (

    <div className="App">
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<TopFilms />}/>
                <Route path={"films"} element={<RestFilms />}/>
            </Route>
        </Routes>
    </div>

  );
}

export default App;
