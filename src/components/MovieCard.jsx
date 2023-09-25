
const MovieCard = ({ movie, deletemovies, setUpdateInfo }) => {
    const handleDelete = () =>{
        deletemovies('/movies', movie.id)
    }

    const handleEdit = () =>{
        setUpdateInfo(movie)
    }
    return (
        <article>
            <h3>#{movie.id} {movie.name}</h3>
            <ul>
                <li><span>Genre:</span><span>{movie.genre}</span></li>
                <li><span>Duration:</span><span>{movie.duration}</span></li>
                <li><span>Release Date:</span><span>{movie.release_date}</span></li>
            </ul>

            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </article>
    )
}

export default MovieCard