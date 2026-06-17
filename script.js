// ========================================
// LOCALIZATION DATA
// ========================================

const translations = {
    en: {
        // Meta
        site_title: "Dalia Al-Kilani | AI & NLP Engineer",
        meta_description: "Portfolio of Dalia Al-Kilani - AI/NLP Engineer specializing in Arabic language models, robotics, and embedded systems.",

        // Navigation
        nav_resume: "Resume",
        btn_resume: "View Resume",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_awards: "Awards",
        nav_contact: "Contact",

        // Hero
        hero_badge: "Computer Engineering • Hama, Syria",
        hero_title: "Dalia Al-Kilani",
        hero_subtitle: "AI / NLP Engineer",
        hero_desc: "Specializing in Arabic language models — fine-tuning AraBERT & MARBERT and deploying end-to-end ML systems across NLP and computer vision.",
        btn_watch: "Watch My Videos",
        btn_contact: "Contact Me",

        // About
        section_about: "About Me",
        about_bio: "AI/NLP Engineer specializing in Arabic language models — fine-tuning AraBERT and MARBERT and deploying them into production environments. I build end-to-end ML systems across NLP and computer vision, from data preprocessing to model training and API deployment. I also mentor young makers in robotics and embedded systems, and create tech content that simplifies AI and inspires the next generation of innovators.",

        // Skills
        skills_title: "Core Competencies",
        comp_nlp: "Natural Language Processing",
        comp_ml: "Machine Learning",
        comp_deploy: "Model Deployment",
        comp_prog: "Programming",
        comp_data: "Data Processing",
        comp_cv: "Computer Vision",
        comp_embedded: "Embedded Systems",
        comp_genai: "Generative AI & Prompting",
        comp_mentor: "Mentoring & Training",

        // Education
        edu_title: "Education",
        edu_degree: "Bachelor's Degree, Computer Engineering",
        edu_uni: "Al-Wataniya Private University",
        edu_date: "Oct 2021 – Jul 2026",
        edu_grade: "GPA: 82% (≈ 3.09)",
        edu_desc: "Relevant coursework: Natural Language Processing; Machine Learning; Embedded Systems.",

        // Experience
        section_exp: "Experience",
        exp_1_title: "Robotics Coach",
        exp_1_org: "Sanad Youth Organization • Oct 2024 – Nov 2024",
        exp_1_b1: "Implemented sensor integration and control systems using Arduino and external sensors for competition-ready robotics platforms.",
        exp_1_b2: "Mentored participants in embedded systems design and firmware troubleshooting.",
        exp_1_b3: "Delivered hands-on workshops on system integration, testing procedures, and competition readiness.",

        exp_2_title: "Online Mentor",
        exp_2_org: "Fathee The Robot • Jan 2026",
        exp_2_b1: "Mentored teenagers in robotics fundamentals and competition preparation.",
        exp_2_b2: "Provided technical guidance and online support during robotics activities.",
        exp_2_b3: "Conducted virtual sessions to support learning and feedback.",
        exp_2_b4: "Contributed to a community initiative focused on robotics education and youth engagement.",

        exp_3_title: "RFG Youth — Team Member",
        exp_3_org: "Sanad Youth Organization • Sep 2023 – Dec 2023",
        exp_3_b1: "Designed and built an embedded robotics prototype for pest detection using microcontrollers and environmental sensors.",
        exp_3_b2: "Integrated Arduino-based hardware with sensors and control components.",
        exp_3_b3: "Validated system performance through real-world testing and technical demonstrations.",

        volunteering_tag: "Volunteering",
        vol_1_title: "Technical Support",
        vol_1_org: "TechTide Expo • Oct 2024",
        vol_1_b1: "Led live robotics demonstrations showcasing sensor integration and control systems.",
        vol_1_b2: "Translated embedded system concepts into step-by-step troubleshooting explanations for event visitors.",

        vol_2_title: "AI Content Creator",
        vol_2_org: "Clapital • Jan 2026 – Mar 2026",
        vol_2_b1: "Produced short-form AI-generated video content and refined prompts to increase creative consistency.",
        vol_2_b2: "Aligned AI content and prompt strategies with marketing campaign objectives.",

        // Projects
        section_projects: "Projects",
        proj_1_title: "NLP Text Classification System",
        proj_1_b1: "Fine-tuned AraBERT and MARBERT on an annotated Arabic dataset for multi-class classification of university inquiries.",
        proj_1_b2: "Designed a stratified 5-fold evaluation protocol to validate model stability.",
        proj_1_b3: "Deployed as a production REST API using FastAPI for real-time inference.",

        proj_2_title: "Arabic Sign Language Translator",
        proj_2_b1: "Built a real-time bidirectional translation system between sign language and speech using Python.",
        proj_2_b2: "Implemented hand tracking using MediaPipe and OpenCV; trained Random Forest classifiers for gesture recognition.",
        proj_2_b3: "Integrated speech-to-text and text-to-speech; developed a full GUI using CustomTkinter.",

        proj_3_title: "Tasharok Platform",
        proj_3_b1: "Built a full-stack peer-to-peer marketplace MVP for renting, swapping, and donating community resources.",
        proj_3_b2: "Used React + Tailwind CSS for the frontend and Laravel for backend authentication, APIs, and core marketplace logic.",

        // Awards
        section_awards: "Honors & Awards",
        award_1_title: "Honorable Mention",
        award_1_org: "ICPC Africa & Arab Girls Contest",
        award_2_title: "3rd Place",
        award_2_org: "RFG Youth Robotics Competition",
        award_3_title: "2nd Place",
        award_3_org: "RFG Teens Robotics Competition",
        award_4_title: "3rd Place",
        award_4_org: "Startup Weekend Hama",

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

        // Alt
        alt_hero: "Dalia Al-Kilani",
        loader_text: "Loading..."
    },

    ar: {
        // Meta
        site_title: "داليا الكيلاني | مهندسة ذكاء اصطناعي ومعالجة لغات",
        meta_description: "معرض أعمال داليا الكيلاني - مهندسة ذكاء اصطناعي ومعالجة لغات طبيعية متخصصة في النماذج العربية والروبوتيكس.",

        // Navigation
        nav_resume: "السيرة الذاتية",
        btn_resume: "عرض السيرة الذاتية",
        nav_exp: "الخبرات",
        nav_projects: "المشاريع",
        nav_awards: "الجوائز",
        nav_contact: "تواصل معي",

        // Hero
        hero_badge: "هندسة حواسيب • حماة، سوريا",
        hero_title: "داليا الكيلاني",
        hero_subtitle: "مهندسة ذكاء اصطناعي / معالجة لغات طبيعية",
        hero_desc: "متخصصة في النماذج اللغوية العربية — ضبط دقيق لـ AraBERT وMARBERT ونشرها في بيئات الإنتاج، وبناء أنظمة ML شاملة.",
        btn_watch: "شاهد المحتوى",
        btn_contact: "تواصل معي",

        // About
        section_about: "عني",
        about_bio: "مهندسة ذكاء اصطناعي ومعالجة لغات طبيعية متخصصة في النماذج اللغوية العربية — ضبط دقيق لـ AraBERT وMARBERT ونشرها في بيئات الإنتاج. أبني أنظمة ML شاملة عبر معالجة اللغات والرؤية الحاسوبية، من معالجة البيانات إلى تدريب النماذج ونشر الـ API. كما أُرشد الصناع الشباب في الروبوتيكس والأنظمة المضمنة، وأنشئ محتوى تقنياً يُبسّط الذكاء الاصطناعي.",

        // Skills
        skills_title: "الكفاءات الأساسية",
        comp_nlp: "معالجة اللغة الطبيعية",
        comp_ml: "تعلم الآلة",
        comp_deploy: "نشر النماذج",
        comp_prog: "البرمجة",
        comp_data: "معالجة البيانات",
        comp_cv: "الرؤية الحاسوبية",
        comp_embedded: "الأنظمة المضمنة",
        comp_genai: "الذكاء الاصطناعي التوليدي",
        comp_mentor: "التدريب والإرشاد",

        // Education
        edu_title: "التعليم",
        edu_degree: "إجازة في الهندسة المعلوماتية",
        edu_uni: "الجامعة الوطنية الخاصة",
        edu_date: "أكتوبر 2021 – يوليو 2026",
        edu_grade: "المعدل: 82% (≈ 3.09)",
        edu_desc: "مواد ذات صلة: معالجة اللغة الطبيعية؛ تعلم الآلة؛ الأنظمة المضمنة.",

        // Experience
        section_exp: "الخبرات",
        exp_1_title: "مدربة روبوتات",
        exp_1_org: "منظمة سند الشباب • أكتوبر – نوفمبر 2024",
        exp_1_b1: "تطبيق أنظمة دمج الحساسات والتحكم باستخدام Arduino للمنصات الروبوتية.",
        exp_1_b2: "إرشاد المشاركين في تصميم الأنظمة المضمنة واستكشاف أخطاء البرامج.",
        exp_1_b3: "تقديم ورش عمل تطبيقية حول تكامل الأنظمة والاستعداد للمسابقات.",

        exp_2_title: "مرشدة عبر الإنترنت",
        exp_2_org: "الروبوت فتحي • يناير 2026",
        exp_2_b1: "إرشاد المراهقين في أساسيات الروبوتيكس والتحضير للمسابقات.",
        exp_2_b2: "تقديم التوجيه التقني والدعم الإلكتروني خلال الأنشطة الروبوتية.",
        exp_2_b3: "إجراء جلسات افتراضية لدعم التعلم وتقديم الملاحظات.",
        exp_2_b4: "المساهمة في مبادرة مجتمعية تهتم بتعليم الروبوتيكس للشباب.",

        exp_3_title: "عضو فريق — RFG Youth",
        exp_3_org: "منظمة سند الشباب • سبتمبر – ديسمبر 2023",
        exp_3_b1: "تصميم وبناء نموذج روبوت مضمن للكشف عن الآفات باستخدام متحكمات دقيقة وحساسات بيئية.",
        exp_3_b2: "دمج أجهزة Arduino مع الحساسات ومكونات التحكم.",
        exp_3_b3: "التحقق من أداء النظام من خلال الاختبارات الواقعية والعروض التقنية.",

        volunteering_tag: "تطوع",
        vol_1_title: "دعم فني",
        vol_1_org: "معرض TechTide • أكتوبر 2024",
        vol_1_b1: "قيادة عروض الروبوتات الحية مع إبراز أنظمة دمج الحساسات والتحكم.",
        vol_1_b2: "تحويل مفاهيم الأنظمة المضمنة إلى شروحات خطوة بخطوة لزوار المعرض.",

        vol_2_title: "صانعة محتوى بالذكاء الاصطناعي",
        vol_2_org: "Clapital • يناير – مارس 2026",
        vol_2_b1: "إنتاج محتوى مرئي قصير باستخدام الذكاء الاصطناعي وتحسين الأوامر لزيادة الاتساق الإبداعي.",
        vol_2_b2: "مواءمة استراتيجيات المحتوى مع أهداف الحملات التسويقية.",

        // Projects
        section_projects: "المشاريع",
        proj_1_title: "نظام تصنيف النصوص بالذكاء الاصطناعي",
        proj_1_b1: "ضبط دقيق لنموذجي AraBERT وMARBERT على مجموعة بيانات عربية مُعلَّمة لتصنيف استفسارات جامعية متعددة الفئات.",
        proj_1_b2: "تصميم بروتوكول تقييم 5-fold stratified للتحقق من استقرار النموذج.",
        proj_1_b3: "نشر المصنّف كـ REST API إنتاجي باستخدام FastAPI للاستدلال الفوري.",

        proj_2_title: "مترجم لغة الإشارة العربية",
        proj_2_b1: "بناء نظام ترجمة فوري ثنائي الاتجاه بين لغة الإشارة والكلام المنطوق باستخدام Python.",
        proj_2_b2: "تتبع اليد باستخدام MediaPipe وOpenCV؛ تدريب مصنفات Random Forest للتعرف على الإيماءات.",
        proj_2_b3: "دمج تحويل الكلام إلى نص والعكس؛ تطوير واجهة رسومية كاملة باستخدام CustomTkinter.",

        proj_3_title: "منصة تشارك",
        proj_3_b1: "بناء MVP لسوق إلكترونية من نظير إلى نظير لتأجير وتبادل وهبة موارد المجتمع.",
        proj_3_b2: "استخدام React + Tailwind CSS للواجهة الأمامية وLaravel للمصادقة والـ API ومنطق السوق.",

        // Awards
        section_awards: "الجوائز والإنجازات",
        award_1_title: "إشارة تقدير",
        award_1_org: "مسابقة ICPC أفريقيا والفتيات العرب",
        award_2_title: "المركز الثالث",
        award_2_org: "مسابقة روبوتيكس RFG Youth",
        award_3_title: "المركز الثاني",
        award_3_org: "مسابقة روبوتيكس RFG Teens",
        award_4_title: "المركز الثالث",
        award_4_org: "Startup Weekend حماة",

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

        // Alt
        alt_hero: "داليا الكيلاني",
        loader_text: "جاري التحميل..."
    }
};

