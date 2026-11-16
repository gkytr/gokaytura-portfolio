
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "tr";

const translations = {
  tr: {
    navAbout: "Hakkımda",
    navProjects: "Projeler",
    navSkills: "Yetenekler",
    navContact: "İletişim",
    availability: "Yeni fırsatlara açığım",
    role: "Junior Frontend Developer",
    projectsBtn: "Projelerimi İncele",
    contactBtn: "İletişime Geç"
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navSkills: "Skills",
    navContact: "Contact",
    availability: "Open to new opportunities",
    role: "Junior Frontend Developer",
    projectsBtn: "Explore Projects",
    contactBtn: "Get in Touch"
  }
};

function changeLanguage() {
  currentLanguage = currentLanguage === "tr" ? "en" : "tr";

  document.querySelectorAll("[data-language]").forEach((element) => {
    const key = element.dataset.language;
    const translation = translations[currentLanguage][key];

    if (translation) {
      element.textContent = translation;
    }
  });

  languageBtn.textContent = currentLanguage === "tr" ? "EN" : "TR";
  document.documentElement.lang = currentLanguage;
}

if (languageBtn) {
  languageBtn.addEventListener("click", changeLanguage);
}

// Sayfa içi bağlantılarda yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Footer yılını otomatik güncelle
const yearElement = document.getElementById("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
