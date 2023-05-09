function ejecutar() {
    const texto = document.getElementById('escribir_mensaje').value;
    const resultado = document.getElementById('resultado');
    const botonEncriptar = document.getElementById('radio_encriptar');
    const botonDesenncriptar = document.getElementById('radio_desencriptar');
    if (botonEncriptar.checked) {
        resultado.value = encriptar(texto);
        resultado.textContent = encriptar(texto);

    } if (botonDesenncriptar.checked) {
        resultado.value = desencriptar(texto);
        resultado.textContent = desencriptar(texto);
    }
}

function encriptar(texto) {
    if (/([A-ZÁ-Ú])|([á-ú])|([0-9])|([!-/])|([:-@])|([\[-\\'])|([{-¥])/g.test(texto)) {
        return resultado.textContent = "Solo se permiten letras minúsculas";
    }

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    return textoEncriptado;
}


function desencriptar(textoEncriptado) {
    if (/([A-ZÁ-Ú])|([á-ú])|([0-9])|([!-/])|([:-@])|([\[-\\'])|([{-¥])/g.test(textoEncriptado)) {
      return "Solo se permiten letras minúsculas";
    }
    
    let textoDesencriptado = textoEncriptado
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    return textoDesencriptado;
  }

