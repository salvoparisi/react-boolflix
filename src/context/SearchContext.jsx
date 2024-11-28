import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [word, setWord] = useState('');
    return (
        <SearchContext.Provider value={{ word, setWord }}>
            {children}
        </SearchContext.Provider>
    );
}
