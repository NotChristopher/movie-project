import Hero from "./hero"
import{useParams} from 'react-router-dom'
import { useEffect, useState } from "react"


const MovieView = () =>{
    const {id} =useParams()
   
    const [isLoading, setIsLoading] = useState(true)

    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=54d065d60626a464eb653a6cd29d723f`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
            })
    } , [id])
    
    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="loading ..."/>
        }
            if(movieDetails){
                
                const backdropUrl= `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
                const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                const defaultPoster =`https://images.unsplash.com/photo-1522120691812-dcdfb625f397?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=contain&w=500&q=80`
               // const movieReview = `https://api.themoviedb.org/3/search/movie${id}/reviews?api_key=54d065d60626a464eb653a6cd29d723f`
               return (
                <>
                    <Hero text = {movieDetails.original_title} backdrop= {backdropUrl}  />
               
                <div className='container my-5'>
                    <div className ="row">
                        <div className = "col-md-3">
                            <img src = {posterPath} onError={(e)=>{e.target.onerror = null; e.target.src=defaultPoster}} alt="..." className="img-fluid shadow rounded"/>
                        </div>
                        <div className = "col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className = "lead">{movieDetails.overview}</p>
                        </div>
                        <div className="col-md-3 my-2">
                            <h2 className="ratingText">Rating : {movieDetails.vote_average}</h2>
                        </div>
                        <div className="col-md-9 my-2">
                            <h2 className="row">Runtime : {movieDetails.runtime} min</h2>
                        </div>
                    </div>
                   
                </div>
                </>
               )}
    }

    return renderMovieDetails()
}

export default MovieView;