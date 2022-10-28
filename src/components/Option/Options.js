import { useState } from "react";
import Movies from "../Movies/Movies";

const Option = ({
    titles
}) => {
    const [movies, setMovies] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [movieTitle, setMovieTitle] = useState([]);
    const titleArray = [];
    const movieArray = [];

    if (titles?.length == 0) {
        return
    }

    const path = 'http://api.themoviedb.org/3/search/movie?query=';
    const authentication = '&api_key=';
    const apiKey = 'edcbd11ea4f19cca35aa6276567d7e9f';


    const onSave = (e) => {
        e.preventDefault();

        console.log(movies)
    }


    const onPreview = async (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);

        for (const element of titles) {
            const checked = formData.get(element);

            if (!checked) {
                continue;
            }

            const response = await fetch(`${path}${checked}${authentication}${apiKey}`);

            const result = await response.json();

            titleArray.push(checked);

            movieArray.push(result.results);
        }


        setMovies(movieArray)
        setMovieTitle(titleArray)
    }

    return (
        <>
            <form onSubmit={onPreview} className="form">
                {
                    titles.map((x, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" name={x} id={x} value={x} />
                                <label htmlFor={x}>{x}</label>
                            </div>
                        )
                    })
                }
                <input type="submit" value="Preview" className="preview__btn" />
            </form>
            <section className="movie__results">
                <form onSubmit={onSave} className="preview__form">
                    {
                        movies.map((m, index) => {
                            return (
                                <Movies movies={m} setMovies={setMovies} key={index} setToggle={setToggle} toggle={toggle} movieTitle={movieTitle} index={index} />
                            )
                        })
                    }
                    {movies
                        ? <input type="submit" value="Save" className="save custom-file-input" />
                        : null
                    }

                </form>
            </section>
        </>
    )
}

export default Option;