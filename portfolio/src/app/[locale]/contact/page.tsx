'use client';

import { Flex, Text, Heading, Button, Icon } from '@/once-ui/components';
import { baseURL } from '@/app/resources';
import { useParams } from 'next/navigation';

interface ContactCardProps {
    icon: string;
    title: string;
    value: string;
    link?: string;
}

function ContactCard({ icon, title, value, link }: ContactCardProps) {
    const content = (
        <Flex
            direction="column"
            padding="24"
            gap="16"
            radius="xl"
            alignItems="center"
            style={{
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.85) 100%)',
                border: '1px solid rgba(71, 85, 105, 0.25)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: link ? 'pointer' : 'default',
                flex: '1 1 200px',
                minWidth: '200px',
            }}
            onMouseEnter={(e: any) => {
                if (link) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25)';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                }
            }}
            onMouseLeave={(e: any) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.25)';
            }}
        >
            <Flex
                padding="16"
                radius="l"
                alignItems="center"
                justifyContent="center"
                style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
            >
                <Icon name={icon as any} size="l" onBackground="brand-medium" />
            </Flex>
            <Text variant="label-default-s" onBackground="neutral-weak" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' }}>
                {title}
            </Text>
            <Text variant="body-strong-m" style={{ textAlign: 'center', wordBreak: 'break-word' }}>
                {value}
            </Text>
        </Flex>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flex: '1 1 200px', minWidth: '200px' }}>
                {content}
            </a>
        );
    }

    return content;
}

function SocialButton({ name, icon, link }: { name: string; icon: string; link: string }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <Flex
                padding="16"
                radius="l"
                alignItems="center"
                justifyContent="center"
                gap="12"
                style={{
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minWidth: '140px',
                }}
                onMouseEnter={(e: any) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e: any) => {
                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(71, 85, 105, 0.2)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <Icon name={icon as any} size="m" />
                <Text variant="body-strong-s">{name}</Text>
            </Flex>
        </a>
    );
}

const personalSocial = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Aliemree',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ali-emre/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ali.emree.tr@gmail.com',
    },
];

export default function ContactPage() {
    const params = useParams();
    const locale = (params?.locale as string) || 'en';
    const isTR = locale === 'tr';

    return (
        <Flex
            fillWidth
            maxWidth="m"
            direction="column"
            paddingY="xl"
            gap="48"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        headline: isTR ? 'İletişim' : 'Contact',
                        url: `https://${baseURL}/contact`,
                    }),
                }}
            />

            {/* Header */}
            <Flex
                direction="column"
                fillWidth
                gap="m"
                alignItems="center"
                style={{ textAlign: 'center' }}
            >
                <Heading variant="display-strong-m">
                    {isTR ? 'İletişime Geçin' : 'Get in Touch'}
                </Heading>
                <Text
                    variant="body-default-l"
                    onBackground="neutral-weak"
                    style={{ maxWidth: '500px', lineHeight: '1.7' }}
                >
                    {isTR
                        ? 'Projeleriniz, işbirliği teklifleriniz veya sorularınız için benimle iletişime geçmekten çekinmeyin.'
                        : 'Feel free to reach out to me for your projects, collaboration offers, or any questions.'}
                </Text>
            </Flex>

            {/* Contact Cards */}
            <Flex
                fillWidth
                gap="20"
                wrap
                justifyContent="center"
            >
                <ContactCard
                    icon="email"
                    title={isTR ? 'E-posta' : 'Email'}
                    value="ali.emree.tr@gmail.com"
                    link="mailto:ali.emree.tr@gmail.com"
                />
                <ContactCard
                    icon="clock"
                    title={isTR ? 'Yanıt Süresi' : 'Response Time'}
                    value={isTR ? '24 saat içinde' : 'Within 24 hours'}
                />
            </Flex>

            {/* Social Links Section */}
            <Flex
                direction="column"
                fillWidth
                gap="24"
                padding="32"
                radius="xl"
                alignItems="center"
                style={{
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                    border: '1px solid rgba(71, 85, 105, 0.15)',
                }}
            >
                <Flex direction="column" gap="8" alignItems="center">
                    <Heading as="h2" variant="heading-strong-l">
                        {isTR ? 'Beni Takip Edin' : 'Follow Me'}
                    </Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                        {isTR ? 'Sosyal medya hesaplarımdan bana ulaşabilirsiniz' : 'Connect with me on social media'}
                    </Text>
                </Flex>

                <Flex gap="16" wrap justifyContent="center">
                    {personalSocial.map((item) => (
                        <SocialButton
                            key={item.name}
                            name={item.name}
                            icon={item.icon}
                            link={item.link}
                        />
                    ))}
                </Flex>
            </Flex>

            {/* CTA Section */}
            <Flex
                direction="column"
                fillWidth
                gap="20"
                padding="40"
                radius="xl"
                alignItems="center"
                style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    textAlign: 'center',
                }}
            >
                <Heading as="h2" variant="heading-strong-l">
                    {isTR ? 'Proje Fikriniz mi Var?' : 'Have a Project Idea?'}
                </Heading>
                <Text
                    variant="body-default-m"
                    onBackground="neutral-weak"
                    style={{ maxWidth: '450px', lineHeight: '1.6' }}
                >
                    {isTR
                        ? 'Yapay zeka, gömülü sistemler veya web geliştirme projeleriniz için birlikte çalışabiliriz.'
                        : 'We can work together on your AI, embedded systems, or web development projects.'}
                </Text>
                <Button
                    href="mailto:ali.emree.tr@gmail.com"
                    variant="primary"
                    size="l"
                    suffixIcon="arrowRight"
                >
                    {isTR ? 'E-posta Gönder' : 'Send an Email'}
                </Button>
            </Flex>
        </Flex>
    );
}
