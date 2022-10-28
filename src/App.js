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

    oneTitle = search;

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
          <input type="search" name="search" />
          <input type="submit" value="search" />
        </form>
      </header>

      <form onChange={onChange} className="form">
        <input name="file" type="file" className="custom-file-input" />
        {/* <input type="submit" /> */}
      </form>

      <Search title={searchResult} setTitle={setSearchResult} />

      <Option titles={title} />
    </div>
  );
}

export default App;
