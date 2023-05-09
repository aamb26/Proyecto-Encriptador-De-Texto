function copiar() {
    let fuente=document.getElementById("resultado")
    fuente.select();
    document.execCommand("copy")
    
}
function borrarTodo() {
    document.getElementById("escribir_mensaje").value = "";
    document.getElementById("resultado").value = "";
}