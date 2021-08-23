import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import SearchView from "./components/search.js"
import MovieView from './components/movieview.js'
import { Switch, Route } from "react-router-dom";
import Notfound from './components/notfound.js'

//api key = 54d065d60626a464eb653a6cd29d723f


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect (()=> {
    if (searchText){
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=54d065d60626a464eb653a6cd29d723f&language=en-US&query=${searchText}&page=1&include_adult=false
  `)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
      
    })
   }
  }, [searchText])




  return (
    <div className="App">
      <Navbar searchText = {searchText} setSearchText = {setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/search">
          <SearchView keyword={searchText} 
          searchResults={searchResults}
          />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path ='/' component ={Notfound}  />
      </Switch>
    </div>
  );
}

export default App;


