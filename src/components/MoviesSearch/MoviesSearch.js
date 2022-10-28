const MoviesSearch = ({
    movies,
    setIsChanged,
    isChanged
}) => {
    if (movies.length == 0) {
        return;
    }
    let change = [];

    return (
        <>
            <div className="movie">
                {
                    movies.map((m, index) => {
                        const id = m.id;

                        const deleteMovie = () => {
                            const indexOf = movies.findIndex(object => {
                                return object.id === id;
                            });

                            change = movies.splice(indexOf, 1)
                            setIsChanged(!isChanged);
                        }

                        return (
                            <div key={m.id} className="movie__card">
                                <div className="cross__icon" onClick={deleteMovie}>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                {m.poster_path
                                    ? <div className="movie__img">
                                        <img src={`http://image.tmdb.org/t/p/w500/${m.poster_path}`} />
                                    </div>
                                    : <div className="movie__img">
                                        <p>No photo.</p>
                                    </div>
                                }
                                <div className="movie__info">
                                    {m.title
                                        ? <h2>Title: {m.title}</h2>
                                        : null
                                    }
                                    {m.actors
                                        ? <p>Actors: {m.actors}</p>
                                        : null
                                    }
                                    {m.genres
                                        ? <p>Genres: {m.genres}</p>
                                        : null
                                    }
                                    {m.release_date
                                        ? <p>Release: {m.release_date}</p>
                                        : null
                                    }
                                    {m.popularity
                                        ? <p>Popularity: {m.popularity}</p>
                                        : null
                                    }
                                    {m.vote_average
                                        ? <p>Vote: {m.vote_average}</p>
                                        : null
                                    }
                                    {m.director
                                        ? <p>Director: {m.director}</p>
                                        : null
                                    }
                                    {m.overview
                                        ? <p>Overview: {m.overview}</p>
                                        : null
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MoviesSearch;