import { Link } from "react-router-dom";
import "./style.css";
function Header() {
    return(
        <>
        <div className="header-Div">
           <div>
              <img src="https://tse1.mm.bing.net/th?id=OIG4.X5mVWOXgfRCOG8mcgtl0&pid=ImgGn" alt="" width="100px" height="100px" /> 
           </div>
           <div>
               <ul className="nav-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/browsebook"><li>Browse Books</li></Link>
                <Link to="/addbook"><li>Add Books</li></Link>
               </ul>
           </div>
        </div>
        </>
    )
}
export default Header;