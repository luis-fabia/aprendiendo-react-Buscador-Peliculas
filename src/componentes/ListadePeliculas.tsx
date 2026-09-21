export function ListadePeliculas({ año, type, titulo, poster, favorito }) {
  return (
    <>
      <img src={poster} alt={titulo} />

      <h2>Título: {titulo}</h2>
      <h2>Tipo: {type}</h2>
      <h2>Año: {año}</h2>
      { favorito ? 
        <button> Favorito ✓ </button> 
        : 
        <button>Favotiro X </button>
      } 
    </>
  )
}