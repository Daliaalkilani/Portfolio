// ========================================
// LOCALIZATION DATA
// ========================================

const translations = {
    en: {
        // Meta
        site_title: "Dalia Al-Kilani | AI & Robotics Engineer",
        meta_description: "Portfolio of Dalia Al-Kilani - Software Engineer, Robotics Coach, Tech Content Creator, and AI Designer from Hama, Syria.",

        // Navigation
        nav_about: "About",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Computer Engineering • Hama, Syria",
        hero_title: "Dalia Al-Kilani",
        hero_subtitle: "Software Engineer & Robotics Coach",
        hero_desc: "Tech Content Creator and AI Designer passionate about Arduino, Machine Learning, and innovative solutions.",
        btn_watch: "Watch My Videos",
        btn_contact: "Contact Me",

        // About
        section_about: "About Me",
        about_bio: "Information Engineering student, Tech Content Creator, and Robotics enthusiast passionate about Arduino and AI-powered innovation. I create educational tech content, mentor young makers, and contribute to robotics initiatives through competitions, coaching, and prototyping projects. My goal is to simplify complex technologies and inspire the next generation of innovators.",
        
        // Education
        edu_title: "Education",
        edu_degree: "Bachelor’s Degree, Computer Engineering",
        edu_uni: "Al-Wataniya Private University",
        edu_date: "Oct 2021 – Jul 2026",
        edu_grade: "Grade: 82% (≈ 3.09 GPA)",
        edu_desc: "Coursework: Machine Learning, AI, NLP, Data Structures, DB Systems, Software Engineering.",

        // Experience
        section_exp: "Experience",
        exp_1_title: "Robotics Coach",
        exp_1_org: "Sanad Youth • Oct 2024 - Nov 2024",
        exp_1_desc: "Guided 4 teams through project design, 3D modeling, and prototyping. Achieved 2nd place overall nationally in RFG Teens.",
        exp_2_title: "Technical Support",
        exp_2_org: "TechTide Expo • Oct 2024",
        exp_2_desc: "Showcased robotics, computer vision, and interactive tech projects. Provided technical support for robotic systems.",
        exp_3_title: "Competitor",
        exp_3_org: "RFG Youth • Sep 2023 - Dec 2023",
        exp_3_desc: "Team CAPTCHA PHOBIA, 3rd place nationally. Designed a robotics prototype addressing agricultural challenges (pistachio pest control).",

        // Projects
        section_projects: "Projects",
        proj_1_title: "Bidirectional Sign-Language Translator",
        proj_1_org: "Feb 2025 – Jul 2025",
        proj_1_desc: "AI-based system for real-time translation between sign language and spoken Arabic using MediaPipe, OpenCV, Random Forest, and interactive GUI.",
        proj_2_title: "AI Content Creator",
        proj_2_org: "Clapital • Jan 2026 - Mar 2026",
        proj_2_desc: "Created AI-generated visual content, applied prompt engineering for short-form content generation and storytelling.",
        proj_3_title: "Online Mentor",
        proj_3_org: "Fathee Robotics • Jan 2026",
        proj_3_desc: "Mentored teenagers for interactive robotics challenges at ملتقى روبوتات الفتاتيح, providing online technical support.",

        // Videos
        section_videos: "Instagram Showcase",
        watch_instagram: "Watch on Instagram",

        // Contact
        section_contact: "Get In Touch",
        label_name: "Name",
        label_email: "Email",
        label_message: "Message",
        btn_send: "Send Message",
        footer_rights: "All Rights Reserved.",

        // Alt text
        alt_hero: "Dalia Al-Kilani Avatar",
        alt_exp1: "RFG Teens 2024",
        alt_exp2: "TechTide Expo",
        alt_exp3: "RFG Youth 2023",
        alt_proj1: "Sign Language Translator",
        alt_proj2: "AI Content Creator",
        alt_proj3: "Online Mentor",

        loader_text: "Loading..."
    },
    ar: {
        // Meta
        site_title: "داليا الكيلاني | مهندسة ذكاء اصطناعي وروبوتكس",
        meta_description: "معرض أعمال داليا الكيلاني - مهندسة برمجيات، مدربة روبوتات، صانعة محتوى تقني، ومصممة ذكاء اصطناعي من حماة، سوريا.",

        // Navigation
        nav_about: "عني",
        nav_exp: "الخبرات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل معي",

        // Hero
        hero_badge: "هندسة حواسيب • حماة، سوريا",
        hero_title: "داليا الكيلاني",
        hero_subtitle: "مهندسة برمجيات ومدربة روبوتات",
        hero_desc: "صانعة محتوى تقني ومصممة ذكاء اصطناعي شغوفة بالأردوينو، تعلم الآلة، والحلول المبتكرة.",
        btn_watch: "شاهد المحتوى",
        btn_contact: "تواصل معي",

        // About
        section_about: "عني",
        about_bio: "طالبة هندسة معلوماتية، صانعة محتوى تقني، وشغوفة بالروبوتات وتطوير الابتكارات باستخدام الأردوينو والذكاء الاصطناعي. أصنع محتوى تقني تعليمي، أرشد الصناع الشباب، وأساهم في مبادرات الروبوتات من خلال المسابقات والتدريب ومشاريع النمذجة. هدفي تبسيط التقنيات المعقدة وإلهام الجيل القادم من المبتكرين.",
        
        // Education
        edu_title: "التعليم",
        edu_degree: "إجازة في الهندسة المعلوماتية",
        edu_uni: "الجامعة الوطنية الخاصة",
        edu_date: "أكتوبر 2021 – يوليو 2026",
        edu_grade: "المعدل: 82%",
        edu_desc: "تعلم الآلة، الذكاء الاصطناعي، معالجة اللغات الطبيعية، هياكل البيانات، قواعد البيانات، هندسة البرمجيات.",

        // Experience
        section_exp: "الخبرات",
        exp_1_title: "مدربة روبوتات",
        exp_1_org: "سند الشباب • أكتوبر - نوفمبر 2024",
        exp_1_desc: "تدريب 4 فرق على تصميم المشاريع، النمذجة ثلاثية الأبعاد، وتطوير الروبوتات. الحصول على المركز الثاني وطنيًا.",
        exp_2_title: "دعم فني",
        exp_2_org: "معرض TechTide • أكتوبر 2024",
        exp_2_desc: "عرض مشاريع الروبوتات والرؤية الحاسوبية والتقنيات التفاعلية وتقديم الدعم الفني لها.",
        exp_3_title: "مشاركة",
        exp_3_org: "RFG الشباب • سبتمبر - ديسمبر 2023",
        exp_3_desc: "فريق CAPTCHA PHOBIA، المركز الثالث وطنيًا. تطوير روبوت للزراعة المستدامة (مكافحة آفة الكابنوديس).",

        // Projects
        section_projects: "المشاريع",
        proj_1_title: "مترجم لغة الإشارة ثنائي الاتجاه",
        proj_1_org: "فبراير – يوليو 2025",
        proj_1_desc: "نظام قائم على الذكاء الاصطناعي للترجمة الفورية بين لغة الإشارة واللغة العربية المنطوقة باستخدام MediaPipe, OpenCV, Random Forest مع واجهة تفاعلية.",
        proj_2_title: "صانعة محتوى بالذكاء الاصطناعي",
        proj_2_org: "Clapital • يناير - مارس 2026",
        proj_2_desc: "إنتاج محتوى مرئي وتطبيق هندسة الأوامر لإنشاء المحتوى القصير وسرد القصص المبتكر.",
        proj_3_title: "مرشدة عبر الإنترنت",
        proj_3_org: "الروبوت فتحي • يناير 2026",
        proj_3_desc: "إرشاد اليافعين في ملتقى روبوتات الفتاتيح عبر الإنترنت وتقديم الدعم الفني في التحديات التفاعلية للروبوتات.",

        // Videos
        section_videos: "محتوى إنستغرام",
        watch_instagram: "شاهد على إنستغرام",

        // Contact
        section_contact: "تواصل معي",
        label_name: "الاسم",
        label_email: "البريد الإلكتروني",
        label_message: "الرسالة",
        btn_send: "إرسال الرسالة",
        footer_rights: "جميع الحقوق محفوظة.",

        // Alt text
        alt_hero: "شخصية داليا الكيلاني",
        alt_exp1: "RFG يافعين 2024",
        alt_exp2: "معرض TechTide",
        alt_exp3: "RFG الشباب 2023",
        alt_proj1: "مترجم لغة الإشارة",
        alt_proj2: "صانعة محتوى ذكاء اصطناعي",
        alt_proj3: "مرشدة أونلاين",

        // Preloader
        loader_text: "جاري التحميل..."
    }
};

