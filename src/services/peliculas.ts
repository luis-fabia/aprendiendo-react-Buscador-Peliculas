import type { RespuestaPeliculas } from '../types/Pelicula'

export async function buscarPeliculas(termino: string): Promise<RespuestaPeliculas> {

    const url = `https://www.omdbapi.com/?s=${termino}&apikey=21132962`

    const responde = await fetch(url)
    if (!responde.ok) {
        throw new Error("Error en la peticion")
    }

    const json = await responde.json()

    if (json.Response === "False") {
        throw new Error("Error en la peticion")
    }

    return json



}   