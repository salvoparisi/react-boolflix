import { useEffect, useContext } from "react";
import { useState } from "react";

function Browse() {
    const [movie, setMovie] = useState([])
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2EzM2JlZDc2OGUwNGZmMDJlZGUyODhlNmMyYjIxYSIsIm5iZiI6MTczMjc5MTA3OC42OTE4MTc1LCJzdWIiOiI2NzQ4MzMyMjJhNTYyMmIxMDU3MTc5MWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.as_Fmny_qpM_GIx-jHRG0MmdVqMIf8lm_CxWBR-YQSE'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => setMovie(json.results))
        .catch(err => console.error(err));





    return (
        <div>
            {movie.map(film => {

            })}
        </div>
    )
}

export default Browse