// ========================================
// STATE MANAGEMENT
// ========================================

let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeLanguage();
    initializeEventListeners();
    initializeAnimations();
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 2200); // Waits for the loading bar animation to finish
    }
});

// ========================================
// THEME MANAGEMENT
// ========================================

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeBtn = document.getElementById('theme-toggle');
    const icon = themeBtn.querySelector('i');

    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ========================================
// LANGUAGE MANAGEMENT
// ========================================

function initializeLanguage() {
    applyLanguage(currentLang);
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'META') {
                element.content = translations[lang][key];
            } else if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'A' && element.children.length > 0) {
                // Keep the icon inside anchor tags if any
                const icon = element.querySelector('i');
                element.textContent = translations[lang][key] + ' ';
                if(icon) element.appendChild(icon);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });

    const langBtn = document.getElementById('lang-toggle');
    const langCode = langBtn.querySelector('.lang-code');
    if(langCode) langCode.textContent = lang === 'en' ? 'AR' : 'EN';
}

// ========================================
// EVENT LISTENERS
// ========================================

function initializeEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

// ========================================
// FORM HANDLING
// ========================================

function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert(currentLang === 'en' ? 'Please fill in all fields.' : 'يرجى ملء جميع الحقول.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(currentLang === 'en' ? 'Please enter a valid email.' : 'يرجى إدخال بريد إلكتروني صحيح.');
        return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:Daliaalkelani@gmail.com?subject=${subject}&body=${body}`;

    alert(currentLang === 'en'
        ? 'Thank you! Your email client will open to send the message.'
        : 'شكراً! سيتم فتح برنامج البريد الإلكتروني لإرسال الرسالة.');

    e.target.reset();
}

// ========================================
// MOBILE MENU
// ========================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ========================================
// ANIMATIONS
// ========================================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .service-card, .video-card, .about-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});
