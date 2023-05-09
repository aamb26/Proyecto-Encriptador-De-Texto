// Función para aplicar el tema actual
function cambiarTema() {
    const tema = localStorage.getItem('tema');
  
    if (tema === 'oscuro') {
      localStorage.setItem('tema', 'claro');
    } else {
      localStorage.setItem('tema', 'oscuro');
    }
  
    aplicarTema();
  }
  
  function aplicarTema() {
    var tema = localStorage.getItem('tema');
  
    if (tema === 'oscuro') {
      document.getElementById("claro").disabled = true;
      document.getElementById("oscuro").disabled = false;
    } else {
      document.getElementById("claro").disabled = false;
      document.getElementById("oscuro").disabled = true;
    }
  }
  
  aplicarTema();
  