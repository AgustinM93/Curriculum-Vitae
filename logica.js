function chooseLanguage(language) {
    if (language === 'es') {
        window.location.href = "cv-es.html"; // Redirige a la versión en español
    } else if (language === 'en') {
        window.location.href = "cv-en.html"; // Redirige a la versión en inglés
    }
}

function direccionarLI(){
    location.href = "https://www.linkedin.com/in/rodrigo-agustin-miguel/";
}

function direccionarWP(){
    location.href = "https://api.whatsapp.com/send?phone=2920546244";
}

function direccionarMail(){
    location.href = "mailto:agusstincho93@gmail.com";
}

function descargarCV(bo){
    const element = bo;

            // Configuración de html2pdf
            const options = {
                margin: 0,
                filename: 'RodrigoAgustinMiguelCV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
            };

            // Genera y descarga el PDF
            html2pdf().from(element).set(options).save();
}