import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header"
import Home from './Components/Home/Home'
import MovieDetail from './Components/MovieDetail/MovieDetail';
import MovieList from './Components/MovieList/MovieList';
import Error from './Components/Error/Error';
import { RouterProvider } from 'react-router-dom';

const AppLayoutModule = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayoutModule />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "movieVerse/:page",
        element: <MovieList />,
        errorElement: <Error />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
        errorElement: <Error />,
      }
    ]
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Error />} />
      {/* <Router>
        <Header></Header>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movieVerse/:page" element={<MovieList />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
