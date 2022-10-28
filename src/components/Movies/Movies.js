const Movies = ({
    movies,
    setToggle,
    toggle,
    movieTitle,
    index
}) => {
    if (movies.length == 0) {
        return;
    }

    let change = [];

    return (
        <>
            <h1>{movieTitle[index]}</h1>
            <div className="movie">
                {
                    movies.map((m, index) => {
                        const id = m.id;

                        const deleteMovie = () => {
                            const indexOf = movies.findIndex(object => {
                                return object.id === id;
                            });

                            change = movies.splice(indexOf, 1)
                            setToggle(!toggle);
                        }

                        return (
                            <div key={m.id} className="movie__card">
                                <div className="cross__icon" onClick={deleteMovie}>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="movie__img">
                                    <img src={`http://image.tmdb.org/t/p/w500/${m.poster_path}`} />
                                </div>
                                <div className="movie__info">
                                    <h2>{m.title}</h2>
                                    <p>{m.overview}</p>
                                    <p>{m.actors}</p>
                                    <p>{m.genres}</p>
                                    <p>{m.release_date}</p>
                                    <p>{m.popularity}</p>
                                    <p>{m.vote_average}</p>
                                    {m.director
                                        ? <p>Director{m.director}</p>
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

export default Movies;