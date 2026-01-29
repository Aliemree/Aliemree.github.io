import { Flex } from '@/once-ui/components';
import { Achievements } from '@/components/achievements/Achievements';
import { baseURL, renderContent } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {

    const t = await getTranslations();
    const { achievements } = renderContent(t);

	const title = (achievements.title as any)[locale] || (achievements.title as any).en;
	const description = (achievements.description as any)[locale] || (achievements.description as any).en;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/achievements/`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function AchievementsPage(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const t = useTranslations();
    const { person, achievements } = renderContent(t);

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column"
            paddingTop="l"
            paddingBottom="l"
		>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: (achievements.title as any)[locale] || (achievements.title as any).en,
                        description: (achievements.description as any)[locale] || (achievements.description as any).en,
                        url: `https://${baseURL}/achievements`,
                        author: {
                            '@type': 'Organization',
                            name: person.name,
                        },
                    }),
                }}
            />
            <Achievements />
        </Flex>
    );
}
