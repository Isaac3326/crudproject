import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './assets/hooks/useFetch'
import FormMovies from './components/FormMovies'
import MovieCard from './components/MovieCard'


function App() {

const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://movies-crud-2.academlo.tech'
  const [movies, getMovies, creatMovies, deletemovies, updateMovies] = useFetch(baseUrl)

  useEffect(() => {
    getMovies('/movies')

  }, [])



  return (
    <div>
      <h1>Crud</h1>
      <FormMovies
        creatMovies={creatMovies}
        updateInfo={updateInfo}
        updateMovies={updateMovies}
        setUpdateInfo={setUpdateInfo}
      />
      <div>
        {
          movies?.map(movie => (
            <MovieCard
            key={movie.id}
            movie={movie}
            deletemovies={deletemovies}
            setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
