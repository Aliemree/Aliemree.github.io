'use client';

import { useTranslations } from 'next-intl';
import {
    Flex,
    Text,
    Heading,
    Button,
    Icon,
} from '@/once-ui/components';
import { achievements } from '@/app/resources/content';

interface AchievementCardProps {
    icon: string;
    badge: string;
    title: string;
    description: string;
    year: string;
    link?: string;
}

function AchievementCard({
    icon,
    badge,
    title,
    description,
    year,
    link
}: AchievementCardProps) {
    return (
        <Flex
            direction="column"
            padding="24"
            gap="20"
            radius="xl"
            style={{ 
                width: '100%',
                maxWidth: '380px',
                minWidth: '320px',
                flex: '1 1 320px',
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)',
                border: '1px solid rgba(71, 85, 105, 0.25)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
            }}
            onMouseEnter={(e: any) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.4)';
            }}
            onMouseLeave={(e: any) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.25)';
            }}
        >
            {/* Badge - Sağ üst köşede */}
            <Flex
                style={{ 
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                }}
            >
                <Text
                    paddingX="12"
                    paddingY="4"
                    variant="label-default-s"
                    style={{ 
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', 
                        color: 'white', 
                        borderRadius: '20px',
                        fontWeight: '600',
                        fontSize: '11px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                    }}
                >
                    {badge}
                </Text>
            </Flex>

            {/* Icon */}
            <Flex
                padding="16"
                radius="xl"
                alignItems="center"
                justifyContent="center"
                style={{ 
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.12) 100%)',
                    border: '1px solid rgba(147, 51, 234, 0.15)',
                    flexShrink: 0,
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
                gap="12"
                fillWidth
                style={{ marginTop: '4px' }}
            >
                <Heading 
                    as="h3" 
                    variant="heading-strong-m"
                    style={{
                        lineHeight: '1.3',
                        paddingRight: '80px',
                    }}
                >
                    {title}
                </Heading>
                <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    style={{
                        lineHeight: '1.6',
                        opacity: 0.85,
                    }}
                >
                    {description}
                </Text>
            </Flex>

            {/* Footer */}
            <Flex
                fillWidth
                justifyContent="space-between"
                alignItems="center"
                style={{ 
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(71, 85, 105, 0.15)',
                }}
            >
                <Flex alignItems="center" gap="8">
                    <Icon 
                        name="calendar" 
                        size="s"
                        onBackground="neutral-weak"
                    />
                    <Text
                        variant="body-strong-s"
                        onBackground="neutral-weak"
                        style={{ opacity: 0.8 }}
                    >
                        {year}
                    </Text>
                </Flex>
                {link && (
                    <Button
                        href={link}
                        target="_blank"
                        variant="tertiary"
                        size="s"
                        suffixIcon="arrowRight"
                        style={{
                            padding: '6px 12px',
                        }}
                    >
                        Details
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}

export function Achievements() {
    const t = useTranslations();

    // Get achievements data based on locale
    const achievementsData = achievements.items;
    const locale = t('locale') as 'en' | 'tr';

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
                style={{ marginBottom: '8px' }}
            >
                <Heading variant="heading-strong-xl">
                    {(achievements.title as any)[locale] || (achievements.title as any).en}
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    style={{ 
                        maxWidth: '600px',
                        lineHeight: '1.7',
                    }}
                >
                    {(achievements.description as any)[locale] || (achievements.description as any).en}
                </Text>
            </Flex>

            {/* Cards Grid */}
            <Flex
                fillWidth
                wrap
                gap="24"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {achievementsData.map((achievement) => {
                    return (
                        <AchievementCard
                            key={achievement.id}
                            icon={achievement.icon}
                            badge={(achievement.badge as any)[locale]}
                            title={(achievement.title as any)[locale]}
                            description={(achievement.description as any)[locale]}
                            year={achievement.year}
                            link={achievement.link}
                        />
                    );
                })}
            </Flex>
        </Flex>
    );
}
