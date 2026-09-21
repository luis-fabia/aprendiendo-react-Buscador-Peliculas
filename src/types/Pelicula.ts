export interface Pelicula {
    Title: string
    Year: string
    Type: string
    Poster: string
    imdbID: string
}

export interface RespuestaPeliculas {
    Search: Pelicula[]
    totalResults: string
    Response: string
}
