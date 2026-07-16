import {
    person as personData,
    social,
    newsletter as newsletterData,
    home as homeData,
    about as aboutData,
    work as workData,
    gallery as galleryData,
    achievements,
    team,
    stats,
    projects,
} from './content';

const createI18nContent = (t) => {
    const locale = t('locale') === 'tr' ? 'tr' : 'en';
    const localize = (value) => {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            return value[locale] || value.en || value;
        }
        return value;
    };

    const person = {
        ...personData,
        role: t('person.role'),
    };

    const newsletter = {
        ...newsletterData,
        title: t('newsletter.title'),
        description: t('newsletter.description'),
    };

    const home = {
        ...homeData,
        label: t('nav.home'),
        title: t('home.title'),
        description: t('home.description'),
        headline: t('home.headline'),
        subline: t('home.subline'),
        availability: t('home.availability'),
    };

    const about = {
        ...aboutData,
        label: t('nav.about'),
        title: t('about.title'),
        description: t('about.description'),
        intro: {
            ...aboutData.intro,
            title: t('about.intro.title'),
            description: t('about.intro.description'),
        },
        work: {
            ...aboutData.work,
            title: t('nav.experience'),
            experiences: aboutData.work.experiences.map((experience) => ({
                ...experience,
                company: localize(experience.company),
                timeframe: localize(experience.timeframe),
                role: localize(experience.role),
                achievements: experience.achievements.map(localize),
            })),
        },
        studies: {
            ...aboutData.studies,
            title: localize(aboutData.studies.title),
            institutions: aboutData.studies.institutions.map((institution) => ({
                ...institution,
                name: localize(institution.name),
                description: localize(institution.description),
            })),
        },
        technical: {
            ...aboutData.technical,
            title: t('about.technical.title'),
            skills: aboutData.technical.skills.map((skill) => ({
                ...skill,
                title: localize(skill.title),
                description: localize(skill.description),
            })),
        },
    };

    const work = {
        ...workData,
        label: t('nav.work'),
        title: t('work.title'),
        description: t('work.description'),
    };

    const gallery = {
        ...galleryData,
        label: t('nav.gallery'),
        title: t('gallery.title'),
        description: t('gallery.description'),
    };

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
        projects,
    };
};

export { createI18nContent };
