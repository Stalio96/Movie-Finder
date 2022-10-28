import { useState } from "react";

import MoviesSearch from "../MoviesSearch/MoviesSearch";

const Search = ({
    title
}) => {
    const [isChanged, setIsChanged] = useState(false);

    if (title.length == 0) {
        return
    }

    return (
        <div className="search__results">
            <h1>Search result:</h1>
            <section className="search">

                <MoviesSearch movies={title.results} isChanged={isChanged} setIsChanged={setIsChanged} />
            </section>
        </div>
    )
}

export default Search;