import Hero from "./hero";
import { Link } from "react-router-dom";
//api key = 54d065d60626a464eb653a6cd29d723f
//img path : https://image.tmdb.org/t/p/w500/


const MovieCard =({movie}) => {

  const defaultUrl = `https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=cover&w=500&q=80`


  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  
  const detailUrl = `/movies/${movie.id}`

  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" >
      <img src={posterUrl} onError={(e)=>{e.target.onerror = null; e.target.src=defaultUrl}} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to = {detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for..... ${keyword}`

  const resultsHtml = searchResults.map((obj,i) =>{
      
      return <MovieCard movie = {obj} key ={i} />
      
     
  })


  return (
    <div>
      <Hero text={title} />
      {resultsHtml &&
      <div className = 'container'> 
        <div className ='row'>
          {resultsHtml}
          </div>
      </div>}
    </div>
  );
};

export default SearchView;
