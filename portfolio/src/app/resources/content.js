const person = {
    firstName: 'Ali',
    lastName: 'Emre',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: { en: 'Computer Engineering Student', tr: 'Bilgisayar Mühendisliği Öğrencisi' },
    avatar: '/images/profile.webp',
    location: 'Europe/Istanbul',
    languages: ['Turkish', 'English']
}

const newsletter = {
    display: false,
    title: <>Subscribe to Newsletter</>,
    description: <>Latest updates on my projects and achievements.</>
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
    label: { en: 'Home', tr: 'Ana Sayfa' },
    title: { en: 'Ali Emre - Computer Engineering Student', tr: 'Ali Emre - Bilgisayar Mühendisliği Öğrencisi' },
    description: { en: 'Portfolio of Ali Emre - Software Developer specializing in AI, NLP, and Web Technologies', tr: 'Ali Emre Portföyü - Yapay Zeka, NLP ve Web Teknolojileri alanında Yazılım Geliştirici' },
    headline: <>Shaping Technology with Innovation</>,
    subline: <>Computer Engineering Student at RTE University.<br />TÜBİTAK and TEKNOFEST project leader, developing solutions in AI and embedded systems.</>
}

const about = {
    label: { en: 'About', tr: 'Hakkımda' },
    title: { en: 'About Me', tr: 'Hakkımda' },
    description: { en: 'Learn more about Ali Emre', tr: 'Ali Emre hakkında daha fazla bilgi' },
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
        title: { en: 'Introduction', tr: 'Tanıtım' },
        description: <>I am a 4th-year Computer Engineering student interested in embedded systems, artificial intelligence, and software development. I have led many teams in TÜBİTAK and TEKNOFEST projects, developing innovative solutions.<br /><br />I work on applied projects in machine learning, natural language processing, and autonomous systems; aiming to develop systems with high technical and social value through research and open-source contributions.</>
    },
    work: {
        display: true,
        title: { en: 'Experience', tr: 'Deneyim' },
        experiences: [
            {
                company: 'AI2X Software Team',
                timeframe: '2024 - Present',
                role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
                achievements: [
                    <>Led web technologies, machine learning, and NLP projects</>,
                    <>Developed socially beneficial software within TÜBİTAK and TEKNOFEST frameworks</>,
                    <>Contributed to 5G Positioning, UAV, and Air Defense projects</>
                ],
                images: []
            },
            {
                company: { en: 'Computer Engineering Community', tr: 'Bilgisayar Mühendisliği Topluluğu' },
                timeframe: '2023',
                role: { en: 'Founding President', tr: 'Kurucu Başkan' },
                achievements: [
                    <>Reached 100+ participants through workshops and seminars</>,
                    <>Provided technical content creation and community management</>
                ],
                images: []
            },
            {
                company: 'İnekWiz - Smart Farm Monitoring',
                timeframe: '2022 - 2023',
                role: { en: 'Team Member | TÜBİTAK 2209-A', tr: 'Takım Üyesi | TÜBİTAK 2209-A' },
                achievements: [
                    <>Developed real-time data collection and reporting system</>,
                    <>Created farm monitoring software with Python and IoT technologies</>
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
        title: { en: 'Technical Skills', tr: 'Teknik Yetenekler' },
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
    label: { en: 'Projects', tr: 'Projelerim' },
    title: { en: 'My Projects', tr: 'Projelerim' },
    description: { en: 'TÜBİTAK, TEKNOFEST, and personal projects', tr: 'TÜBİTAK, TEKNOFEST ve kişisel projeler' }
}

const gallery = {
    label: { en: 'Gallery', tr: 'Galeri' },
    title: { en: 'Photo Gallery', tr: 'Fotoğraf Galerisi' },
    description: { en: 'Moments from my journey', tr: 'Yolculuğumdan anlar' },
    images: [
        { src: '/images/gallery/01_img.jpeg', alt: 'Project Photo 1', orientation: 'horizontal' },
        { src: '/images/gallery/02_img.jpeg', alt: 'Project Photo 2', orientation: 'horizontal' },
        { src: '/images/gallery/03_img.jpeg', alt: 'Project Photo 3', orientation: 'horizontal' },
    ]
}

// Achievements
const achievements = {
    label: { en: 'Achievements', tr: 'Başarılarım' },
    title: { en: 'My Achievements', tr: 'Başarılarım' },
    description: { en: 'Competition awards and project achievements', tr: 'Yarışma ödülleri ve proje başarıları' },
    items: [
        {
            id: 'idef-2025',
            icon: 'rocket',
            badge: { en: 'IDEF 2025', tr: 'IDEF 2025' },
            title: { en: 'Defenders of Tomorrow - University Team', tr: 'Defenders of Tomorrow - Üniversite Takımı' },
            description: { en: 'Participated in IDEF 2025 with "UAV Real-time Anomaly Detection and Remaining Useful Life Prediction" project. Developed LSTM, CNN and Autoencoder based predictive maintenance system with Jetson Nano.', tr: 'İHA\'larda Anlık Anomali ve Kalan Faydalı Ömür Tespiti projesiyle IDEF 2025\'te yer aldık. Jetson Nano ile LSTM, CNN ve Autoencoder tabanlı kestirimsel bakım sistemi geliştirildi.' },
            year: '2025',
            category: 'competition'
        },
        {
            id: 'turkcell-usid',
            icon: 'grid',
            badge: { en: 'USİD Internship', tr: 'USİD Stajı' },
            title: { en: 'Turkcell Winter Internship (USİD)', tr: 'Turkcell Kış Dönemi Stajı (USİD)' },
            description: { en: 'University-Industry Collaboration (USİD) winter internship. Technical studies on corporate software systems and engineering processes.', tr: 'Üniversite–Sanayi İş Birliği (USİD) kapsamında kış dönemi stajı. Kurumsal yazılım sistemleri ve mühendislik süreçlerine yönelik teknik çalışmalar.' },
            year: '2026',
            category: 'professional'
        },
        {
            id: '5g-positioning-2025',
            icon: 'signal',
            badge: { en: '4th in Turkey', tr: 'Türkiye 4.\'sü' },
            title: { en: 'TEKNOFEST 5G Positioning Competition', tr: 'TEKNOFEST 5G Konumlandırma Yarışması' },
            description: { en: 'Successfully completed the field mission with AI2X team and achieved 4th place in Turkey. Developed hybrid positioning algorithm with Kalman Filter + ML.', tr: 'AI2X takımıyla saha görevini başarıyla tamamladık ve Türkiye 4.\'sü olduk. Kalman Filtresi + ML ile hibrit konum tahmin algoritması geliştirildi.' },
            year: '2025',
            category: 'competition'
        },
        {
            id: 'erpen-internship',
            icon: 'sparkles',
            badge: { en: 'Summer Internship', tr: 'Yaz Stajı' },
            title: { en: 'Erpen Plastik - Intern Engineer', tr: 'Erpen Plastik - Stajyer Mühendis' },
            description: { en: 'Developed YOLOv8 + OCR based license plate recognition system. Built AI-powered company info and risk analysis system with LangChain + n8n integration.', tr: 'YOLOv8 + OCR tabanlı plaka tanıma sistemi geliştirildi. LangChain + n8n entegrasyonu ile AI destekli şirket bilgi ve risk analizi sistemi kuruldu.' },
            year: '2025',
            category: 'professional'
        },
        {
            id: 'tusas-graduation',
            icon: 'shield',
            badge: { en: 'TUSAŞ Supported', tr: 'TUSAŞ Destekli' },
            title: { en: 'TUSAŞ Supported Graduation Project', tr: 'TUSAŞ Destekli Bitirme Tezi' },
            description: { en: 'Graduation thesis project supported by TUSAŞ. Network-based anomaly detection research with Soft2AI/LiftUp team using LSTM, Isolation Forest and Autoencoder models.', tr: 'TUSAŞ desteğiyle yürütülen bitirme tezi projesi. Soft2AI/LiftUp ekibiyle LSTM, Isolation Forest ve Autoencoder modelleri kullanarak ağ tabanlı anomali tespiti araştırması.' },
            year: '2025 - 2026',
            category: 'research'
        },
        {
            id: 'acikhack-finalist',
            icon: 'trophy',
            badge: { en: 'Finalist', tr: 'Finalist' },
            title: { en: 'Açıkhack 2024 - NLP Projects', tr: 'Açıkhack 2024 - NLP Projeleri' },
            description: { en: 'Finalist in TEKNOFEST Açıkhack 2024 with BERT and LSTM based text classification and NER projects.', tr: 'BERT ve LSTM tabanlı metin sınıflandırma ve NER projeleriyle TEKNOFEST Açıkhack 2024\'te finalist olduk.' },
            year: '2024',
            category: 'competition'
        },
        {
            id: 'tubitak-2209a-2025',
            icon: 'cpu',
            badge: { en: 'TÜBİTAK Support', tr: 'TÜBİTAK Desteği' },
            title: { en: 'Public Transportation AI System', tr: 'Toplu Taşıma Yapay Zeka Sistemi' },
            description: { en: 'AI system for monitoring density, security, and air quality in public transportation - supported by TÜBİTAK 2209-A program.', tr: 'TÜBİTAK 2209-A programı kapsamında desteklenen, toplu taşımada yoğunluk, güvenlik ve hava kalitesi izleme yapay zeka sistemi.' },
            year: '2025',
            category: 'research'
        },
        {
            id: 'community-founder',
            icon: 'users',
            badge: { en: 'Founder', tr: 'Kurucu' },
            title: { en: 'Computer Eng. Community - Founding President', tr: 'Bilgisayar Müh. Topluluğu - Kurucu Başkan' },
            description: { en: 'Founded a student community focused on software, AI and project management at RTEÜ. Organized seminars and technical workshops with 100+ participants.', tr: 'RTEÜ\'de yazılım, yapay zeka ve proje yönetimi odaklı öğrenci topluluğu kuruldu. 100+ katılımcılı seminer ve teknik atölyeler düzenlendi.' },
            year: '2023-2024',
            category: 'leadership'
        },
        {
            id: 'inekwiz-2023',
            icon: 'globe',
            badge: { en: 'TÜBİTAK Support', tr: 'TÜBİTAK Desteği' },
            title: { en: 'İnekWiz - Smart Farm Monitoring', tr: 'İnekWiz - Akıllı Çiftlik İzleme' },
            description: { en: 'Real-time animal health and environment monitoring system - supported by TÜBİTAK 2209-A.', tr: 'TÜBİTAK 2209-A programı kapsamında desteklenen gerçek zamanlı hayvan sağlığı ve çevre izleme sistemi.' },
            year: '2022-2023',
            category: 'research'
        }
    ]
}

// Team - Not needed for personal portfolio, but keeping structure
const team = {
    label: { en: 'Team', tr: 'Ekip' },
    title: { en: 'Team', tr: 'Ekip' },
    description: { en: 'Team members', tr: 'Ekip üyeleri' },
    members: []
}

// Projects data
const projects = {
    label: { en: 'Projects', tr: 'Projeler' },
    title: { en: 'My Projects', tr: 'Projelerim' },
    description: { en: 'TÜBİTAK, TEKNOFEST, and personal projects in AI, embedded systems, and web development', tr: 'Yapay zeka, gömülü sistemler ve web geliştirme alanlarında TÜBİTAK, TEKNOFEST ve kişisel projeler' },
    items: [
        {
            id: 'iha-design',
            icon: 'rocket',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' },
                { en: 'Ongoing', tr: 'Devam Ediyor' }
            ],
            title: { en: 'UAV Design and Simulations', tr: 'İHA Tasarımı ve Simülasyonları' },
            description: { en: '150 cm fixed-wing, 4 kg UAV design. Aerodynamic analysis with ANSYS, autopilot system development with ArduPilot + Jetson Nano.', tr: '150 cm sabit kanatlı, 4 kg ağırlığında İHA tasarımı. ANSYS ile aerodinamik analizler, ArduPilot + Jetson Nano ile autopilot sistemi geliştirme.' },
            year: '2025',
            status: { en: 'Ongoing', tr: 'Devam Ediyor' },
            tags: ['ANSYS', 'ArduPilot', 'Jetson Nano', 'Python'],
            images: [
                { src: '/images/projects/iha.jpeg', alt: 'UAV Design' }
            ]
        },
        {
            id: 'autonomous-targeting',
            icon: 'target',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' },
                { en: 'Ongoing', tr: 'Devam Ediyor' }
            ],
            title: { en: 'Autonomous Targeting Turret System', tr: 'Otonom Hedefleme Taret Sistemi' },
            description: { en: 'Target detection with YOLOv8 and autonomous firing systems with Unity simulation support.', tr: 'YOLOv8 ile hedef tespiti ve Unity simülasyon desteğiyle otonom atış sistemleri.' },
            year: '2025',
            status: { en: 'Ongoing', tr: 'Devam Ediyor' },
            tags: ['YOLOv8', 'Unity', 'Python', 'C#'],
            images: [
                { src: '/images/projects/taret.jpeg', alt: 'Autonomous Targeting' }
            ]
        },
        {
            id: 'public-transport-ai',
            icon: 'cpu',
            badges: [
                { en: 'TÜBİTAK 2209-A', tr: 'TÜBİTAK 2209-A' },
                { en: 'Ongoing', tr: 'Devam Ediyor' }
            ],
            title: { en: 'Public Transport AI System', tr: 'Toplu Taşıma Yapay Zeka Sistemi' },
            description: { en: 'Multi-module mobile application for monitoring density, security, and air quality in public transportation with LSTM-based density prediction and CNN-based emotion analysis.', tr: 'LSTM tabanlı yoğunluk tahmini ve CNN tabanlı duygu analizi ile toplu taşımada yoğunluk, güvenlik ve hava kalitesi izleme çok modüllü mobil uygulama.' },
            year: '2025',
            status: { en: 'Ongoing', tr: 'Devam Ediyor' },
            tags: ['LSTM', 'CNN', 'IoT', 'Python', 'Mobile'],
            images: []
        },
        {
            id: '5g-positioning',
            icon: 'signal',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' },
                { en: '4th in Turkey', tr: 'Türkiye 4.' }
            ],
            title: { en: '5G Positioning System', tr: '5G Tabanlı Konumlandırma Sistemi' },
            description: { en: 'Hybrid location estimation algorithm (Trilateration + ML + Kalman Filter) development project using 5G signal measurements.', tr: '5G sinyal ölçümleriyle hibrit konum tahmin algoritması (Trilaterasyon + ML + Kalman Filtresi) geliştirme projesi.' },
            year: '2025',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['5G', 'ML', 'Kalman Filter', 'Python'],
            images: [
                { src: '/images/projects/5g.png', alt: '5G Positioning' }
            ]
        },
        {
            id: 'finance-management',
            icon: 'grid',
            badges: [
                { en: 'Personal', tr: 'Kişisel' }
            ],
            title: { en: 'Finance Management System', tr: 'Finans Yönetim Sistemi' },
            description: { en: 'Full-stack web application for tracking financial status, budget planning, and expense categorization.', tr: 'Finansal durumu izlemek, bütçe planlaması yapmak ve harcamaları kategorize etmek için tasarlanmış full-stack web uygulaması.' },
            year: '2024',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['React', 'Strapi', 'Postman', 'Railway'],
            images: [
                { src: '/images/projects/finans.png', alt: 'Finance Management' }
            ]
        },
        {
            id: 'nlp-projects',
            icon: 'document',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' },
                { en: 'Finalist', tr: 'Finalist' }
            ],
            title: { en: 'NLP Projects - Açıkhack Finalist', tr: 'NLP Projeleri - Açıkhack Finalist' },
            description: { en: 'Text classification, NER, and sentiment analysis projects with BERT and LSTM models. RESTful API integration and open-source sharing.', tr: 'BERT ve LSTM modelleriyle metin sınıflandırma, varlık tanıma (NER) ve duygu analizi projeleri. RESTful API entegrasyonu ve açık kaynak paylaşımı.' },
            year: '2024',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['BERT', 'LSTM', 'NLP', 'Python', 'RESTful API'],
            images: [
                { src: '/images/projects/nlp.jpg', alt: 'NLP Projects' }
            ]
        },
        {
            id: 'eys',
            icon: 'users',
            badges: [
                { en: 'TEKNOFEST', tr: 'TEKNOFEST' }
            ],
            title: { en: 'EYS - Disability Support System', tr: 'EYS - Engelli Yardım Sistemi' },
            description: { en: 'Mobile application providing sign language translation and navigation assistance. Developed with Python, Android, and Raspberry Pi integration.', tr: 'İşaret dili çevirisi ve yön rehberliği sağlayan mobil uygulama. Python, Android ve Raspberry Pi entegrasyonu ile geliştirildi.' },
            year: '2023',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['Python', 'Android', 'Raspberry Pi', 'Computer Vision'],
            images: [
                { src: '/images/projects/eys.png', alt: 'EYS' }
            ]
        },
        {
            id: 'inekwiz',
            icon: 'globe',
            badges: [
                { en: 'TÜBİTAK 2209-A', tr: 'TÜBİTAK 2209-A' }
            ],
            title: { en: 'İnekWiz - Smart Farm Monitoring', tr: 'İnekWiz - Akıllı Çiftlik İzleme' },
            description: { en: 'System for real-time monitoring and reporting of animal health, activities, and environmental conditions on farms.', tr: 'Çiftliklerdeki hayvanların sağlık durumlarını, aktivitelerini ve çevre koşullarını gerçek zamanlı olarak izleyen ve raporlayan sistem.' },
            year: '2022-2023',
            status: { en: 'Completed', tr: 'Tamamlandı' },
            tags: ['Python', 'IoT', 'Data Analysis', 'Real-time Systems'],
            images: [
                { src: '/images/projects/inekwiz.png', alt: 'İnekWiz' }
            ]
        }
    ]
}

// Stats data
const stats = {
    display: true,
    items: [
        { value: '8+', label: { en: 'Projects', tr: 'Proje' } },
        { value: '3', label: { en: 'TÜBİTAK Support', tr: 'TÜBİTAK Desteği' } },
        { value: '5+', label: { en: 'TEKNOFEST Competitions', tr: 'TEKNOFEST Yarışması' } }
    ]
}

export { person, social, newsletter, home, about, work, gallery, achievements, team, stats, projects };
