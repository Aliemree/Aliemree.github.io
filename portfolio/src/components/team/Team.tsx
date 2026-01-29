'use client';

import { useTranslations } from 'next-intl';
import {
    Flex,
    Text,
    Heading,
    Button,
} from '@/once-ui/components';
import { team } from '@/app/resources/content';
import Image from 'next/image';

interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    skills: string[];
    social: {
        linkedIn?: string;
        github?: string;
    };
}

function TeamMemberCard({
    name,
    role,
    bio,
    avatar,
    skills,
    social
}: TeamMemberCardProps) {
    return (
        <Flex
            flex={1}
            direction="column"
            fillWidth
            padding="l"
            gap="m"
            radius="l"
            border="neutral-medium" borderStyle="solid-1"
            style={{ minHeight: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
        >
            <Flex
                direction="column"
                alignItems="center"
                gap="16"
                fillWidth
            >
                <Flex
                    position="relative"
                    style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden' }}
                >
                    <Image
                        src={avatar}
                        alt={name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </Flex>

                <Flex
                    direction="column"
                    gap="4"
                    alignItems="center"
                >
                    <Heading as="h3" variant="heading-strong-l" align="center">
                        {name}
                    </Heading>
                    <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                    >
                        {role}
                    </Text>
                </Flex>
            </Flex>

            <Flex
                direction="column"
                gap="12"
                fillWidth
            >
                <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    align="center"
                >
                    {bio}
                </Text>

                <Flex
                    wrap
                    gap="8"
                    justifyContent="center"
                >
                    {skills.map((skill, index) => (
                        <Text
                            key={index}
                            variant="label-default-s"
                            paddingX="8"
                            paddingY="4"
                            style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: '8px' }}
                            onBackground="neutral-strong"
                        >
                            {skill}
                        </Text>
                    ))}
                </Flex>
            </Flex>

            <Flex
                fillWidth
                gap="8"
                style={{ marginTop: 'auto' }}
                justifyContent="center"
            >
                {social.linkedIn && (
                    <Button
                        href={social.linkedIn}
                        target="_blank"
                        variant="tertiary"
                        size="s"
                        prefixIcon="linkedin"
                    >
                        LinkedIn
                    </Button>
                )}
                {social.github && (
                    <Button
                        href={social.github}
                        target="_blank"
                        variant="tertiary"
                        size="s"
                        prefixIcon="github"
                    >
                        GitHub
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}

export function Team() {
    const t = useTranslations();
    const locale = t('locale') as 'en' | 'tr';
    const teamData = team.members;

    return (
        <Flex
            direction="column"
            fillWidth
            gap="xl"
        >
            <Flex
                direction="column"
                fillWidth
                gap="s"
                maxWidth="m"
            >
                <Heading variant="heading-strong-xl">
                    {(team.title as any)[locale]}
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                >
                    {(team.description as any)[locale]}
                </Text>
            </Flex>

            <Flex
                fillWidth
                wrap
                gap="16"
            >
                {teamData.map((member: any) => (
                    <TeamMemberCard
                        key={member.id}
                        name={member.name}
                        role={(member.role as any)[locale]}
                        bio={(member.bio as any)[locale]}
                        avatar={member.avatar}
                        skills={(member.skills as any)[locale]}
                        social={member.social}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
