window.onload = () => {
    console.log("Página cargada");
    letra()
    iniciarJuego();
    reiniciar();
};

function letra(){
// Obtén el elemento <ul> por su id
const ulElement = document.getElementById("letter-list");
    
// Array de letras del abecedario
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Agrega las letras al elemento <ul>
for (let i = 0; i < alphabet.length; i++) {
    // Crea un elemento <li>
    const liElement = document.createElement("li");

    // Asigna el contenido de texto a la letra correspondiente
    liElement.textContent = alphabet[i];

    // Agrega el elemento <li> al elemento <ul>
    ulElement.appendChild(liElement);
}
}

const palabrasAleatorias = [
    "manzana",
    "banana",
    "chocolate",
    "desarrollador",
    "elefante",
    "fantástico",
    "guitarra",
    "felicidad",
    "independencia",
    "jazz",
    "canguro",
    "risa",
    "montaña",
    "cuaderno",
    "océano",
    "pingüino",
    "quokka",
    "arco iris",
    "fresa",
    "tigre",
    "paraguas",
    "victoria",
    "sandía",
    "xilófono",
    "ayer",
    "zeppelin",
    "danielillo",
];

let palabraSecreta;
let palabraAdivinada = [];
let intentosRestantes = 10;

function iniciarJuego() {
    
    // Selecciona una palabra aleatoria
    palabraSecreta = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];

    // Inicializa la palabra adivinada
    palabraAdivinada = new Array(palabraSecreta.length).fill("_");

    // Reinicia los intentos restantes
    intentosRestantes = 10;

    // Actualiza la pantalla
    actualizarPantalla();

    // Agrega manejadores de eventos a las letras del abecedario
    const letrasAbecedario = document.querySelectorAll("#letter-list li");
    document.addEventListener("keypress", (e) =>{
        manejarIntento(e.key);
        cambiarColorFondo(e);

    });
    letrasAbecedario.forEach(letra => {
        letra.addEventListener("click", () => {
            manejarIntento(letra.textContent);
            cambiarColorFondo(letra);
        });
    });
}

function cambiarColorFondo(elemento) {
    // Cambia el fondo de color del elemento al hacer clic
    elemento.style.backgroundColor = "lightblue";
}
function cambiarColorFondo(elemento) {
    // Cambia el fondo de color del elemento al hacer clic
    elemento.style.backgroundColor = "lightblue";
}
function actualizarPantalla() {
    // Actualiza la palabra adivinada en la pantalla
    const palabraDisplay = document.getElementById("word-display");
    palabraDisplay.textContent = palabraAdivinada.join(" ");

    // Actualiza los intentos restantes en la pantalla
    const intentosDisplay = document.getElementById("guesses-left");
    intentosDisplay.textContent = intentosRestantes;

    // Verifica si el jugador ha ganado o perdido
    if (intentosRestantes === 0) {
        palabraDisplay.textContent = "Perdiste. La palabra era: " + palabraSecreta;
    } else if (!palabraAdivinada.includes("_")) {
        palabraDisplay.textContent = "¡Ganaste!";
    }
}

function manejarIntento(letra) {
    if (intentosRestantes > 0) {
        // Comprueba si la letra está en la palabra secreta
        if (palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    palabraAdivinada[i] = letra;
                }
            }
        } else {
            intentosRestantes--;
        }

        // Actualiza la pantalla
        actualizarPantalla();
    }
}

function reiniciar(){
// Obtén el elemento del botón "Jugar de Nuevo"
const resetButton = document.getElementById("reset-button");
const letrasAbecedario = document.querySelectorAll("#letter-list li");

// Agrega un manejador de eventos al botón "Jugar de Nuevo"
resetButton.addEventListener("click", () => {
    iniciarJuego();
    letrasAbecedario.forEach(letra => {
        letra.style.backgroundColor = "aquamarine";

            
        }); // Llama a la función iniciarJuego para reiniciar el juego
});

}