import './App.css';

import { useState } from 'react';

import Option from './components/Option/Options';

function App() {
  const [title, setTitle] = useState([]); 
  let titles = '';

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const file = formData.get('file');

    titles = await file.text();

    titles = titles.split(', ');

    setTitle(titles);
  }

  return (
    <div className="App">
      <header className='header'>Movie Finder</header>

      <form onSubmit={onSubmit}>
        <input name="file" type="file" />
        <input type="submit" />
      </form>


      <Option titles={title} />
    </div>
  );
}

export default App;
