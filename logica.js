function direccionarLI(){
    location.href = "https://www.linkedin.com/in/rodrigo-agustin-miguel/";
}

function direccionarWP(){
    location.href = "https://api.whatsapp.com/send?phone=2920546244";
}

function direccionarMail(){
    location.href = "mailto:agusstincho93@gmail.com";
}

function chooseLanguage() {
    var language = prompt("Elija su idioma / Choose your language: \n1. Español \n2. English");

    if (language == "1") {
        window.location.href = "curriculum-ES.html"; // Redirige a la versión en español
    } else if (language == "2") {
        window.location.href = "curriculum-EN.html"; // Redirige a la versión en inglés
    } else {
        alert("Opción no válida / Invalid option");
        chooseLanguage(); // Llama a la función nuevamente si la opción es inválida
    }
}