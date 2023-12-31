import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
const Movieslist = ({movies,title}) => {

  let[favid,setfavid]=useState([])
  let[altered,setaltered]=useState(0)

  useEffect(()=>{
    let fav=JSON.parse(localStorage.getItem("fav"));
    setfavid(fav.map((m)=>{return m.id}));

  },[altered]);



  let add=(movie)=>{

    let fav=JSON.parse(localStorage.getItem("fav"))
    fav.push(movie)
    localStorage.setItem("fav",JSON.stringify(fav))
    setaltered(altered+1);
   

  }  
  let removeMovie=(id)=>{

    let fav=JSON.parse(localStorage.getItem("fav"))
    fav=fav.filter((m)=>{return m.id!=id})
    localStorage.setItem("fav",JSON.stringify(fav))
    setaltered(altered+1);
   

  }  
    
    return ( 
        <div>
             <h1 id="title">{title}</h1>

       { movies &&<div className="movies">

         { movies.map((movie)=>{

          return(
            <div className="movie"> 
             
             {favid && favid.includes(movie.id) ?
                                <button className="add-btn" onClick={ ()=>{removeMovie(movie.id)} }> <i class='bx bxs-heart' ></i></button> :
                                
                                <button className="remove-btn" onClick={ ()=>{add(movie)} }><i class='bx bx-heart' ></i></button>}
            

              <Link to={`/moviedetails/${movie.id}`}>
              <img src={movie.poster} alt="poster" height="250px"  width="250px"/>
              <h2>{movie.moviename}</h2>
              <p>{movie.genre}</p>
              </Link>
            </div>
           
          )
         })}
        </div>} 
        </div>
        
     );
}
 
export default Movieslist;