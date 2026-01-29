'use client';

import { useTranslations } from 'next-intl';
import {
    Flex,
    Text,
    Heading,
    Icon,
    SmartLink,
} from '@/once-ui/components';
import { projects } from '@/app/resources/content';

interface ProjectItemProps {
    id: string;
    icon: string;
    badges: Array<{en: string; tr: string}>;
    title: string;
    description: string;
    year: string;
    status: string;
    tags: string[];
    locale: string;
}

function ProjectItem({
    id,
    icon,
    badges,
    title,
    description,
    year,
    status,
    tags,
    locale
}: ProjectItemProps) {
    return (
        <SmartLink
            href={`/${locale}/work/${id}`}
            style={{ textDecoration: 'none', width: '100%' }}
        >
            <Flex
                fillWidth
                padding="24"
                gap="20"
                radius="xl"
                alignItems="center"
                style={{ 
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.2)',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                }}
                onMouseEnter={(e: any) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.85) 100%)';
                }}
                onMouseLeave={(e: any) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.2)';
                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)';
                }}
            >
                {/* Icon */}
                <Flex
                    padding="16"
                    radius="l"
                    alignItems="center"
                    justifyContent="center"
                    style={{ 
                        width: '56px',
                        height: '56px',
                        minWidth: '56px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                    }}
                >
                    <Icon 
                        name={icon as any} 
                        size="l"
                        onBackground="brand-medium"
                    />
                </Flex>

                {/* Content */}
                <Flex
                    direction="column"
                    gap="8"
                    flex={1}
                    style={{ minWidth: 0 }}
                >
                    <Flex alignItems="center" gap="8" wrap>
                        <Heading 
                            as="h3" 
                            variant="heading-strong-m"
                            style={{ lineHeight: '1.3' }}
                        >
                            {title}
                        </Heading>
                        {badges.map((badgeObj, index) => {
                            const badgeText = (badgeObj as any)[locale as 'en' | 'tr'];
                            const isRankingBadge = badgeText.includes('4') && (badgeText.includes('Turkey') || badgeText.includes('Türkiye'));
                            return (
                                <Text
                                    key={index}
                                    paddingX="12"
                                    paddingY="4"
                                    variant="label-default-s"
                                    style={{
                                        background: isRankingBadge
                                            ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                            : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                                        color: 'white',
                                        borderRadius: '16px',
                                        fontWeight: '600',
                                        fontSize: '10px',
                                        letterSpacing: '0.5px',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                        minWidth: '100px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {badgeText}
                                </Text>
                            );
                        })}
                    </Flex>
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        style={{
                            lineHeight: '1.5',
                            opacity: 0.8,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {description}
                    </Text>
                    
                    {/* Meta Info */}
                    <Flex alignItems="center" gap="16" style={{ marginTop: '4px' }}>
                        <Flex alignItems="center" gap="8">
                            <Icon name="calendar" size="xs" onBackground="neutral-weak" />
                            <Text variant="body-default-s" onBackground="neutral-weak" style={{ opacity: 0.7 }}>
                                {year}
                            </Text>
                        </Flex>
                        <Flex alignItems="center" gap="8">
                            <Flex
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: '#10b981',
                                }}
                            />
                            <Text variant="body-default-s" style={{ color: '#10b981', fontSize: '12px' }}>
                                {status}
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>

                {/* Arrow */}
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    style={{ 
                        minWidth: '32px',
                        opacity: 0.5,
                        transition: 'opacity 0.2s ease',
                    }}
                >
                    <Icon name="arrowRight" size="m" onBackground="neutral-weak" />
                </Flex>
            </Flex>
        </SmartLink>
    );
}

interface ProjectsProps {
    range?: [number, number?];
    locale: string;
}

export function Projects({ range, locale }: ProjectsProps) {
    const t = useTranslations();
    const currentLocale = (locale || t('locale') || 'en') as 'en' | 'tr';
    
    // Get projects data
    const projectsData = projects.items;
    
    const displayedProjects = range
        ? projectsData.slice(range[0] - 1, range[1] ?? projectsData.length)
        : projectsData;

    return (
        <Flex
            direction="column"
            fillWidth
            gap="xl"
        >
            {/* Header */}
            <Flex
                direction="column"
                fillWidth
                gap="m"
            >
                <Heading variant="heading-strong-xl">
                    {(projects.title as any)[currentLocale] || (projects.title as any).en}
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    style={{ 
                        maxWidth: '650px',
                        lineHeight: '1.7',
                    }}
                >
                    {(projects.description as any)[currentLocale] || (projects.description as any).en}
                </Text>
            </Flex>

            {/* Projects List */}
            <Flex
                direction="column"
                fillWidth
                gap="16"
            >
                {displayedProjects.map((project) => {
                    return (
                        <ProjectItem
                            key={project.id}
                            id={project.id}
                            icon={project.icon}
                            badges={project.badges}
                            title={(project.title as any)[currentLocale]}
                            description={(project.description as any)[currentLocale]}
                            year={project.year}
                            status={(project.status as any)[currentLocale]}
                            tags={project.tags}
                            locale={currentLocale}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
}