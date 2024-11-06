import { useDispatch } from "react-redux";
import { addItem } from "../utils/formSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function AddBook() {

    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddBook(data, e) {
        e.preventDefault();
        const Data = {
            id: Math.ceil(Math.random()* 10)* 20,
            ...data
        }
        dispatch(addItem(Data));
        navigate('/browsebook');
    }

    return (
        <>
            <div className="addBookDiv">
                <h1>Add Book</h1>
                <form action="" onSubmit={handleSubmit(handleAddBook)} className="formDiv">
                    <label> Title of Book: 
                        <input type="text" placeholder="Title" required {...register("title")} ></input>
                    </label><br />
                    <label> Author of the Book:
                        <input type="text" placeholder="Author" required {...register("author")} ></input>
                    </label><br />
                    <label> Published Date:
                        <input type="date" placeholder="Published Year" {...register("publishedDate")} ></input>
                    </label><br />
                    <label> Select Category:
                        <select {...register("category")} placeholder="select category" required>
                            <option value="">Select...</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Classic">Classic</option>
                            <option value="Mystery">Mystery</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                    </label><br />
                    <label> Description of book:
                        <input type="text" placeholder="Description of book" required {...register("description")} ></input>
                    </label><br />
                    <label> Enter Image Url:
                        <input type="text" placeholder="Image url" {...register("coverImage")} required ></input>
                    </label><br />
                    <label> Ratings*:
                        <input type="number" min="1" max="5" placeholder="Ratings" required {...register("ratings")} ></input>
                    </label><br/>
                    <button type="submit">Submit Book</button>
                </form>
            </div>
        </>
    )
}

export default AddBook;