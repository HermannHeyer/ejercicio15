let nombre ="Hermann";
let apellido = "Heyer";
const persona = {
    nombre_persona : nombre,
    apellido_persona : apellido
}

sessionStorage.setItem("persona", JSON.stringify(persona))
localStorage.setItem("persona", JSON.stringify(persona))

console.log(sessionStorage.getItem("persona"))

document.cookie = "NombreCookie=GorkaCookie"
document.cookie = "NombreCaducidad=Nombre;expires="+ new Date(2022,9,3).toUTCString()
console.log(document.cookie);