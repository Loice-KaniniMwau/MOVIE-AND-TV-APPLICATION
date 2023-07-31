import React, { useState} from "react";
import ImageContainer from "../atoms/ImageContainer";
import './style.css';

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const Moviedetails=() => {
const [search,setSearch]=useState[null]
const[movies,setMovies]=useState[null]
const[loading,setLoading]=useState[null]
  const [selectedMovie, setSelectedMovie] = useState(null);
  const filterMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
 
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="movie-list-container">
      <div className="image-container">
        {loading === false && movies.length > 0 && filterMovies.map(item => (
          <div key={item.id} onClick={() => handleMovieClick(item)}>
            <ImageContainer props={item} />
          </div>
        ))}
      </div>
      
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedMovie(null)}>&times;</span>
            <img src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Moviedetails;

