import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home'
import MovieDetail from './Components/MovieDetail/MovieDetail';

import MovieList from './Components/MovieList/MovieList';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movieVerse/:page" element={<MovieList/>}></Route>
          <Route path="movie/:id" element={<MovieDetail/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