// ========================================
// STATE
// ========================================

let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ========================================
// INIT
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
        setTimeout(() => preloader.classList.add('fade-out'), 2200);
    }
});

// ========================================
// THEME
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
    const icon = document.getElementById('theme-toggle').querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========================================
// LANGUAGE
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

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = translations[lang][key];
        if (!val) return;

        if (el.tagName === 'META') {
            el.content = val;
        } else if (el.tagName === 'TITLE') {
            el.textContent = val;
        } else if (el.tagName === 'A' && el.children.length > 0) {
            const icon = el.querySelector('i');
            el.textContent = val + ' ';
            if (icon) el.appendChild(icon);
        } else {
            // Preserve child elements (like .vol-tag spans inside h3)
            const childEls = el.querySelectorAll('[data-i18n]');
            if (childEls.length === 0) {
                el.textContent = val;
            }
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (translations[lang][key]) el.alt = translations[lang][key];
    });

    const langCode = document.querySelector('#lang-toggle .lang-code');
    if (langCode) langCode.textContent = lang === 'en' ? 'AR' : 'EN';
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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
            }
        });
    });

    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleFormSubmit);

    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
}

// ========================================
// FORM
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
    document.querySelector('.nav-links').classList.toggle('active');
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.card, .award-card, .competency-item, .about-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ========================================
// NAVBAR SCROLL
// ========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.pageYOffset > 50
        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
        : 'none';
});
