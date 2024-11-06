import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

function BookDetail() {

    const Books = useSelector((state) => state.Form); 
    const param = useParams();
    
    const data = Books.find((book) => book.id == param.id);

    return (
        <>
            <div className="bookDetailTitle">
                <h2>{`${data.title}`} </h2>
            </div>
            <div className="bookDetailDiv">
                <div>
                    <img src={data.coverImage} alt="Book image" width="500px" height="500px" />
                </div>
                <div className="bookDetailpara">
                    <p> <b>Title: </b>{data.title}</p>
                    <p> <b>Author:</b> {data.author}</p>
                    <p> <b>Publish Year:</b> {data.publishedDate}</p>
                    <p> <b>Description:</b> {data.description}</p>
                    <p> <b>Category:</b> {data.category}</p>
                    <p> <b>Ratings:</b> {data.ratings}</p>
                    <Link to="/browsebook">
                        <button> ↩ Back to Browse Book</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BookDetail;