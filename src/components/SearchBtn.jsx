import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

function SearchBtn() {
    const { word, setWord } = useContext(SearchContext);

    return (
        <input
            type="text"
            className="my-1 bg-black text-white border border-white"
            placeholder="Cerca..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
        />
    );
}

export default SearchBtn;
