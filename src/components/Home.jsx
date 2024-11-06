import { Books } from "../utils/mockData";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {

  const filteredBooks = Books.filter((book) => (book.ratings >= 4.5));
  
  return (
    <>
      <div className="welcome-div">
        <div className="welcome-div-img"></div>
        <div className="welcome-div-text">
          <h3>Welcome</h3>
          <p>Hello, Welcome to a world of endless possibilities. Explore our selection of books and services crafted to enrich your life.</p>
        </div>
      </div>
      <div className="book-categories-div">
        <h2>Book Categories</h2>
        <ul>
          <Link to="/browsebook/Fiction"><li>Fiction</li></Link>
          <Link to="/browsebook/Classic"><li>Classic</li></Link>
          <Link to="/browsebook/Mystery"><li>Mystery</li></Link>
          <Link to="/browsebook/Sci-Fi"><li>Sci-Fi</li></Link>
        </ul>
      </div>
      <div className="popular-books-div">
        <h2>Popular Books</h2>
        {
          filteredBooks.map((book) => (
            <>
              <ul key={book.id}>
                <li>
                  <Link to={`/bookDetail/${book.id}`} key={book.id}>
                    <img src={book.coverImage} width="300px" height="300px"></img><br />
                    <p><b>Title: {book.title}</b></p>
                    <button>More Detail</button>
                  </Link>
                </li>
              </ul>
            </>
          ))
        }
      </div>
    </>
  )
}

export default Home;