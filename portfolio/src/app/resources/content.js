const person = {
    firstName: 'Ali',
    lastName: 'Emre',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: { en: 'Computer Engineering Graduate | Backend & AI Developer', tr: 'Bilgisayar Mühendisliği Mezunu | Backend ve Yapay Zekâ Geliştiricisi' },
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
        link: 'https://www.linkedin.com/in/ali-emre-964723270/',
    },
    {
        name: 'Portfolio',
        icon: 'globe',
        link: 'https://aliemree.github.io/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ali.emree.tr@gmail.com',
    },
]

const home = {
    label: { en: 'Home', tr: 'Ana Sayfa' },
    title: { en: 'Ali Emre | Backend & AI Developer', tr: 'Ali Emre | Backend ve Yapay Zekâ Geliştiricisi' },
    description: { en: 'I build backend systems, AI-powered applications, IoT solutions and autonomous systems.', tr: 'Backend sistemleri, yapay zekâ destekli uygulamalar, IoT çözümleri ve otonom sistemler geliştiriyorum.' },
    headline: { en: "Hi, I'm Ali Emre.", tr: 'Merhaba, ben Ali Emre.' },
    subline: { en: 'I build backend systems, AI-powered applications, IoT solutions and autonomous systems.', tr: 'Backend sistemleri, yapay zekâ destekli uygulamalar, IoT çözümleri ve otonom sistemler geliştiriyorum.' },
    availability: { en: 'Open to Software Engineering & AI Opportunities', tr: 'Yazılım Mühendisliği ve Yapay Zekâ Fırsatlarına Açık' }
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
        description: {
            en: 'I am a Computer Engineering graduate focused on backend systems, AI-powered applications, IoT and autonomous systems. I enjoy transforming complex engineering problems into maintainable and practical software solutions.',
            tr: 'Bilgisayar mühendisliği mezunuyum. Backend sistemleri, yapay zekâ destekli uygulamalar, IoT ve otonom sistemler üzerine çalışıyorum. Karmaşık mühendislik problemlerini anlaşılır, sürdürülebilir ve uygulanabilir yazılım çözümlerine dönüştürmeye odaklanıyorum.'
        }
    },
    work: {
        display: false,
        title: { en: 'Experience', tr: 'Deneyim' },
        experiences: [
            {
                company: 'Turkcell USİD',
                timeframe: '02.2026 - 2026',
                role: { en: 'Backend & AI Development Intern', tr: 'Backend ve Yapay Zekâ Geliştirme Stajyeri' },
                achievements: [
                    { en: 'Developed PN_AI, an independent VoIP log analysis platform for a real troubleshooting problem', tr: 'Gerçek bir sorun giderme problemi için bağımsız PN_AI VoIP log analiz platformunu geliştirdim' },
                    { en: 'Built deterministic event extraction, root-cause classification, evidence and timeline workflows', tr: 'Deterministik olay çıkarımı, kök neden sınıflandırma, kanıt ve zaman çizelgesi akışları geliştirdim' }
                ],
                images: []
            },
            {
                company: { en: 'Soft2AI / TUSAŞ Supported Graduation Project', tr: 'Soft2AI / TUSAŞ Destekli Bitirme Projesi' },
                timeframe: '09.2025 - 2026',
                role: { en: 'R&D Developer', tr: 'AR-GE Geliştiricisi' },
                achievements: [
                    { en: 'Researched network anomaly detection with LSTM, Isolation Forest and Autoencoder models', tr: 'LSTM, Isolation Forest ve Autoencoder modelleriyle ağ anomalisi tespiti üzerine çalıştım' },
                    { en: 'Contributed to a web-based analysis and monitoring workflow', tr: 'Web tabanlı analiz ve izleme akışına katkı sağladım' }
                ],
                images: []
            },
            {
                company: 'Erpen Plastik A.Ş.',
                timeframe: '06.2025 - 09.2025',
                role: { en: 'Intern Engineer', tr: 'Stajyer Mühendis' },
                achievements: [
                    { en: 'Developed a YOLOv8 and OCR based license plate recognition prototype', tr: 'YOLOv8 ve OCR tabanlı plaka tanıma prototipi geliştirdim' },
                    { en: 'Worked on full-stack services with Node.js, Prisma, PostgreSQL and React', tr: 'Node.js, Prisma, PostgreSQL ve React ile full-stack servisler üzerinde çalıştım' }
                ],
                images: []
            },
            {
                company: 'AI2X Software Team',
                timeframe: { en: '2024 - Present', tr: '2024 - Devam' },
                role: { en: 'Software Developer', tr: 'Yazılım Geliştirici' },
                achievements: [
                    { en: 'Contributed to 5G positioning, UAV and software projects', tr: '5G konumlandırma, İHA ve yazılım projelerine katkı sağladım' },
                    { en: 'Worked across backend, machine learning and embedded-system integration', tr: 'Backend, makine öğrenimi ve gömülü sistem entegrasyonu alanlarında çalıştım' }
                ],
                images: []
            },
            {
                company: { en: 'Computer Engineering Community — RTEÜ', tr: 'Bilgisayar Mühendisliği Topluluğu — RTEÜ' },
                timeframe: '10.2023 - 10.2024',
                role: { en: 'Founding President', tr: 'Kurucu Başkan' },
                achievements: [
                    { en: 'Founded and led a community focused on software, AI and project development', tr: 'Yazılım, yapay zekâ ve proje geliştirme odaklı topluluğu kurup yönettim' },
                    { en: 'Organized technical seminars and workshops', tr: 'Teknik seminerler ve atölyeler düzenledim' }
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
                title: { en: 'Backend', tr: 'Backend' },
                description: { en: 'Python, FastAPI, Java, Spring Boot, REST APIs, PostgreSQL, Redis', tr: 'Python, FastAPI, Java, Spring Boot, REST API’leri, PostgreSQL, Redis' },
                images: []
            },
            {
                title: { en: 'Frontend', tr: 'Frontend' },
                description: { en: 'Next.js, React, TypeScript, Tailwind CSS', tr: 'Next.js, React, TypeScript, Tailwind CSS' },
                images: []
            },
            {
                title: { en: 'AI & Data', tr: 'Yapay Zekâ ve Veri' },
                description: { en: 'PyTorch, scikit-learn, Computer Vision, NLP, Edge Impulse', tr: 'PyTorch, scikit-learn, Bilgisayarlı Görü, NLP, Edge Impulse' },
                images: []
            },
            {
                title: { en: 'DevOps & Systems', tr: 'DevOps ve Sistemler' },
                description: { en: 'Docker, Linux, GitHub Actions, Raspberry Pi, ESP32, ROS2, MAVLink', tr: 'Docker, Linux, GitHub Actions, Raspberry Pi, ESP32, ROS2, MAVLink' },
                images: []
            }
        ]
    }
}

