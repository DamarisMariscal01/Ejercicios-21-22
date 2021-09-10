function pasoPag1(){
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("pagLogin").style.display="block";
}

function irLogin(){
    document.getElementById("pagRegistro").style.display="none";
    document.getElementById("pagLogin").style.display="block";
}

//información para Login
let infoLogin = {
    user: "damarisAlive",
    contrasena: "damaris123"
}

//Inicio de sesión
function loginn(){
    let tomarUsername = document.getElementById("user").value;
    let tomarContrasena = document.getElementById("contrasena").value;

    if (tomarUsername==infoLogin.user && tomarContrasena==infoLogin.contrasena) {
        document.getElementById("pagLogin").style.display="none";
        document.getElementById("pagInfo").style.display="block";
        alert("Es correcto, bienvenidx, " +  document.getElementById("nombre").value + " :)")
        
        
    } else {
        alert("Incorrecto, inténtalo de nuevo");
        // LIMPIAR RESPUESTAS ANTERIORES
        document.getElementById("user").value = "";
        document.getElementById("contrasena").value = "";
    }
}

//function saldo(){
 //   if }