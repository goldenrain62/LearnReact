import "../css/Favorite.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => 
            (<MovieCard movie={movie} key={movie.id} />)
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <p>No Favorite Movies Yet</p>
      <p>Add your favorite movies and they will appear here.</p>
    </div>
  );
}

export default Favorite;