const work = {
    label: { en: 'Projects', tr: 'Projeler' },
    title: { en: 'Projects', tr: 'Projeler' },
    description: { en: 'Selected backend, AI, security and embedded-system projects', tr: 'Seçili backend, yapay zekâ, güvenlik ve gömülü sistem projeleri' }
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
    title: { en: 'Projects', tr: 'Projeler' },
    description: { en: 'Selected backend, AI, security and embedded-system projects', tr: 'Seçili backend, yapay zekâ, güvenlik ve gömülü sistem projeleri' },
    items: [
        {
            id: 'pn-ai',
            icon: 'document',
            badges: [{ en: 'Backend & AI', tr: 'Backend ve Yapay Zekâ' }],
            title: { en: 'PN_AI — VoIP Log Analysis Platform', tr: 'PN_AI — VoIP Log Analiz Platformu' },
            description: { en: 'Correlates fragmented Android and iOS VoIP events and produces deterministic root-cause classifications, evidence and timelines.', tr: 'Dağınık Android ve iOS VoIP olaylarını ilişkilendirerek deterministik kök neden sınıflandırmaları, kanıtlar ve zaman çizelgeleri üretir.' },
            year: '2026',
            status: { en: 'Completed internship project', tr: 'Tamamlanmış staj projesi' },
            tags: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker'],
            github: 'https://github.com/Aliemree/tcell_pn_analyzer',
            demo: '',
            images: []
        },
        {
            id: 'classical-cipher-studio',
            icon: 'shield',
            badges: [{ en: 'Network Security', tr: 'Ağ Güvenliği' }],
            title: { en: 'Classical Cipher Studio', tr: 'Classical Cipher Studio' },
            description: { en: 'Makes eight classical cipher algorithms inspectable through parallel C# and TypeScript implementations and step-by-step visualization.', tr: 'Sekiz klasik şifreleme algoritmasını paralel C# ve TypeScript uygulamaları ve adım adım görselleştirme ile incelenebilir hâle getirir.' },
            year: '2025',
            status: { en: 'Available', tr: 'Yayında' },
            tags: ['C#', '.NET', 'Next.js', 'TypeScript', 'xUnit'],
            github: 'https://github.com/Aliemree/network_security',
            demo: 'https://network-security-phi.vercel.app/',
            images: []
        },
        {
            id: 'ids-dashboard',
            icon: 'signal',
            badges: [{ en: 'AI Proof of Concept', tr: 'Yapay Zekâ Kavram Kanıtı' }],
            title: { en: 'IDS Dashboard', tr: 'IDS Dashboard' },
            description: { en: 'Demonstrates Isolation Forest inference, SQLite event history and WebSocket updates in an honest anomaly-monitoring proof of concept.', tr: 'Isolation Forest çıkarımı, SQLite olay geçmişi ve WebSocket güncellemelerini dürüst bir anomali izleme kavram kanıtında gösterir.' },
            year: '2026',
            status: { en: 'Proof of concept', tr: 'Kavram kanıtı' },
            tags: ['Python', 'FastAPI', 'scikit-learn', 'Next.js', 'WebSocket'],
            github: 'https://github.com/Aliemree/ids-dashboard',
            demo: '',
            images: []
        },
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
