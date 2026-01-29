"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton, Text } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { renderContent } from "@/app/resources";
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                { locale: nextLocale }
            )
        })
    }

    const t = useTranslations();
    const { person, home, about, work, gallery, team } = renderContent(t);

    // Navigation items with labels
    const navItems = [
        { path: '/', icon: 'home', content: home.label, enabled: routes['/'] },
        { path: '/about', icon: 'globe', content: about.label, enabled: routes['/about'] },
        { path: '/achievements', icon: 'trophy', content: { en: 'Achievements', tr: 'Başarılarım' }, enabled: routes['/achievements'] },
        { path: '/work', icon: 'grid', content: work.label, enabled: routes['/work'] },
        { path: '/presentations', icon: 'presentation', content: { en: 'Presentations', tr: 'Sunumlar' }, enabled: routes['/presentations'] },
        { path: '/team', icon: 'users', content: team?.label || { en: 'Team', tr: 'Ekip' }, enabled: routes['/team'] },
        { path: '/gallery', icon: 'gallery', content: gallery.label, enabled: routes['/gallery'] },
        { path: '/contact', icon: 'email', content: { en: 'Contact', tr: 'İletişim' }, enabled: routes['/contact'] },
    ];

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={9}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{ height: 'fit-content' }}
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                {/* Mobile language switcher - side card */}
                {routing.locales.length > 1 &&
                    <Flex
                        show="s"
                        position="fixed"
                        style={{
                            top: '80px',
                            right: '0',
                            cursor: 'pointer',
                            borderTopLeftRadius: 'var(--radius-m)',
                            borderBottomLeftRadius: 'var(--radius-m)',
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0'
                        }}
                        zIndex={11}
                        background="surface"
                        border="neutral-medium"
                        borderStyle="solid-1"
                        shadow="l"
                        padding="8"
                        minWidth="40"
                        minHeight="40"
                        justifyContent="center"
                        alignItems="center"
                        onClick={() => {
                            const currentLocale = params?.locale as string;
                            const nextLocale = currentLocale === 'en' ? 'tr' : 'en';
                            handleLanguageChange(nextLocale);
                        }}
                        className={isPending ? 'pointer-events-none opacity-60' : ''}>
                        <Text variant="body-strong-s">
                            {(params?.locale as string)?.toUpperCase() || 'EN'}
                        </Text>
                    </Flex>
                }
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    {routing.locales.length > 1 &&
                        <Flex
                            hide="s"
                            background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                            padding="4" gap="2"
                            justifyContent="center">
                            {i18n && routing.locales.map((locale, index) => (
                                <ToggleButton
                                    key={index}
                                    selected={params?.locale === locale}
                                    onClick={() => handleLanguageChange(locale)}
                                    className={isPending && 'pointer-events-none opacity-60' || ''}
                                >
                                    {locale.toUpperCase()}
                                </ToggleButton>
                            ))}
                        </Flex>
                    }
                </Flex>
                {/* Desktop Nav - Single Row */}
                <Flex hide="s" fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="2"
                            textVariant="body-default-s">
                            {navItems.filter(item => item.enabled).map((item) => {
                                const locale = (params?.locale || 'en') as 'en' | 'tr';
                                let label: string;
                                if (typeof item.content === 'object') {
                                    label = (item.content as any)[locale] || (item.content as any).en;
                                } else if (item.path === '/' && home.label && typeof home.label === 'object') {
                                    label = (home.label as any)[locale];
                                } else {
                                    label = item.content as string;
                                }
                                const href = item.path === '/' ? `/${locale}` : `/${locale}${item.path}`;

                                return (
                                    <ToggleButton
                                        key={item.path}
                                        prefixIcon={item.icon as any}
                                        href={href}
                                        selected={pathname === item.path || pathname.startsWith(item.path + '/')}>
                                        <Flex paddingX="2">{label}</Flex>
                                    </ToggleButton>
                                );
                            })}
                        </Flex>
                    </Flex>
                </Flex>
                {/* Mobile Nav - 4x2 Grid */}
                <Flex show="s" fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid-1" radius="m-4" shadow="l"
                        padding="4"
                        mobileDirection="column"
                        gap="2"
                        style={{ width: '100%' }}>
                        <Flex gap="2" justifyContent="center">
                            {navItems.filter(item => item.enabled).slice(0, 4).map((item) => {
                                const locale = (params?.locale || 'en') as 'en' | 'tr';
                                let label: string;
                                if (typeof item.content === 'object') {
                                    label = (item.content as any)[locale] || (item.content as any).en;
                                } else {
                                    label = item.content as string;
                                }
                                const href = item.path === '/' ? `/${locale}` : `/${locale}${item.path}`;

                                return (
                                    <ToggleButton
                                        key={item.path}
                                        prefixIcon={item.icon as any}
                                        href={href}
                                        selected={pathname === item.path || pathname.startsWith(item.path + '/')}>
                                    </ToggleButton>
                                );
                            })}
                        </Flex>
                        <Flex gap="2" justifyContent="center">
                            {navItems.filter(item => item.enabled).slice(4).map((item) => {
                                const locale = (params?.locale || 'en') as 'en' | 'tr';
                                let label: string;
                                if (typeof item.content === 'object') {
                                    label = (item.content as any)[locale] || (item.content as any).en;
                                } else {
                                    label = item.content as string;
                                }
                                const href = item.path === '/' ? `/${locale}` : `/${locale}${item.path}`;

                                return (
                                    <ToggleButton
                                        key={item.path}
                                        prefixIcon={item.icon as any}
                                        href={href}
                                        selected={pathname === item.path || pathname.startsWith(item.path + '/')}>
                                    </ToggleButton>
                                );
                            })}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        <Flex hide="s">
                            {display.time && (
                                <TimeDisplay timeZone={person.location} />
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}