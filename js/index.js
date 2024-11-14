let profesores= [ 
    {categoria: 2, nombre: "Henry", sexo: "M"},
    {categoria: 4, nombre: "Neyla", sexo: "F"},
    {categoria: 3, nombre: "Dilcia", sexo: "F"},
    {categoria: 3, nombre: "Cesar", sexo: "M"},
    {categoria: 2, nombre: "Giovanni", sexo: "M"},
    {categoria: 2, nombre: "mayibe", sexo: "F"},]

let profesoresCategoria = (profesores, categoria) => {
    let profesoresFiltrados = []
    profesores.forEach(profesor => {
        if(profesor.categoria == categoria) profesoresFiltrados.push(profesor)
    });
return profesoresFiltrados;
}

let salida = document.getElementById("salida")
salida.innerHTML = "datos de los profesores de la categoria 2: <br>"
salida.innerHTML = JSON.stringify(profesoresCategoria(profesores, 2))