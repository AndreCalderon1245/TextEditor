// FullScreen Function
document.getElementById("fullscreen-btn").addEventListener("click", function () {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});

// Reset Function

document.getElementById("reset-btn").addEventListener("click", function () {
    document.getElementById("editor").innerHTML = "";
});

// Save Function

document.getElementById("save-btn").addEventListener("click", function() {
    // Obtener el contenido del editor
    var content = document.getElementById("editor").innerText;
    
    // Crear un objeto Blob
    var file = new Blob([content], {type: "text/plain;charset=utf-8"});
    
    // Crear un enlace de descarga
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = document.getElementById("name-editor").value + ".txt";
    
    // Agregar el enlace al DOM y hacer clic en él para descargar el archivo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// API Spellcheck

    // Obtener el elemento 'editor'
const editor = document.getElementById('editor');

// Agregar un evento 'input' al elemento 'editor'
editor.addEventListener('input', function() {
  // Verificar si el elemento 'editor' es editable
  if (editor.getAttribute('contenteditable') === 'true') {
    // Obtener el texto del elemento 'editor'
    const text = editor.innerText;
    // Separar el texto en un array de palabras
    const words = text.split(/\s+/);
    // Iterar sobre cada palabra
    words.forEach(word => {
      // Verificar si la palabra está correctamente escrita
      if (!spellcheck.check(word)) {
        // Si la palabra está mal escrita, subrayarla con un color rojo
        editor.innerHTML = editor.innerHTML.replace(new RegExp(`\\b${word}\\b`, 'g'), `<span style="color:red">${word}</span>`);
      }
    });
  }
});

function printDiv() {
    var contenido = document.getElementById('editor').innerHTML;
    var contenidoOriginal= document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}

const redoButton = document.getElementById('redo-btn');
const undoButton = document.getElementById('undo-btn');

redoButton.addEventListener('click', () => {
  document.execCommand('redo');
});

undoButton.addEventListener('click', () => {
  document.execCommand('undo');
});

