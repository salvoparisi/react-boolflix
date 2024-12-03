import { useContext, useState, useEffect } from 'react'
import Search from './SearchList'
import { SearchContext } from '../context/SearchContext'

function MovieList() {
    const auth = import.meta.env.VITE_REACT_APP_AUTH
    const { word } = useContext(SearchContext)
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(1)
    const imgUrl = 'https://image.tmdb.org/t/p/w300'
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${auth}`
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

        fetchMovie()
    }
    const nextPage = () => {
        setPage((prev) => prev + 1)

        fetchMovie()
    }



    return (
        <>
            <Search />
            {word === "" ? (
                <>
                    <h2 className='text-center'>In tendenza</h2>
                    <div className='container d-flex flex-wrap justify-content-around'>
                        {movie.map(film => {
                            return <>
                                <div className='filmCard'>
                                    <div className='imgContainer'>
                                        <img src={`${imgUrl}${film.poster_path}`} alt="" />
                                    </div>
                                    <h4>{film.title}</h4>
                                </div>

                            </>
                        })}
                    </div>
                    <div className="w-100 d-flex justify-content-between container pb-5">
                        {page == 1 ? (
                            <span></span>
                        ) : (
                            <button className='btn btn-danger' onClick={prevPage}>prev</button>
                        )}
                        <button className='btn btn-danger' onClick={nextPage}>next</button>
                    </div>

                </>

            ) : <span></span>}
        </>
    )
}

export default MovieList