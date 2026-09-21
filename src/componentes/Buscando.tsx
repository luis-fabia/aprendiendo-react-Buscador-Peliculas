import { useState } from "react";

export function Buscador({ Buscar }) {

    const [input, setInput] = useState("")

    return (
        <>
            <h2>Buscador de Peliculas</h2>
            <input type="text" placeholder="Buscador"
                onChange={(e) => setInput(e.target.value)}
                value={input}

            />

            <button type="button" onClick={() => Buscar(input)}>
                Buscar
            </button>
        </>


    );
}