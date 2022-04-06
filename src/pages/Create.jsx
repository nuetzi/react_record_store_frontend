import { useNavigate } from "react-router-dom";
import { createItem } from "../services/APIFunctions";

export default function CreateItem() {
    const navigate = useNavigate();
    const makeNewItem = e => {
        e.preventDefault();
        const newItem = {
            title: document.querySelector("#title").value,
            artist: document.querySelector("#artist").value,
            year: document.querySelector("#year").value,
            genre: document.querySelector("#genre").value,
            image: document.querySelector("#image").value
        };
        createItem(newItem);
        navigate("/");
    };

    return(
        <div>
            <h4>Add a New Album</h4>
            <form onSubmit={makeNewItem}>
                Title: &nbsp; <input type="text" name="title" /> <br/>
                Artist: &nbsp; <input type="text" name="artist" /> <br/>
                Year: &nbsp; <input type="text" name="year" /> <br/>
                Genre: &nbsp; <input type="text" name="genre" /> <br/>
                Image URL: &nbsp; <input type="text" name="image" /> <br/>
            </form>
        </div>
    );
}