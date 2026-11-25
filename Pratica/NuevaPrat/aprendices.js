// funcione que dibuja la tabla (Recibe el Objeto)

function renderizar(aprendiz){
    let filas = "";

    for (const [clave, valor] of Object.entries(aprendiz)) {
        const contenido = (valor === ""|| valor === null || valor === undefined );
        ? "<em>sin datos</em>"
        : valor;

        filas += `
            <tr>
                <th>${clave}</th>
                <td>${contenido}</td>
            </tr>
        `;
    }

    document.getElementById("salida").innerHTML=
        <table border="1" cellPadding="6" style="borde-collapse: collapse;">
            <thead>
                <tr><th>Campo</th><th>Valor</th></tr>
                </thead>
                <tbody>${filas}</tbody>
            </table>
    `;
}

