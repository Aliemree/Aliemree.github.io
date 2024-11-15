document.addEventListener("DOMContentLoaded", function () {
    // "Daha Fazla Gör/Daha Az Gör" Buton İşlevi
    const toggleButton = document.getElementById("toggle-bio");
    const extraBio = document.getElementById("extra-bio");

    if (toggleButton && extraBio) {
        toggleButton.addEventListener("click", function () {
            if (extraBio.classList.contains("hidden")) {
                extraBio.classList.remove("hidden");
                toggleButton.textContent = "Daha Az Gör";
            } else {
                extraBio.classList.add("hidden");
                toggleButton.textContent = "Daha Fazla Gör";
            }
        });
    }

    // Dinamik Saat ve Selamlama Mesajı
    const saatElementi = document.getElementById("saat");
    const welcomeMessage = document.getElementById("welcome-message");

    if (saatElementi && welcomeMessage) {
        function updateTime() {
            const now = new Date();
            const hour = now.getHours();

            if (hour >= 4 && hour < 12) {
                welcomeMessage.innerText = "Günaydın! Hoş Geldiniz!";
            } else if (hour >= 12 && hour < 18) {
                welcomeMessage.innerText = "İyi Günler! Hoş Geldiniz!";
            } else {
                welcomeMessage.innerText = "İyi Akşamlar! Hoş Geldiniz!";
            }

            saatElementi.innerText = `Şu anki saat: ${now.toLocaleTimeString()}`;
        }

        setInterval(updateTime, 1000);
        updateTime();
    }

    // Bölümlerin Görünürlük Animasyonu
    const sections = document.querySelectorAll("section");

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        sectionObserver.observe(section);
    });
});
//Bölümün daha fazla göster kodu
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.show-more-btn');
    const hiddenText = document.querySelector('.hidden-text');

    if (toggleButton && hiddenText) {
        toggleButton.addEventListener('click', () => {
            if (hiddenText.classList.contains('active')) {
                hiddenText.classList.remove('active');
                toggleButton.textContent = 'Daha Fazla Gör';
            } else {
                hiddenText.classList.add('active');
                toggleButton.textContent = 'Daha Az Gör';
            }
        });
    } else {
    }
});
//projeleri filtreleme ekranı
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            projects.forEach(project => {

                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
//iletişim ekranı kodu
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Lütfen tüm alanları doldurun.");
                return;
            }

            alert(`Teşekkürler ${name}, mesajınız başarıyla gönderildi!`);
            form.reset();
        });
    } else {
        console.error("Form bulunamadı. Lütfen formun HTML'de mevcut olduğundan emin olun.");
    }
});
