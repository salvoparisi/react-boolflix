import { useContext, useState, useEffect } from 'react'
import Search from './SearchList'
import { SearchContext } from '../context/SearchContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

    const getStars = (vote) => {
        const starCount = Math.round(vote / 2);
        return [...Array(starCount)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
        ));
    };


    return (
        <>
            <Search />
            {word === "" ? (
                <>
                    <h2 className='text-center'>In tendenza</h2>
                    <div className='container d-flex flex-wrap justify-content-around'>
                        {movie.map(film => {
                            return <>
                                <div className='filmCard position-relative'>
                                    <div className='imgContainer'>
                                        <img src={`${imgUrl}${film.poster_path}`} alt="" />
                                    </div>
                                    <h4>{film.title}</h4>
                                    <div className='info position-absolute p-3'>
                                        <p>title: {film.title}</p>
                                        <p>original title: {film.original_title}</p>
                                        <p>overview: {film.overview}</p>
                                        <p>language: {film.original_language}</p>
                                        <p>Vote: {getStars(film.vote_average)}</p>
                                    </div>
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