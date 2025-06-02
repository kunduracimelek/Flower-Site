   const welcomeText = document.querySelector(".hero h1");
    const subText = document.querySelector(".hero p");

    welcomeText.style.opacity = "0"; 
    welcomeText.style.transform = "translateY(-30px)"; 
    subText.style.opacity = "0"; 
    subText.style.transform = "translateY(-30px)";

    setTimeout(() => {
        welcomeText.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        welcomeText.style.opacity = "1";
        welcomeText.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        subText.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        subText.style.opacity = "1";
        subText.style.transform = "translateY(0)";
    }, 2000);


document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll(".product-item").forEach(item => {
    item.addEventListener("mouseover", function() {
        this.style.boxShadow = "0px 6px 8px rgba(0,0,0,0.2)";
    });

    item.addEventListener("mouseout", function() {
        this.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    });
});

function showMeaning(flower, meaning) {
    alert(flower + " anlamı: " + meaning);
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Geçerli bir e-posta adresi girin!");
        return;
    }

    showSuccessMessage(); 

    this.reset(); 
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showSuccessMessage() {
    const successBox = document.createElement("div");
    successBox.innerText = "🎉 Mesajınız başarıyla gönderildi!";
    successBox.className = "success-message";
    document.body.appendChild(successBox);

    setTimeout(() => {
        successBox.style.opacity = "0";
        setTimeout(() => successBox.remove(), 1000);
    }, 3000);
}
