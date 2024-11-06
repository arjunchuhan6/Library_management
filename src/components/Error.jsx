import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

function Error() {

    const err = useRouteError();
    
    return (
        <>
        <div className="errDiv">
        <img src="https://cdn.business2community.com/wp-content/uploads/2019/06/404-page-not-found-1.jpg" width="100px" height="100px" ></img>
        <h2>OOPs</h2>
        <p>{err.status}</p>
        <p>Page {err.statusText}</p>
        <p>{err.data}</p><br/>
        <Link to="/">
        <button style={{cursor: "pointer"}}> ↩ Back to Home</button>
        </Link>
        </div>
        </>
    )
}

export default Error;