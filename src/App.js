import Addmovie from "./component/Addmovie";
import Home from "./component/Home";
import Moviedetails from "./component/Moviedetails";
import Navbar from "./component/Navbar";
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Favorites from "./component/Favorites";

function App(){
   
    return (
        <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Addmovie" element={<Addmovie/>}/>
                <Route path="/moviedetails/:id" element={<Moviedetails/>}></Route>
                <Route path="/fav" element={<Favorites/>} />
        </Routes>
        </div>
        </BrowserRouter>
    );
}
export default App;

