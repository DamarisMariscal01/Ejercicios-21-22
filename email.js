let persona = {
    nombre: "Damaris",
    apellido: "Mariscal",
    edad: 13
}

let tresLetras = persona["apellido"].slice(0,3);
console.log(persona["nombre"] + "_" + tresLetras + persona["edad"] + "@micorreo.com");