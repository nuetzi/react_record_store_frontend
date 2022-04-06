import { useNavigate } from "react-router-dom";
import { createItem } from "../services/APIFunctions";

export default function Create() {
    const navigate = useNavigate();
    const makeNewItem = e => {
        e.preventDefault();
        const newItem = {
            title: document.querySelector("#title").value,
            artist: document.querySelector("#artist").value,
            year: document.querySelector("#year").value,
            genre: document.querySelector("#genre").value,
            image: document.querySelector("#img").value
        };
        createItem(newItem);
        navigate("/");
    };

    return(
        <div>
            <h4>Add a New Album</h4>
            <form onSubmit={makeNewItem}>
                Title: &nbsp; <input type="text" name="title" id="title"/> <br/>
                Artist: &nbsp; <input type="text" name="artist" id="artist"/> <br/>
                Year: &nbsp; <input type="number" name="year" id="year"/> <br/>
                Genre: &nbsp; <input type="text" name="genre" id="genre"/> <br/>
                Image URL: &nbsp; <input type="text" name="image" id="img"/> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}