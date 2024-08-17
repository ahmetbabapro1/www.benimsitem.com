// Sayfayı İngilizce Yap
document.getElementById("translate-button").addEventListener("click", function() {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage.textContent === "Hoş Geldiniz") {
        welcomeMessage.textContent = "Welcome";
        this.textContent = "Switch to Turkish";
    } else {
        welcomeMessage.textContent = "Hoş Geldiniz";
        this.textContent = "Sayfayı İngilizce Yap";
    }
});

// Karanlık Moda Geç
document.getElementById("dark-mode-button").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "Açık Moda Geç" : "Karanlık Moda Geç";
});
