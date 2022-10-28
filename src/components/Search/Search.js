import { useState } from "react";

import MoviesSearch from "../MoviesSearch/MoviesSearch";

const Search = ({
    title,
    setSearchResult
}) => {
    const [toggle, setToggle] = useState(false);

    console.log(title.results)

    if (title.length == 0) {
        return
    }

    return (
        <>
            <h1>Result: </h1>
            {/* {
                title.results.map((m, index) => {
                    return ( */}
                        <MoviesSearch movies={title.results} toggle={toggle} setToggle={setToggle} />
                    {/* )
                })
            } */}
        </>
    )
}

export default Search;