
const translations = {
    tr: {
        navHome: "Ana Sayfa",
        navAbout: "Hakkımda",
        navSkills: "Beceriler",
        navProjects: "Projeler",
        navContact: "İletişim",

        availability: "Yeni fırsatlara açığım",
        heroGreeting: "Merhaba, ben",
        heroTitle: "Junior Frontend Developer",
        heroDescription: "Kullanıcı dostu, modern ve işlevsel web arayüzleri geliştirmeye odaklanan bir yazılım geliştirici adayıyım.",
        heroButton: "Projelerimi Gör",
        contactButton: "İletişime Geç",

        aboutHeading: "Hakkımda",
        aboutTitle: "Teknolojiye olan ilgimi<br>üretmeye dönüştürüyorum.",
        aboutText: "Akdeniz Üniversitesi Yönetim Bilişim Sistemleri mezunuyum. Web geliştirme alanında kendimi geliştiriyor, HTML, CSS ve JavaScript kullanarak kullanıcıların günlük ihtiyaçlarına yönelik projeler oluşturuyorum.",
        aboutText2: "Öğrenmeye açık, araştırmacı ve çözüm odaklı bir yaklaşımla frontend geliştirme alanında kariyer hedefliyorum. Amacım gerçek projelerde yer alarak teknik becerilerimi geliştirmek ve değer üreten ürünler ortaya çıkarmak.",
        educationLabel: "Eğitim",
        educationDetail: "Yönetim Bilişim Sistemleri",
        locationLabel: "Konum",
        workPreference: "Uzaktan / Hibrit / Ofis",

        skillsHeading: "Teknik Beceriler",
        skillsDescription: "Kullandığım teknolojiler ve geliştirmeye devam ettiğim alanlar.",
        skillHtml: "Semantik HTML ve sayfa yapısı",
        skillCss: "Responsive tasarım ve stil düzenleme",
        skillJs: "DOM, event ve temel uygulama mantığı",
        skillGit: "Versiyon kontrolü ve proje yönetimi",
        skillSql: "Temel veritabanı sorguları",
        skillReact: "Öğrenme aşamasında",

        projectsHeading: "Öne Çıkan Projeler",
        projectsDescription: "Öğrendiklerimi pratiğe dönüştürdüğüm çalışmalar.",
        projectDescription: "KDV, yaş, indirim ve yüzde hesaplama araçları sunan kullanıcı dostu bir hesaplama web sitesi.",
        liveDemo: "Canlı Demo ↗",
        projectTwoTitle: "Stok Yönetim Paneli",
        projectTwoDescription: "Ürün, stok ve satış verilerinin takip edilebildiği bir yönetim paneli projesi.",
        inProgress: "Geliştirme planında",


        contactLabel: "İletişim",
        contactHeading: "Birlikte bir şeyler<br>geliştirelim.",
        contactDescription: "Yeni fırsatlara, iş birliklerine ve kendimi geliştirebileceğim projelere açığım. Benimle iletişime geçebilirsin.",

        footerText: "Tüm hakları saklıdır.",
        backToTop: "Yukarı çık ↑"
    },

    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",

        availability: "Open to new opportunities",
        heroGreeting: "Hello, I'm",
        heroTitle: "Junior Frontend Developer",
        heroDescription: "An aspiring developer focused on building modern, functional, and user-friendly web interfaces.",
        heroButton: "View My Projects",
        contactButton: "Get in Touch",

        aboutHeading: "About Me",
        aboutTitle: "Turning my interest in<br>technology into creation.",
        aboutText: "I am a Management Information Systems graduate from Akdeniz University. I am developing my skills in web development and building projects with HTML, CSS, and JavaScript to solve everyday user needs.",
        aboutText2: "I aim to build a career in frontend development with a curious, research-oriented, and solution-focused mindset. My goal is to improve my technical skills through real-world projects and create products that deliver value.",
        educationLabel: "Education",
        educationDetail: "Management Information Systems",
        locationLabel: "Location",
        workPreference: "Remote / Hybrid / On-site",

        skillsHeading: "Technical Skills",
        skillsDescription: "Technologies I use and areas I continue to develop.",
        skillHtml: "Semantic HTML and page structure",
        skillCss: "Responsive design and styling",
        skillJs: "DOM, events, and basic application logic",
        skillGit: "Version control and project management",
        skillSql: "Basic database queries",
        skillReact: "Currently learning",

        projectsHeading: "Featured Projects",
        projectsDescription: "Projects where I turn what I learn into practice.",
        projectDescription: "A user-friendly calculation website featuring VAT, age, discount, and percentage calculators.",
        liveDemo: "Live Demo ↗",
        projectTwoTitle: "Inventory Management Dashboard",
        projectTwoDescription: "A planned dashboard project for tracking products, inventory, and sales data.",
        inProgress: "Planned project",

        contactLabel: "Contact",
        contactHeading: "Let's build something<br>together.",
        contactDescription: "I am open to new opportunities, collaborations, and projects where I can continue to grow. Feel free to get in touch.",

        footerText: "All rights reserved.",
        backToTop: "Back to top ↑"
    }
};

let currentLanguage = "tr";

const languageButton = document.getElementById("language-btn");

function changeLanguage() {
    currentLanguage = currentLanguage === "tr" ? "en" : "tr";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const translatedText = translations[currentLanguage][key];

        if (translatedText) {
            element.innerHTML = translatedText;
        }
    });

    languageButton.textContent = currentLanguage === "tr" ? "EN" : "TR";

    document.documentElement.lang = currentLanguage;
}

languageButton.addEventListener("click", changeLanguage);


// Mobile menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Automatic footer year

document.getElementById("year").textContent = new Date().getFullYear();
