import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div id="logo">
                <h1> <Link to="/">Movies</Link> </h1>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="search for movie" />
                <button>search</button>
            </div>
            <div id="fav-movie">
                <a href="/fav" id="fav">Favorite movies</a>
            </div>
            <div id="add-movie">
                <Link to="/Addmovie">Add Movie</Link>
               
            </div>
        </nav>
    );
}

export default Navbar;