import { useState, useEffect } from 'react'

function MovieList() {
    const [movie, setMovie] = useState([])
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=43a33bed768e04ff02ede288e6c2b21a&query=matrix';

    const fetchMovie = () => {
        fetch(url)
            .then(res => res.json())
            .then(json => setMovie(json.results))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMovie()
    }, [])


    console.log(movie);

    return (
        <div>
            {movie.map(film => {
                return <img src={`${url}${film.poster_path}`} alt="" />
            })}
        </div>
    )
}

export default MovieList