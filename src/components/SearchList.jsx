import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const apikey = import.meta.env.VITE_REACT_APP_API_KEY;
    const { word } = useContext(SearchContext);
    const [movie, setMovie] = useState([]);
    const [series, setSeries] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w300';

    const fetchMovie = () => {
        if (!word) return;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${word}`;
        console.log(url);

        fetch(url)
            .then((res) => res.json())
            .then((json) => setMovie(json.results))
            .catch((err) => console.error(err));
    };

    const fetchSeries = () => {
        if (!word) return;
        const url = `https://api.themoviedb.org/3/search/tv?api_key=${apikey}&language=it_IT&query=${word}`;
        console.log(url);

        fetch(url)
            .then((res) => res.json())
            .then((json) => setSeries(json.results))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchMovie();
        fetchSeries();
    }, [word]);

    // Funzione per calcolare il numero di stelle da mostrare
    const getStars = (vote) => {
        const starCount = Math.round(vote / 2); // Scala da 0 a 5 stelle
        return [...Array(starCount)].map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
        ));
    };

    return (
        <>
            {word === "" ? (
                <span></span>
            ) : (
                <>
                    <h2 className='text-center'>Stai cercando</h2>
                    <h3 className='text-center'>Films</h3>
                    <div className="container d-flex flex-wrap justify-content-around">
                        {movie.length === 0 ? (
                            <h3>Film non trovato</h3>
                        ) : (
                            movie.map((film) => (
                                <div className="filmCard position-relative" key={film.id}>
                                    <div className="imgContainer">
                                        <img src={`${imgUrl}${film.poster_path}`} alt={film.title} />
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
                            ))
                        )}
                    </div>
                    <h3 className='text-center'>Serie TV</h3>
                    <div className="container d-flex flex-wrap justify-content-around">
                        {series.length === 0 ? (
                            <h3>Serie non trovate</h3>
                        ) : (
                            series.map((film) => (
                                <div className="filmCard position-relative" key={film.id}>
                                    <div className="imgContainer">
                                        <img src={`${imgUrl}${film.poster_path}`} alt={film.title} />
                                    </div>
                                    <h4>{film.name}</h4>
                                    <div className='info position-absolute p-3'>
                                        <p>title: {film.name}</p>
                                        <p>original title: {film.original_name}</p>
                                        <p>overview: {film.overview}</p>
                                        <p>language: {film.original_language}</p>
                                        <p>Vote: {getStars(film.vote_average)}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </>
    );
}

export default Search;
