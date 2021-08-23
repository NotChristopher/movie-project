import Hero from "./hero";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";





const Home =() =>{
  

    const [movies] = 'movie';
  
    const [trending, setTrending] = useState([]);
    
  
    useEffect (()=> {
      
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=54d065d60626a464eb653a6cd29d723f`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTrending(data.results)
        
      })
     },[movies])
    
  
     const resultsHtml = trending.map((obj,i) =>{
      return <MovieCard movie = {obj} key ={i} />
    })
  

  
  return (
    <div>
      <Hero text= "Movies Trending this week"/>
      {resultsHtml &&
      <div className = 'container'> 
        <div className ='row'>
          {resultsHtml}
          </div>
      </div>}
    </div>
  );
};

export default Home;


const MovieCard =({movie}) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`

  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card" >
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to = {detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}