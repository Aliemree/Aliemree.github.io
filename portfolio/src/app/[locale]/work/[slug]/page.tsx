import { notFound } from 'next/navigation'
import { Button, Flex, Heading, Text } from '@/once-ui/components'
import { baseURL } from '@/app/resources';
import { routing } from '@/i18n/routing';
import { unstable_setRequestLocale } from 'next-intl/server';
import { projects } from '@/app/resources/content';
import { person } from '@/app/resources/content';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx';
import { ProjectGallery } from '@/components/work/ProjectGallery';

interface WorkParams {
    params: {
        slug: string;
		locale: string;
    };
}

export async function generateStaticParams(): Promise<{ slug: string; locale: string }[]> {
	const locales = routing.locales;
    const allParams: { slug: string; locale: string }[] = [];

    for (const locale of locales) {
        for (const project of projects.items) {
            allParams.push({
                slug: project.id,
                locale: locale,
            });
        }
    }

    return allParams;
}

export function generateMetadata({ params: { slug, locale } }: WorkParams) {
	const project = projects.items.find((p) => p.id === slug);
	const currentLocale = locale as 'en' | 'tr';

	if (!project) {
		return
	}

	const title = (project.title as any)[currentLocale] || (project.title as any).en;
	const description = (project.description as any)[currentLocale] || (project.description as any).en;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			url: `https://${baseURL}/${locale}/work/${slug}`,
			images: [{ url: ogImage }],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default async function Project({ params }: WorkParams) {
	const { slug, locale } = params;
	unstable_setRequestLocale(locale);
	const currentLocale = locale as 'en' | 'tr';

	const project = projects.items.find((p) => p.id === slug);

	if (!project) {
		notFound()
	}

	const title = (project.title as any)[currentLocale] || (project.title as any).en;
	const description = (project.description as any)[currentLocale] || (project.description as any).en;
	const images = (project as any).images || [];

	// Load MDX content if exists
	let mdxContent: string | null = null;
	try {
		const mdxPath = path.join(process.cwd(), 'src', 'app', '[locale]', 'work', 'projects', currentLocale, `${slug}.mdx`);
		if (fs.existsSync(mdxPath)) {
			const source = fs.readFileSync(mdxPath, 'utf8');
			// Remove frontmatter
			const content = source.replace(/^---[\s\S]*?---/, '').trim();
			mdxContent = content;
		}
	} catch (error) {
		console.error('Error loading MDX:', error);
	}

	return (
		<Flex as="section"
			fillWidth maxWidth="l"
			direction="column"
			gap="40"
			paddingY="xl">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'CreativeWork',
						headline: title,
						description: description,
						url: `https://${baseURL}/${locale}/work/${slug}`,
						author: {
							'@type': 'Organization',
							name: person.name,
						},
					}),
				}}
			/>

			{/* Minimal Header */}
			<Flex fillWidth direction="column" gap="24">
				{/* Back Button */}
				<Button
					href={`/${locale}/work`}
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					{currentLocale === 'tr' ? 'Projeler' : 'Projects'}
				</Button>

				{/* Project Title */}
				<Heading variant="display-strong-l" style={{ lineHeight: '1.2' }}>
					{title}
				</Heading>

				{/* Badges */}
				{project.badges && project.badges.length > 0 && (
					<Flex gap="12" wrap>
						{project.badges.map((badgeObj, index) => {
							const badgeText = (badgeObj as any)[currentLocale];
							return (
								<Text
									key={index}
									paddingX="16"
									paddingY="8"
									variant="label-default-s"
									style={{
										background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
										color: 'white',
										borderRadius: '24px',
										fontWeight: '600',
										fontSize: '12px',
										letterSpacing: '0.5px',
										textTransform: 'uppercase',
									}}
								>
									{badgeText}
								</Text>
							);
						})}
					</Flex>
				)}
			</Flex>

			{/* Description - Simplified Card */}
			<Flex
				direction="column"
				gap="16"
				fillWidth
				padding="24"
				radius="xl"
				style={{
					background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
					border: '1px solid rgba(71, 85, 105, 0.15)',
				}}
			>
				<Text
					variant="body-default-l"
					onBackground="neutral-weak"
					style={{ lineHeight: '1.8' }}
				>
					{description}
				</Text>
			</Flex>

			{/* Image Gallery */}
			{images.length > 0 && (
				<Flex direction="column" gap="16" fillWidth>
					<Heading variant="heading-strong-l">
						{currentLocale === 'tr' ? 'Proje Görselleri' : 'Project Gallery'}
					</Heading>
					<ProjectGallery images={images} />
				</Flex>
			)}

			{/* MDX Content */}
			{mdxContent ? (
				<Flex
					direction="column"
					gap="m"
					fillWidth
					padding="32"
					radius="xl"
					style={{
						background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
						border: '1px solid rgba(71, 85, 105, 0.15)',
					}}
					className="mdx-content"
				>
					<MDXRemote source={mdxContent} components={mdxComponents} />
				</Flex>
			) : null}
		</Flex>
	)
}
