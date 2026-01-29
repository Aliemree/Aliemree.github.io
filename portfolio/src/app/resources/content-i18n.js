import { achievements, team, stats, projects } from './content';

const createI18nContent = (t) => {
    const person = {
        firstName: 'Ali',
        lastName: 'Emre',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role: t("person.role") || { en: 'Computer Engineering Student', tr: 'Bilgisayar Mühendisliği Öğrencisi' },
        avatar: '/images/profile.webp',
        location: 'Europe/Istanbul',
        languages: ['Turkish', 'English']
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title")}</>,
        description: <>{t("newsletter.description")}</>
    }

    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/Aliemree',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/in/ali-emre/',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:ali.emree.tr@gmail.com',
        },
    ]

    const home = {
        label: t("nav.home") || { en: 'Home', tr: 'Ana Sayfa' },
        title: t("home.title") || { en: 'Ali Emre - Computer Engineering Student', tr: 'Ali Emre - Bilgisayar Mühendisliği Öğrencisi' },
        description: t("home.description") || { en: 'Software Developer specializing in AI, NLP, and Web Technologies', tr: 'Yapay Zeka, NLP ve Web Teknolojileri alanında Yazılım Geliştirici' },
        headline: <>{t("home.headline") || 'Shaping Technology with Innovation'}</>,
        subline: <>{t("home.subline") || 'Computer Engineering Student at RTE University'}</>
    }

    const about = {
        label: t("nav.about") || { en: 'About', tr: 'Hakkımda' },
        title: t("about.title") || { en: 'About Me', tr: 'Hakkımda' },
        description: t("about.description") || { en: 'Learn more about Ali Emre', tr: 'Ali Emre hakkında daha fazla bilgi' },
        tableOfContent: {
            display: true,
            subItems: false
        },
        avatar: {
            display: true
        },
        calendar: {
            display: false
        },
        intro: {
            display: true,
            title: t("about.intro.title") || { en: 'Introduction', tr: 'Tanıtım' },
            description: <>{t("about.intro.description")}</>
        },
        work: {
            display: true,
            title: { en: 'Experience', tr: 'Deneyim' },
            experiences: [
                {
                    company: 'Turkcell',
                    timeframe: { en: '02.2026 - Present', tr: '02.2026 - Devam' },
                    role: { en: 'Winter Intern (USİD)', tr: 'Kış Dönemi Stajyeri (USİD)' },
                    achievements: [
                        <>University-Industry Collaboration (USİD) winter internship</>,
                        <>Technical studies on corporate software systems and engineering processes</>
                    ],
                    images: []
                },
                {
                    company: { en: 'Soft2AI / LiftUp - TUSAŞ Supported', tr: 'Soft2AI / LiftUp - TUSAŞ Destekli' },
                    timeframe: { en: '09.2025 - Present', tr: '09.2025 - Devam' },
                    role: { en: 'R&D Member', tr: 'AR-GE Üyesi' },
                    achievements: [
                        <>Network-based anomaly detection with machine learning</>,
                        <>Using LSTM, Isolation Forest and Autoencoder models</>,
                        <>Developing web-based analysis and monitoring platform</>
                    ],
                    images: []
                },
                {
                    company: 'Erpen Plastik A.Ş.',
                    timeframe: '06.2025 - 09.2025',
                    role: { en: 'Intern Engineer', tr: 'Stajyer Mühendis' },
                    achievements: [
                        <>Developed YOLOv8 + OCR based license plate recognition system</>,
                        <>Built AI-powered company info and risk analysis with LangChain + n8n</>,
                        <>Worked on Node.js, Prisma, PostgreSQL and React full-stack architecture</>
                    ],
                    images: []
                },
                {
                    company: { en: 'Defenders of Tomorrow (AI2X)', tr: 'Defenders of Tomorrow (AI2X)' },
                    timeframe: '07.2025',
                    role: { en: 'University Team Participant', tr: 'Katılımcı Üniversite Takımı' },
                    achievements: [
                        <>Participated in IDEF 2025 with "UAV Anomaly Detection and RUL Prediction" project</>,
                        <>Developed LSTM, CNN and Autoencoder based predictive maintenance models</>,
                        <>Built real-time system with Jetson Nano and sensor data</>
                    ],
                    images: []
                },
                {
                    company: 'AI2X Software Team',
                    timeframe: { en: '2024 - Present', tr: '2024 - Devam' },
                    role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
                    achievements: [
                        <>Led web technologies, machine learning, and NLP projects</>,
                        <>Developed socially beneficial software within TÜBİTAK and TEKNOFEST frameworks</>,
                        <>Contributed to 5G Positioning, UAV, and Air Defense projects</>
                    ],
                    images: []
                },
                {
                    company: { en: 'Computer Engineering Community - RTEÜ', tr: 'Bilgisayar Mühendisliği Topluluğu - RTEÜ' },
                    timeframe: '10.2023 - 10.2024',
                    role: { en: 'Founding President', tr: 'Kurucu Başkan' },
                    achievements: [
                        <>Founded student community focused on software, AI and project management</>,
                        <>Organized seminars and technical workshops with 100+ participants</>
                    ],
                    images: []
                }
            ]
        },
        studies: {
            display: true,
            title: { en: 'Education', tr: 'Eğitim' },
            institutions: [
                {
                    name: { en: 'Recep Tayyip Erdoğan University', tr: 'Recep Tayyip Erdoğan Üniversitesi' },
                    description: { en: 'B.Sc. Computer Engineering (2021 - 2026)', tr: 'Bilgisayar Mühendisliği Lisans (2021 - 2026)' },
                },
                {
                    name: 'Hacısani Konukoğlu Anadolu Lisesi',
                    description: { en: 'High School (2016 - 2020)', tr: 'Lise (2016 - 2020)' },
                }
            ]
        },
        technical: {
            display: true,
            title: t("about.technical.title") || { en: 'Technical Skills', tr: 'Teknik Yetenekler' },
            skills: [
                {
                    title: { en: 'Programming Languages', tr: 'Programlama Dilleri' },
                    description: <>Python, JavaScript, C++, Java - proficient in multiple paradigms and frameworks.</>,
                    images: []
                },
                {
                    title: { en: 'AI & Data Science', tr: 'Yapay Zeka & Veri Bilimi' },
                    description: <>TensorFlow, LSTM, BERT, NLP, YOLOv8 - machine learning and deep learning applications.</>,
                    images: []
                },
                {
                    title: { en: 'Web Technologies', tr: 'Web Teknolojileri' },
                    description: <>React, Node.js, HTML/CSS, Next.js - full-stack web development.</>,
                    images: []
                },
                {
                    title: { en: 'Embedded Systems', tr: 'Gömülü Sistemler' },
                    description: <>Arduino, Raspberry Pi, IoT, ArduPilot, Jetson Nano - hardware-software integration.</>,
                    images: []
                }
            ]
        }
    }

    const work = {
        label: t("nav.work") || { en: 'Projects', tr: 'Projelerim' },
        title: t("work.title") || { en: 'My Projects', tr: 'Projelerim' },
        description: t("work.description") || { en: 'TÜBİTAK, TEKNOFEST, and personal projects', tr: 'TÜBİTAK, TEKNOFEST ve kişisel projeler' }
    }

    const gallery = {
        label: t("nav.gallery") || { en: 'Gallery', tr: 'Galeri' },
        title: t("gallery.title") || { en: 'Photo Gallery', tr: 'Fotoğraf Galerisi' },
        description: t("gallery.description") || { en: 'Moments from my journey', tr: 'Yolculuğumdan anlar' },
        images: [
            // AI2X Team Photos
            { src: '/images/gallery/01_img.jpeg', alt: 'AI2X Team Photo 1', orientation: 'horizontal' },
            { src: '/images/gallery/02_img.jpeg', alt: 'AI2X Team Photo 2', orientation: 'horizontal' },
            { src: '/images/gallery/03_img.jpeg', alt: 'AI2X Team Photo 3', orientation: 'horizontal' },
            { src: '/images/gallery/04_img.jpeg', alt: 'AI2X Team Photo 4', orientation: 'horizontal' },
            { src: '/images/gallery/05_img.jpeg', alt: 'AI2X Team Photo 5', orientation: 'horizontal' },
            { src: '/images/gallery/06_img.jpeg', alt: 'AI2X Team Photo 6', orientation: 'horizontal' },
            { src: '/images/gallery/07_img.jpeg', alt: 'AI2X Team Photo 7', orientation: 'horizontal' },
            { src: '/images/gallery/08_img.jpeg', alt: 'AI2X Team Photo 8', orientation: 'horizontal' },
            { src: '/images/gallery/09_img.jpeg', alt: 'AI2X Team Photo 9', orientation: 'horizontal' },
            { src: '/images/gallery/10_img.jpeg', alt: 'AI2X Team Photo 10', orientation: 'horizontal' },
            { src: '/images/gallery/11_img.jpeg', alt: 'AI2X Team Photo 11', orientation: 'horizontal' },
            { src: '/images/gallery/12_img.jpeg', alt: 'AI2X Team Photo 12', orientation: 'horizontal' },
            { src: '/images/gallery/13_img.jpeg', alt: 'AI2X Team Photo 13', orientation: 'horizontal' },
            { src: '/images/gallery/14_img.jpeg', alt: 'AI2X Team Photo 14', orientation: 'horizontal' },
            { src: '/images/gallery/15_img.jpeg', alt: 'AI2X Team Photo 15', orientation: 'horizontal' },
            { src: '/images/gallery/16_img.jpeg', alt: 'AI2X Team Photo 16', orientation: 'horizontal' },
            { src: '/images/gallery/17_img.jpeg', alt: 'AI2X Team Photo 17', orientation: 'horizontal' },
            { src: '/images/gallery/18_img.jpeg', alt: 'AI2X Team Photo 18', orientation: 'horizontal' },
            { src: '/images/gallery/19_img.jpeg', alt: 'AI2X Team Photo 19', orientation: 'horizontal' },
            { src: '/images/gallery/20_img.jpeg', alt: 'AI2X Team Photo 20', orientation: 'horizontal' },
            // Personal Project Photos
            { src: '/images/gallery/iha.jpeg', alt: 'UAV Design', orientation: 'horizontal' },
            { src: '/images/gallery/taret.jpeg', alt: 'Autonomous Turret', orientation: 'horizontal' },
            { src: '/images/gallery/5GKonumlandırma.png', alt: '5G Positioning System', orientation: 'horizontal' },
            { src: '/images/gallery/FinansSitesi.png', alt: 'Finance Website', orientation: 'horizontal' },
            { src: '/images/gallery/NLP.jpg', alt: 'NLP Project', orientation: 'horizontal' },
            { src: '/images/gallery/EYS.png', alt: 'Accessibility Aid System', orientation: 'horizontal' },
            { src: '/images/gallery/inekwiz.png', alt: 'İnekWiz Smart Farming', orientation: 'horizontal' },
            { src: '/images/gallery/takımm.png', alt: 'Team Photo', orientation: 'horizontal' },
            { src: '/images/gallery/men6.webp', alt: 'Profile Photo', orientation: 'vertical' },
            { src: '/images/gallery/project3.jpg', alt: 'Project Photo 3', orientation: 'horizontal' },
            { src: '/images/gallery/project4.jpg', alt: 'Project Photo 4', orientation: 'horizontal' },
        ]
    }

    return {
        person,
        social,
        newsletter,
        home,
        about,
        work,
        gallery,
        achievements,
        team,
        stats,
        projects
    }
};

export { createI18nContent };
