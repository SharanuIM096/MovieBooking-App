import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Home = () => {

  let[movies,setmovies]=useState(null)
  let[error,setError]=useState(null)
  let[pending,setpending]=useState(null)


  useEffect(()=>{
    if( localStorage.getItem("fav")==null )
    {
        localStorage.setItem("fav" , "[]")
    }


    fetch("http://localhost:5000/movies")
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)
    setmovies(data)})
  },[])

    return ( 
       <div className="home">
        {!movies&&<h1>Loading.......</h1>}
        
        {movies&&<Movieslist movies={movies} title="All movies"/>}

        {movies&&<Movieslist movies={movies.filter((m)=>{return m.genre.includes("Comedy")})} title="Comedy  movies"/>}

        {movies&&<Movieslist movies={movies.filter((m)=>{return m.genre.includes("action")})} title="action  movies"/>}

        

     


      
       </div>
     );
}
 
export default Home;