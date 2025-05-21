document.addEventListener("DOMContentLoaded", function () {
    // Initialize all features
    initTimeAndGreeting();
    initHiddenTextToggle();
    initProjectFilters();
    initContactForm();
    initSectionAnimations();
    initSkillsAnimation();

    // Dinamik Saat ve Selamlama Mesajı
    function initTimeAndGreeting() {
        const saatElementi = document.getElementById("saat");
        const welcomeMessage = document.getElementById("welcome-message");

        if (saatElementi && welcomeMessage) {
            function updateTime() {
                const now = new Date();
                const hour = now.getHours();
                const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

                if (hour >= 5 && hour < 12) {
                    welcomeMessage.innerText = "Günaydın! Hoş Geldiniz!";
                } else if (hour >= 12 && hour < 18) {
                    welcomeMessage.innerText = "İyi Günler! Hoş Geldiniz!";
                } else {
                    welcomeMessage.innerText = "İyi Akşamlar! Hoş Geldiniz!";
                }

                saatElementi.innerText = `Şu anki saat: ${now.toLocaleTimeString('tr-TR', options)}`;
            }

            setInterval(updateTime, 1000);
            updateTime();
        }
    }

    // "Daha Fazla Gör/Daha Az Gör" Buton İşlevi
    function initHiddenTextToggle() {
        const toggleButton = document.querySelector('.show-more-btn');
        const hiddenText = document.querySelector('.hidden-text');

        if (toggleButton && hiddenText) {
            toggleButton.addEventListener('click', () => {
                hiddenText.classList.toggle('active');
                toggleButton.textContent = hiddenText.classList.contains('active') ? 'Daha Az Gör' : 'Daha Fazla Gör';
                
                // Smooth scroll to view the expanded content if active
                if (hiddenText.classList.contains('active')) {
                    setTimeout(() => {
                        hiddenText.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            });
        }
    }

    // Projeleri filtreleme işlevi
    function initProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-item');

        if (filterButtons.length && projects.length) {
            // Add active class to 'all' button by default
            const allButton = document.querySelector('.filter-btn[data-filter="all"]');
            if (allButton) allButton.classList.add('active');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons and add to clicked button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filter = button.getAttribute('data-filter');

                    projects.forEach(project => {
                        // Use opacity transition for smoother filtering
                        const projectCategory = project.getAttribute('data-category');
                        if (filter === 'all' || (projectCategory && projectCategory.includes(filter))) {
                            project.style.opacity = '0';
                            project.style.transform = 'scale(0.8)';
                            
                            setTimeout(() => {
                                project.style.display = 'block';
                                setTimeout(() => {
                                    project.style.opacity = '1';
                                    project.style.transform = 'scale(1)';
                                }, 50);
                            }, 200);
                        } else {
                            project.style.opacity = '0';
                            project.style.transform = 'scale(0.8)';
                            
                            setTimeout(() => {
                                project.style.display = 'none';
                            }, 200);
                        }
                    });
                });
            });
        }
    }

    // İletişim formu işlevi
    function initContactForm() {
        const form = document.getElementById("contact-form");

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();

                // Basic form validation
                if (!name || !email || !message) {
                    showFormError("Lütfen tüm alanları doldurun.");
                    return;
                }

                // Basic email validation
                if (!validateEmail(email)) {
                    showFormError("Lütfen geçerli bir e-posta adresi girin.");
                    return;
                }

                // Show success message
                showFormSuccess(name);
                form.reset();
            });
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function showFormError(message) {
            const errorElement = document.getElementById("form-error");
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = "block";
                
                setTimeout(() => {
                    errorElement.style.opacity = "0";
                    setTimeout(() => {
                        errorElement.style.display = "none";
                        errorElement.style.opacity = "1";
                    }, 500);
                }, 3000);
            } else {
                alert(message);
            }
        }

        function showFormSuccess(name) {
            const successElement = document.getElementById("form-success");
            if (successElement) {
                successElement.textContent = `Teşekkürler ${name}, mesajınız başarıyla gönderildi!`;
                successElement.style.display = "block";
                
                setTimeout(() => {
                    successElement.style.opacity = "0";
                    setTimeout(() => {
                        successElement.style.display = "none";
                        successElement.style.opacity = "1";
                    }, 500);
                }, 3000);
            } else {
                alert(`Teşekkürler ${name}, mesajınız başarıyla gönderildi!`);
            }
        }
    }

    // Bölümlerin Görünürlük Animasyonu
    function initSectionAnimations() {
        const sections = document.querySelectorAll("section");

        if (sections.length) {
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
        }
    }

    // Skills animation for home page
    function initSkillsAnimation() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        if (skillItems.length) {
            const animateSkills = (entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Stagger the animations
                        setTimeout(() => {
                            entry.target.style.opacity = "1";
                            entry.target.style.transform = "translateY(0)";
                        }, index * 200);
                        
                        observer.unobserve(entry.target);
                    }
                });
            };

            const skillsObserver = new IntersectionObserver(animateSkills, {
                root: null,
                threshold: 0.1,
            });

            skillItems.forEach((skill, index) => {
                skill.style.opacity = "0";
                skill.style.transform = "translateY(30px)";
                skill.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                skillsObserver.observe(skill);
            });
        }
    }
});
