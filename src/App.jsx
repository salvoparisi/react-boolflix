import React from 'react';
import Header from './components/Header';
import Search from './components/SearchList'
import MovieList from './components/MovieList'
import "bootstrap/dist/css/bootstrap.min.css"
import SearchBtn from './components/SearchBtn.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

function App() {

  return (
    <>
      <SearchProvider>
        <div className='d-flex justify-content-between p-3 nav bg-black'>
          <Header />
          <SearchBtn />
        </div>
        <div className='bg-black text-white'>
          <MovieList />
        </div>

      </SearchProvider>
    </>
  );
}

export default App;

