import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";

function BrowseBook() {

    const Books = useSelector((state) => state.Form); 
    const [search, setSearch] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);

    const param = useParams();

    useEffect(() => {
        if (param.category) {
            const data = Books.filter((book) => book.category === param.category);
            setFilteredBooks(data)
        }
    }, [param.category]);

    function handleSearch() {
        if (param.category == null) {
            const filterbook = Books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
            setFilteredBooks(filterbook);
        }
        else {
            const filterbook = Books.filter((book) => book.category === param.category && book.title.toLowerCase().includes(search.toLowerCase()))
            setFilteredBooks(filterbook);
        }
    }

    return (
        <>
            <div className="browsebookdiv">
                <h2>Select Category</h2>
                <ul>
                    <Link to="/browsebook/Fiction"><li>Fiction</li></Link>
                    <Link to="/browsebook/Classic"><li>Classic</li></Link>
                    <Link to="/browsebook/Mystery"><li>Mystery</li></Link>
                    <Link to="/browsebook/Sci-Fi"><li>Sci-Fi</li></Link>
                </ul>
            </div>
            <div className="browseinputdiv">
                <input type="text" placeholder="search book" onChange={(e) => setSearch(e.target.value)} className="browseinput" />
                <button onClick={handleSearch} className="browsebutton">Search</button>
            </div>
            <div className="browsediv">
                {
                    filteredBooks.map((book) => (
                        <div key={book.id} >
                            <img src={book.coverImage} width="300px" height="300px"></img><br />
                            <p><b>{book.title}</b></p>
                            <Link to={`/bookDetail/${book.id}`} key={book.id}>
                                <button>More Detail</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BrowseBook;