import { useNavigate } from "react-router-dom";
import { createItem } from "../services/APIFunctions";

export default function Create() {
    const navigate = useNavigate();
    const createAlbum = e => {
        e.preventDefault();
        const newItem = {
            title: e.target.title.value,
            artist: e.target.artist.value,
            year: e.target.year.value,
            genre: e.target.genre.value,
            image: e.target.image.value
        };
        createItem(newItem);
        navigate("/");
    };

    return(
        <div>
            <h4>Add a New Album</h4>
            <form onSubmit={createAlbum}>
                Title: &nbsp; <input type="text" name="title" /> <br/>
                Artist: &nbsp; <input type="text" name="artist" /> <br/>
                Year: &nbsp; <input type="number" name="year" /> <br/>
                Genre: &nbsp; <input type="text" name="genre" /> <br/>
                Image URL: &nbsp; <input type="text" name="image" /> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}