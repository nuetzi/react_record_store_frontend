import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editItem, getItem } from "../services/APIFunctions";

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [album, setAlbum] = useState({});

    useEffect(() => {
        getItem(id)
        .then(res => setAlbum(res.data))
    }, []);

    const editAlbum = e => {
        e.preventDefault();
        const updatedAlbum = {
            title: e.target.title.value,
            artist: e.target.artist.value,
            year: e.target.year.value,
            genre: e.target.genre.value,
            image: e.target.image.value
        };
        editItem(id, updatedAlbum);
        navigate(`/${id}`);
    };

    return(
        <div>
            <h2>Edit Album</h2>
            <form onSubmit={editAlbum}>
                Title: &nbsp; <input type="text" name="title" defaultValue={album.title} /> <br/>
                Artist: &nbsp; <input type="text" name="artist" defaultValue={album.artist} /> <br/>
                Year: &nbsp; <input type="number" name="year" defaultValue={album.year} /> <br/>
                Genre: &nbsp; <input type="text" name="genre" defaultValue={album.genre} /> <br/>
                Image URL: &nbsp; <input type="text" name="image" defaultValue={album.image} /> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}