document.addEventListener("DOMContentLoaded", function() {
    
    const kartuAli = document.querySelector(".tilt-box");

    if (kartuAli) {
        VanillaTilt.init(kartuAli, {
            max: 20,           // Batas kemiringan maksimal (derajat)
            speed: 400,        // Kecepatan respon balik kartu
            glare: true,       // Mengaktifkan kilauan cahaya pas miring
            "max-glare": 0.3,  // Terang kilauan cahaya
            scale: 1.05        // Kartu membesar sedikit saat di-hover mouse
        });
    }
});