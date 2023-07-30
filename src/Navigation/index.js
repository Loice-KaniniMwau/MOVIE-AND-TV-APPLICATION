import React, { useState } from "react";
import './style.css';
import { searchMovies } from "../utils/utilities";
const Navigation= () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  };  return (
    <div className="Navbar">
      <nav className="nav">
        <div>
          <h1 className="logo">
            M<span>oo</span>vie
          </h1>
        </div>
        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="links">
          <li><a href="">Home</a></li>
          <li>My list</li>
         
        </div>
      </nav>      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navigation;











// // NavBar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// import GetMovies from "../components/getMovies";
// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//           <Link to="../components/getMovies">GetMovies</Link>
//         </li>
//         <li>
//           <Link to="/mylist">My List</Link>
//         </li>
//         <li>
//           <Link to="/signin">Sign In</Link>
//         </li>
//       </ul>
//       <div className="search-container">
//         <input type="text" placeholder="Search movies..." />
//         <button>Search</button>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

