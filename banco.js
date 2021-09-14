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
    user: "lol",
    contrasena: "1234"
}

//Inicio de sesión
function loginn(){
    let tomarUsername = document.getElementById("user").value;
    let tomarContrasena = document.getElementById("contrasena").value;

    if (tomarUsername==infoLogin.user && tomarContrasena==infoLogin.contrasena) {
        document.getElementById("pagLogin").style.display="none";
        document.getElementById("pagInfo").style.display="block";
        alert("Es correcto, bienvenidx, " +  document.getElementById("user").value + " :)")
        
        
    } else {
        alert("Incorrecto, inténtalo de nuevo");
        // LIMPIAR RESPUESTAS ANTERIORES
        document.getElementById("user").value = "";
        document.getElementById("contrasena").value = "";
    }
}

//Volver a pantalla de inicio
function back(){
    document.getElementById("saldoActual").style.display="none";
    document.getElementById("ingresarAhorrar").style.display="none";
    document.getElementById("retirarQuitar").style.display="none";
    document.getElementById("pagInfo").style.display="block";
}

//Consultar Saldo Actual
function saldo(){
    let saldoo = document.getElementById("saldooo").innerHTML;
    document.getElementById("pagInfo").style.display="none";
    document.getElementById("saldoActual").style.display="block";
}

function ahorrar(){
    //let ahorroo = document.getElementById("").value;
    document.getElementById("pagInfo").style.display="none";
    document.getElementById("ingresarAhorrar").style.display="block";

    let cien = document.getElementById("mas100")
    let quinientos = document.getElementById("mas500").value
    let mil = document.getElementById("mas1000").value
    let cincoMil = document.getElementById("mas5000").value
    let diezMil = document.getElementById("mas10000").value

    function sumas(){

    }
}

function quitar(){
    //let quitoo = document.getElementById("").value;
    document.getElementById("pagInfo").style.display="none";
    document.getElementById("retirarQuitar").style.display="block"
}