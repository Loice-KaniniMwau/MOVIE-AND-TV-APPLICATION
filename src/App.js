import logo from './logo.svg';

import './App.css';
import GetMovies from './components/getMovies';
import Navigation from './Navigation';
import Categories from './CategoryList';
function App() {
  
  return (
    <div>
     <Navigation/>
     <GetMovies/>
     {/* <Moviedetails search={search} movies={movies} loading={loading}/> */}
     <Categories/>
    

      
    </div>
    
  );
}

export default App;
