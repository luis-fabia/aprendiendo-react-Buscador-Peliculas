export function ListadePeliculas({ año, type, titulo, poster }) {
  return (
    <>
      <img src={poster} alt={titulo} />

      <h2>Título: {titulo}</h2>
      <h2>Tipo: {type}</h2>
      <h2>Año: {año}</h2>
    </>
  )
}