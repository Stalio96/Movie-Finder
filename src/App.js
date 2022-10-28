import './App.css';

import { useState } from 'react';

import Option from './components/Option/Options';
import Search from './components/Search/Search';

const path = 'http://api.themoviedb.org/3/search/movie?query=';
const authentication = '&api_key=';
const apiKey = 'edcbd11ea4f19cca35aa6276567d7e9f';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState([]);
  let titles = '';
  let oneTitle = '';

  const onSearch = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const search = formData.get('search');

    oneTitle = search.trim();

    if (oneTitle == '') {
      return
    }

    const response = await fetch(`${path}${oneTitle}${authentication}${apiKey}`);

    const result = await response.json();

    setSearchResult(result)
  }

  const onChange = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const file = formData.get('file');

    titles = await file.text();

    titles = titles.split(', ');

    setTitle(titles);
  }

  return (
    <div className="App">
      <header className='header'>
        <h1>Movie Finder</h1>
        <form onSubmit={onSearch}>
          <input type="search" name="search" placeholder='search..' />
          <input type="submit" value="search" className='search__btn' />
        </form>
      </header>

      <form onChange={onChange} className="form">
        <input name="file" type="file" className="custom__file__input" />
      </form>

      <Option titles={title} searchResult={searchResult} setSearchResult={setSearchResult} />

      <Search title={searchResult} setTitle={setSearchResult} />
    </div>
  );
}

export default App;
