import { useState, useEffect } from "react";
import { getIndex } from "../services/APIFunctions";

export default function Index() {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        getIndex()
        .then(res => setAlbum(res.data))
    }, []);

    return(
        <div>
            <h2>All Albums</h2>
            <div className="albumContainer">
                {album.map((each, i) => {
                    return(
                        <div className="albumsDisplay" key={i}>
                            <a href={`/${each._id}`}><h3>{each.title}</h3></a>
                            <h4>Artist: {each.artist} <br/>
                            Year: {each.year} <br/>
                            Genre: {each.genre}</h4>
                            <img src={each.image} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}