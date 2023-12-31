import { useRef } from "react";
import {useNavigate} from 'react-router-dom'

const Addmovie = () => {

    let navigate = useNavigate()

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let poster = useRef();
    let trailer = useRef();
    let release = useRef();
    let rating = useRef();
    let synopsis = useRef();


    let handleAddNewMovie = (e)=>{
        e.preventDefault()
        // create new movie object
        let newMovie = {
            moviename : moviename.current.value,
            hero : hero.current.value,
            heroine : heroine.current.value,
            director : director.current.value,
            languages:[],
            genre:  genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: release.current.value,
            rating: rating.current.value,
            synopsis: synopsis.current.value
        }
        let options = document.getElementsByName("lang");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newMovie.languages.push( options[i].value )
            }  
        }

        // send the movie obj to the database
        fetch("http://localhost:5000/movies" , 
                                                {
                                                    method : "POST",
                                                    headers : {"Content-Type": "application/json"},
                                                    body : JSON.stringify(newMovie)
                                                })
        .then(()=>{
            alert("New movie added to database");
            navigate("/");
        })
    }

    return ( 
        <div className="add-movie">
            <h1>Add new Movie</h1>

            <form onSubmit={ handleAddNewMovie }>
                <input type="text" ref={moviename}  placeholder="moviename" required/>
                <input type="text" ref={hero}  placeholder="hero" required />
                <input type="text" ref={heroine} placeholder="heroine" required/>
                <input type="text" ref={director} placeholder="director" required/>
                <fieldset>
                    <legend>Select languages</legend>
                    <input type="checkbox" name="lang" value="kannada"/><label>Kannada</label>
                    <input type="checkbox" name="lang" value="tamil"/><label>tamil</label>
                    <input type="checkbox" name="lang" value="telugu"/><label>telugu</label>
                    <input type="checkbox" name="lang" value="hindi"/><label>hindi</label>
                    <input type="checkbox" name="lang" value="malayalam"/><label>malayalam</label>
                </fieldset>
                <input type="text" ref={genre}  placeholder="genre" required/>
                <input type="url" ref={poster}  placeholder="poster" required/>
                <input type="url" ref={trailer} placeholder="trailer" required/>
                <input type="number" min="1950" max="2024" ref={release} placeholder="release" required />
                <input type="number" min="1" max="10" step="0.1" ref={rating} placeholder="rating" required />
                <textarea cols="70" rows="6" ref={synopsis} placeholder="synopsis" required></textarea>

                <input type="submit" value="Add movie"/>
            </form>
        </div>
     );
}
 
export default Addmovie;