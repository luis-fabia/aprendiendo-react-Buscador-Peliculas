import { useState } from 'react'
import './App.css'
import { Buscador } from './componentes/Buscando'
import type { Pelicula, } from './types/Pelicula'
import { buscarPeliculas } from './services/peliculas'
import { ListadePeliculas } from './componentes/ListadePeliculas'

function App() {

  const [peliculas, setPeliculas] = useState<Pelicula[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const buscar = async (termino: string) => {

    try {
      setLoading(true)
      setError("")
      setPeliculas([])
      const resultado = await buscarPeliculas(termino)   
      setPeliculas(resultado.Search)
      console.log(resultado)

    }
    catch (e) {
      setError("Error en la peticion")
      console.log(e)
    }

    finally {
      setLoading(false)

    }

  }






  return (
    <>
      <Buscador
        Buscar={buscar}

      />

      <h2>{loading && "Buscando Peliculas... "}</h2>
      <h2>{error && <p>{error}</p>}</h2>

   
      {peliculas.map((valor) => (
        <ListadePeliculas
          key={valor.imdbID}
          año={valor.Year}
          type={valor.Type}
          titulo={valor.Title}
          poster={valor.Poster}
        />
      ))}




    </>
  )
}

export default App
