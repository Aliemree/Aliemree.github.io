import { Flex, Text, Heading, Button } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ProjectGallery } from '@/components/work/ProjectGallery';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
	const title = locale === 'tr' ? 'Sunumlarımız' : 'Our Presentations';
	const description = locale === 'tr'
        ? 'Geliştirdiğimiz yenilikçi projelerimizi ve çözümlerimizi sunduğumuz akademik ve sektörel sunumlarımız.'
        : 'Our academic and sectoral presentations where we showcase our innovative projects and solutions.';
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/presentations/`,
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

export default function PresentationsPage(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const t = useTranslations();
    const isTR = locale === 'tr';

    return (
        <Flex
			fillWidth maxWidth="m"
			direction="column"
            paddingTop="l"
            paddingBottom="l"
            gap="xl"
		>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        headline: isTR ? 'Sunumlarımız' : 'Our Presentations',
                        description: isTR
                            ? 'Geliştirdiğimiz yenilikçi projelerimizi ve çözümlerimizi sunduğumuz akademik ve sektörel sunumlarımız.'
                            : 'Our academic and sectoral presentations where we showcase our innovative projects and solutions.',
                        url: `https://${baseURL}/presentations`,
                    }),
                }}
            />

            <Flex
                direction="column"
                fillWidth
                gap="s"
            >
                <Heading variant="heading-strong-xl">
                    {isTR ? 'Sunumlarımız' : 'Our Presentations'}
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                >
                    {isTR
                        ? 'Geliştirdiğimiz yenilikçi projelerimizi ve çözümlerimizi sunduğumuz akademik ve sektörel sunumlarımız. Bu sunumlar, teknoloji ve yapay zeka alanındaki uzmanlığımızı ve vizyonumuzu yansıtmaktadır.'
                        : 'Our academic and sectoral presentations where we showcase our innovative projects and solutions. These presentations reflect our expertise and vision in the field of technology and artificial intelligence.'}
                </Text>
            </Flex>

            {/* Smart UAV Maintenance Model Presentation */}
            <Flex
                direction="column"
                fillWidth
                gap="0"
                radius="l"
                border="neutral-medium" borderStyle="solid-1"
                style={{ overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
            >
                <Flex
                    position="relative"
                    style={{ width: '100%', height: '300px', overflow: 'hidden' }}
                >
                    <Image
                        src="/images/projects/idef_1.jpg"
                        alt={isTR ? 'Akıllı İHA Bakım Modeli' : 'Smart UAV Maintenance Model'}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Flex>

                <Flex
                    direction="column"
                    fillWidth
                    padding="xl"
                    gap="l"
                >
                    <Flex
                        direction="column"
                        gap="s"
                    >
                        <Flex gap="8" wrap>
                            <Text
                                paddingX="12"
                                paddingY="4"
                                variant="label-default-s"
                                style={{ backgroundColor: '#2563eb', color: 'white', borderRadius: '8px' }}
                            >
                                IDEF 2025
                            </Text>
                            <Text
                                paddingX="12"
                                paddingY="4"
                                variant="label-default-s"
                                style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '8px' }}
                            >
                                {isTR ? 'Savunma Sanayii' : 'Defense Industry'}
                            </Text>
                        </Flex>

                        <Heading as="h2" variant="heading-strong-xl">
                            {isTR ? 'Akıllı İHA Bakım Modeli' : 'Smart UAV Maintenance Model'}
                        </Heading>

                        <Heading as="h3" variant="heading-default-l" onBackground="neutral-weak">
                            {isTR ? 'Görev Güvenliğinde Yeni Bir Dönem' : 'A New Era in Mission Safety'}
                        </Heading>
                    </Flex>

                    <Flex
                        direction="column"
                        gap="m"
                    >
                        <Text variant="label-default-s" onBackground="brand-weak">
                            {isTR ? 'PROJEMİZ NE SUNUYOR?' : 'WHAT DOES OUR PROJECT OFFER?'}
                        </Text>
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            {isTR
                                ? 'AI2X\'in geliştirdiği sistem, tüm İHA türlerinde çoklu sensörler ve yapay zeka (LSTM, CNN, Autoencoder) ile anlık arıza tespiti ve kestirimci bakım sağlar. Görev güvenliğini artırır, maliyetleri düşürür, operasyonel sürekliliği destekler.'
                                : 'The system developed by AI2X provides real-time fault detection and predictive maintenance with multiple sensors and artificial intelligence (LSTM, CNN, Autoencoder) in all UAV types. It increases mission safety, reduces costs, and supports operational continuity.'}
                        </Text>
                    </Flex>

                    {/* Stats */}
                    <Flex
                        fillWidth
                        gap="16"
                        wrap
                    >
                        {[
                            { value: '5,000+', label: isTR ? 'Saatlik Test Verisi' : 'Hours of Test Data' },
                            { value: '96%', label: isTR ? 'Anomali Tespit Başarısı' : 'Anomaly Detection Success' },
                            { value: '%40', label: isTR ? 'Daha Düşük Bakım Maliyeti' : 'Lower Maintenance Cost' },
                        ].map((stat, index) => (
                            <Flex
                                key={index}
                                flex={1}
                                direction="column"
                                gap="4"
                                padding="16"
                                radius="l"
                                style={{ minWidth: '140px', backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                            >
                                <Text variant="heading-strong-l" onBackground="brand-strong">
                                    {stat.value}
                                </Text>
                                <Text variant="body-default-s" onBackground="neutral-weak">
                                    {stat.label}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>

                    {/* Benefits */}
                    <Flex
                        direction="column"
                        gap="m"
                    >
                        <Text variant="label-default-s" onBackground="brand-weak">
                            {isTR ? 'SAVUNMA SANAYİİ İÇİN KATKILARIMIZ' : 'OUR CONTRIBUTIONS TO THE DEFENSE INDUSTRY'}
                        </Text>
                        <Flex direction="column" gap="8">
                            {[
                                isTR ? 'Görev Sürekliliği Artışı' : 'Increased Mission Continuity',
                                isTR ? 'Operasyon Riskleri Azaltılması' : 'Reduced Operation Risks',
                                isTR ? 'Proaktif Bakım Planlanması' : 'Proactive Maintenance Planning',
                                isTR ? 'Yerli Teknolojilerin Güçlendirilmesi' : 'Strengthening Domestic Technologies',
                            ].map((benefit, index) => (
                                <Flex
                                    key={index}
                                    gap="8"
                                    alignItems="center"
                                >
                                    <Text style={{ fontSize: '16px' }}>✓</Text>
                                    <Text variant="body-default-s">
                                        {benefit}
                                    </Text>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>

                    <Flex
                        gap="12"
                        wrap
                    >
                        <Button
                            href={`/${locale}/contact`}
                            variant="primary"
                            size="l"
                        >
                            {isTR ? 'İletişime Geçin' : 'Contact Us'}
                        </Button>
                        <Button
                            href="https://rteuai2x.idef.com.tr/"
                            target="_blank"
                            variant="secondary"
                            size="l"
                            suffixIcon="arrowRight"
                        >
                            IDEF Portal
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            {/* IDEF Image Gallery - Outside the card */}
            <Flex
                direction="column"
                fillWidth
                gap="m"
            >
                <Heading variant="heading-strong-l">
                    {isTR ? 'Fuara Katılımımızdan Görseller' : 'Fair Participation Photos'}
                </Heading>
                <ProjectGallery
                    images={[
                        { src: '/images/projects/idef/01_idef.jpeg', alt: 'IDEF 2025 Photo 1' },
                        { src: '/images/projects/idef/02_idef.jpeg', alt: 'IDEF 2025 Photo 2' },
                        { src: '/images/projects/idef/03_idef.jpeg', alt: 'IDEF 2025 Photo 3' },
                        { src: '/images/projects/idef/04_idef.jpeg', alt: 'IDEF 2025 Photo 4' },
                    ]}
                />
            </Flex>
        </Flex>
    );
}
