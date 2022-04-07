import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, deleteItem } from "../services/APIFunctions";

export default function Show() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [album, setAlbum] = useState({});
    useEffect(() => {
        getItem(id)
        .then(res => setAlbum(res.data))
    }, []);

    const deleteAlbum = () => {
        deleteItem(id);
        navigate("/");
    };

    return(
        <div className="showAlbum">
            <h2>{album.title} </h2>
            <h3>by {album.artist}</h3>
            <h4>Year: {album.year} <br/>
            Genre: {album.genre}</h4>
            <img src={album.image} />
            <br/>
            <br/>
            <button onClick={() => {navigate(`/${id}/edit`)}}>EDIT</button> <br/>
            <br/>
            <button onClick={deleteAlbum}>DELETE</button>
        </div>
    );
}