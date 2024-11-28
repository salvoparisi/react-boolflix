import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/SearchContext';

function Search() {
    const { word } = useContext(SearchContext);
    const [movie, setMovie] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w300';

    const fetchMovie = () => {
        if (!word) return;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=43a33bed768e04ff02ede288e6c2b21a&query=${word}`;

        fetch(url)
            .then((res) => res.json())
            .then((json) => setMovie(json.results))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchMovie();
    }, [word]);

    return (
        <>
            {word === "" ? (
                <span></span> // Mostra un elemento vuoto se `word` è vuoto
            ) : (
                <>
                    <h2 className='text-center'>Stai cercando</h2>
                    <div className="container d-flex flex-wrap justify-content-between">
                        {movie.map((film) => (
                            <div className="filmCard" key={film.id}>
                                <div className="imgContainer">
                                    <img src={`${imgUrl}${film.poster_path}`} alt={film.title} />
                                </div>
                                <h4>{film.title}</h4>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );

}





export default Search;
