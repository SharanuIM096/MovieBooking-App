import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Relevant from "./Relevant";
import {useNavigate} from 'react-router-dom'


const Moviedetails = () => {

   let navigate = useNavigate()

 let{id}=   useParams()
 let[movie,setmovie]=useState(null)
 let[error,setError]=useState(null)
 let[pending,setpending]=useState(null)

 useEffect(()=>{
    fetch("http://localhost:5000/movies/"+id)
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)
    setmovie(data)
     setpending(false);})
     .catch((err)=>{
        setError("404bnetwork isuue")
        setpending(false)
     })
  },[id])
  let deleteMovie=()=>{
fetch("http://localhost:5000/movies/"+id,{method:"DELETE"})
.then(()=>{navigate("/")})
alert("are you sure about delete the movie ");

  }
    return ( 
      <div>

        <h1>Movie list componenet</h1>
        {pending==true && <h1>Loading.....</h1>}

        {error &&<h1>{error}</h1>}

        {movie&&<div id="movie1">
            <img src={movie.poster} alt="poster"  width="560"height="315"/>
            <h1>Movie:{movie.moviename}</h1>
            <h2>Hero:{movie.hero}</h2>
            <h3>Heroine:{movie.heroine}</h3>
            <h3>Director:{movie.director}</h3>
            <p>Languages:{movie.languages.join(" , ")}</p>
            <h3>storyline:</h3>
            <p>{movie.synopsis}</p>
            <h3>genre:{movie.genre}</h3>
            <h3>rating:{movie.rating}</h3>
            <h3>release:{movie.release}</h3>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="network problem baby check it once"></iframe>
            <button onClick={deleteMovie}>Delete</button>
            
            </div>}

           
           {movie && <Relevant genre={movie.genre}/>}
            </div>
     );
}
 
export default Moviedetails;