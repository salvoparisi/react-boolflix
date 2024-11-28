import React from 'react';
import Header from './components/Header';
import Search from './components/Search'
import MovieList from './components/MovieList'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <div>
        <Header />
        <Search />
      </div>
      <MovieList />
    </>
  );
}

export default App;

