import { Flex, Heading, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const title = locale === 'tr' ? 'Deneyim' : 'Experience';
    const description = locale === 'tr'
        ? 'Ali Emre’nin yazılım, yapay zekâ ve mühendislik deneyimi.'
        : 'Ali Emre’s software, AI and engineering experience.';
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/experience`,
            images: [{ url: ogImage, alt: title }],
        },
    };
}

export default function Experience(
    { params: { locale } }: { params: { locale: string } }
) {
    unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { about } = renderContent(t);

    return (
        <Flex fillWidth maxWidth="m" direction="column" paddingY="xl" gap="40">
            <Flex direction="column" gap="m">
                <Heading variant="display-strong-l">
                    {locale === 'tr' ? 'Deneyim' : 'Experience'}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                    {locale === 'tr'
                        ? 'Backend, yapay zekâ, otonom sistemler ve ekip liderliği alanlarındaki çalışmalarım.'
                        : 'Work across backend engineering, AI, autonomous systems and team leadership.'}
                </Text>
            </Flex>

            <Flex direction="column" gap="xl">
                {about.work.experiences.map((experience, index) => (
                    <Flex
                        key={`${experience.company}-${index}`}
                        direction="column"
                        gap="12"
                        paddingBottom="xl"
                        style={{ borderBottom: '1px solid var(--neutral-alpha-medium)' }}>
                        <Flex fillWidth justifyContent="space-between" alignItems="flex-end" wrap gap="8">
                            <Heading as="h2" variant="heading-strong-l">
                                {experience.company}
                            </Heading>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                                {experience.timeframe}
                            </Text>
                        </Flex>
                        <Text variant="body-strong-s" onBackground="brand-weak">
                            {experience.role}
                        </Text>
                        <Flex as="ul" direction="column" gap="12" paddingLeft="20">
                            {experience.achievements.map((achievement, achievementIndex) => (
                                <Text as="li" variant="body-default-m" key={achievementIndex}>
                                    {achievement}
                                </Text>
                            ))}
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
