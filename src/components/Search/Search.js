import { useState } from "react";

import MoviesSearch from "../MoviesSearch/MoviesSearch";

const Search = ({
    title
}) => {
    const [toggle, setToggle] = useState(false);

    console.log(title.results)

    if (title.length == 0) {
        return
    }

    return (
        <>
            <h1>Result:</h1>
            <section className="search">

                <MoviesSearch movies={title.results} toggle={toggle} setToggle={setToggle} />
            </section>
        </>
    )
}

export default Search;