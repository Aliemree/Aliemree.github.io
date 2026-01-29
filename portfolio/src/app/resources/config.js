const baseURL = 'aliemree.github.io'

// Enable localization
const i18n = true;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['tr', 'en'],      // Turkish first as default
    defaultLocale: 'tr'         // Turkish as default locale
}

const routes = {
    '/': true,
    '/about': true,
    '/achievements': true,
    '/work': true,
    '/presentations': false,    // Disabled for personal portfolio
    '/team': false,    // Disabled for personal portfolio
    '/gallery': true,
    '/contact': true,
}

// Enable password protection on selected routes
const protectedRoutes = {
}

const effects = {
    mask: 'cursor',
    gradient: {
        display: true,
        opacity: 0.4
    },
    dots: {
        display: true,
        opacity: 0.4,
        size: '24'
    },
    lines: {
        display: false,
    },
}

const style = {
    theme: 'dark',
    neutral: 'gray',
    brand: 'indigo',      // Personal branding color
    accent: 'violet',      // Accent color
    solid: 'contrast',
    solidStyle: 'flat',
    border: 'playful',
    surface: 'translucent',
    transition: 'all'
}

const display = {
    location: true,
    time: true
}

const mailchimp = {
    action: '',
    effects: {
        mask: 'topRight',
        gradient: {
            display: true,
            opacity: 0.6
        },
        dots: {
            display: false,
        },
        lines: {
            display: false,
        },
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };