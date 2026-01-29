import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow } from '@/once-ui/components';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = await getTranslations();
	const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
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

export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m"
				alignItems="center">
				<Flex
					direction="column"
					fillWidth maxWidth="s"
					alignItems="center"
					gap="4">
					<RevealFx
						translateY="4" fillWidth justifyContent="center" paddingBottom="m" style={{ paddingTop: '20px' }}>
						<Flex justifyContent="center" alignItems="center" fillWidth>
							<Avatar
								src={person.avatar}
								size="xl"
								style={{
									width: '200px',
									height: '200px',
									boxShadow: '0 0 40px rgba(99, 102, 241, 0.35)',
									border: '3px solid rgba(139, 92, 246, 0.3)'
								}}
							/>
						</Flex>
					</RevealFx>
					<RevealFx
						translateY="4" delay={0.1} fillWidth justifyContent="center" paddingBottom="4">
						<Heading
							wrap="balance"
							variant="display-strong-xl"
							style={{
								textAlign: 'center',
								background: 'linear-gradient(135deg, var(--brand-on-background-strong) 0%, var(--accent-on-background-strong) 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text'
							}}>
							{person.name}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="4" delay={0.15} fillWidth justifyContent="center" paddingBottom="s">
						<Flex
							padding="8"
							paddingX="16"
							radius="full"
							alignItems="center"
							justifyContent="center"
							style={{
								background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
								border: '1px solid rgba(99, 102, 241, 0.25)',
								backdropFilter: 'blur(8px)'
							}}>
							<Text
								variant="body-strong-m"
								onBackground="brand-medium"
								style={{ textAlign: 'center', letterSpacing: '0.02em' }}>
								{typeof person.role === 'object' ? person.role[locale] || person.role.en : person.role}
							</Text>
						</Flex>
					</RevealFx>
					{/* Current Status Highlights */}
					<RevealFx
						translateY="4" delay={0.18} fillWidth justifyContent="center" paddingBottom="l">
						<Flex gap="8" wrap justifyContent="center" alignItems="center">
							<Flex
								padding="4"
								paddingX="12"
								radius="full"
								alignItems="center"
								gap="8"
								style={{
									background: 'rgba(239, 68, 68, 0.12)',
									border: '1px solid rgba(239, 68, 68, 0.3)',
								}}>
								<Text style={{ fontSize: '10px' }}>🎓</Text>
								<Text variant="label-default-s" style={{ color: 'rgb(239, 68, 68)', fontSize: '11px' }}>
									{locale === 'tr' ? 'TUSAŞ Destekli Bitirme Tezi' : 'TUSAŞ Graduation Project'}
								</Text>
							</Flex>
							<Flex
								padding="4"
								paddingX="12"
								radius="full"
								alignItems="center"
								gap="8"
								style={{
									background: 'rgba(59, 130, 246, 0.12)',
									border: '1px solid rgba(59, 130, 246, 0.3)',
								}}>
								<Text style={{ fontSize: '10px' }}>📱</Text>
								<Text variant="label-default-s" style={{ color: 'rgb(59, 130, 246)', fontSize: '11px' }}>
									{locale === 'tr' ? 'Turkcell USİD Stajyeri' : 'Turkcell USİD Intern'}
								</Text>
							</Flex>
						</Flex>
					</RevealFx>
					<RevealFx
						translateY="4" delay={0.22} fillWidth justifyContent="center" paddingBottom="m">
						<Heading
							wrap="balance"
							variant="display-strong-l"
							style={{ textAlign: 'center' }}>
							{home.headline}
						</Heading>
					</RevealFx>
					<RevealFx
						translateY="8" delay={0.25} fillWidth justifyContent="center" paddingBottom="l">
						<Flex fillWidth justifyContent="center">
							<Text
								wrap="pretty"
								onBackground="neutral-weak"
								variant="heading-default-l"
								style={{
									textAlign: 'center',
									maxWidth: '700px',
									width: '100%',
									display: 'block',
									lineHeight: '1.6'
								}}>
								{home.subline}
							</Text>
						</Flex>
					</RevealFx>
					<RevealFx translateY="12" delay={0.35}>
						<Flex gap="12" wrap justifyContent="center">
							<Button
								id="about"
								data-border="rounded"
								href={`/${locale}/about`}
								variant="primary"
								size="m">
								<Flex gap="8" alignItems="center">
									{typeof about.title === 'object' ? about.title[locale] || about.title.en : t("about.title")}
									<Arrow trigger="#about" />
								</Flex>
							</Button>
							<Button
								id="projects"
								data-border="rounded"
								href={`/${locale}/work`}
								variant="secondary"
								size="m">
								<Flex gap="8" alignItems="center">
									{locale === 'tr' ? 'Projelerim' : 'My Projects'}
									<Arrow trigger="#projects" />
								</Flex>
							</Button>
						</Flex>
					</RevealFx>
				</Flex>

			</Flex>

			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
