import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <MovieProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/favorite" element={ <Favorite /> } />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
