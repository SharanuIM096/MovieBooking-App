import { useState,useEffect } from "react"
import Movieslist from "./Movieslist"

const Relevant = ({genre}) => {

let[movies,setmovies]  =  useState(null)

    useEffect(()=>{
  fetch("http://localhost:5000/movies")
  .then((res)=>{return  res.json()})
  .then((data)=>{setmovies(data  )})

    },[])




    return (  
        <div className="relevant-movies">
            <h1>genre</h1>

{movies && <Movieslist movies={
    movies.filter((m)=>{return m.genre.includes(genre)})} title="Relevent movies"/>}


        </div>
    );
}
 
export default Relevant;