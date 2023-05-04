function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco  = document.getElementById("muñeco");
    let textoCifrado = texto
                        .replace(/a/gi, "ai")
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    
    if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/skyrim3.png";
     }else{
        muñeco.src = "./img/skyrim-2.png";
        tituloMensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("debes ingresar un texto");
     }
}