import { useState, useEffect } from 'react'

function MovieList() {
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(1)
    const imgUrl = 'https://image.tmdb.org/t/p/w300'
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2EzM2JlZDc2OGUwNGZmMDJlZGUyODhlNmMyYjIxYSIsIm5iZiI6MTczMjc5MTA3OC42OTE4MTc1LCJzdWIiOiI2NzQ4MzMyMjJhNTYyMmIxMDU3MTc5MWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.as_Fmny_qpM_GIx-jHRG0MmdVqMIf8lm_CxWBR-YQSE'
        }
    };



    const fetchMovie = () => {
        const urlPage = url + page
        fetch(urlPage, options)
            .then(res => res.json())
            .then(json => setMovie(json.results))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchMovie(page)
    }, [page])

    const prevPage = () => {
        setPage((prev) => prev - 1)
        console.log(page);
        fetchMovie()
    }
    const nextPage = () => {
        setPage((prev) => prev + 1)
        console.log(page);
        fetchMovie()
    }

    console.log(movie);

    return (
        <div className='container d-flex flex-wrap'>
            {movie.map(film => {
                return <>
                    <div className='filmCard'>
                        <img src={`${imgUrl}${film.poster_path}`} alt="" />
                        <h4>{film.title}</h4>
                    </div>

                </>
            })}
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    )
}

export default MovieList