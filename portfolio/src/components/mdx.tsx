import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';

import { SmartImage, SmartLink, Text, Flex } from '@/once-ui/components';
import { CodeBlock } from '@/once-ui/modules';
import { HeadingLink } from '@/components';

import { TextProps } from '@/once-ui/interfaces';
import { SmartImageProps } from '@/once-ui/components/SmartImage';

type TableProps = {
    data: {
        headers: string[];
        rows: string[][];
    };
};

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
        {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
        ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
    if (href.startsWith('/')) {
        return (
            <SmartLink href={href} {...props}>
                {children}
            </SmartLink>
        );
    }

    if (href.startsWith('#')) {
        return <a href={href} {...props}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
    if (!src) {
        console.error("SmartImage requires a valid 'src' property.");
        return null;
    }

    return (
        <SmartImage
            className="my-20"
            enlarge
            radius="m"
            aspectRatio="16 / 9"
            alt={alt}
            src={src}
            {...props}/>
    )
}

function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    const CustomHeading = ({ children, ...props }: TextProps) => {
    const slug = slugify(children as string);
        return (
            <HeadingLink
                style={{marginTop: 'var(--static-space-24)', marginBottom: 'var(--static-space-12)'}}
                level={level}
                id={slug}
                {...props}>
                {children}
            </HeadingLink>
        );
    };

    CustomHeading.displayName = `Heading${level}`;

    return CustomHeading;
}

function createParagraph({ children }: TextProps) {
    return (
        <Text style={{lineHeight: '150%'}}
            variant="body-default-m"
            onBackground="neutral-medium"
            marginTop="8"
            marginBottom="12">
            {children}
        </Text>
    );
};

// Custom Achievements list component
type AchievementListProps = {
    children: ReactNode;
};

function AchievementList({ children }: AchievementListProps) {
    return (
        <Flex
            direction="column"
            fillWidth
            gap="12"
            style={{
                marginTop: '16px',
                marginBottom: '16px',
            }}
        >
            {children}
        </Flex>
    );
}

type AchievementItemProps = {
    children: ReactNode;
};

function AchievementItem({ children }: AchievementItemProps) {
    // Extract text content to check for trophy emoji or percentage
    const text = React.Children.toArray(children).join('');
    const isTrophy = text.includes('🏆');
    const hasPercentage = text.includes('%');

    return (
        <Flex
            fillWidth
            alignItems="center"
            gap="12"
            padding="16"
            radius="l"
            style={{
                background: isTrophy
                    ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)'
                    : 'linear-gradient(145deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)',
                border: isTrophy
                    ? '1px solid rgba(251, 191, 36, 0.3)'
                    : '1px solid rgba(71, 85, 105, 0.15)',
                transition: 'all 0.2s ease',
            }}
        >
            {hasPercentage && (
                <Flex
                    style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text variant="body-default-s" style={{ color: 'white', fontWeight: '600' }}>
                        ✓
                    </Text>
                </Flex>
            )}
            {!hasPercentage && !isTrophy && (
                <Flex
                    style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text variant="body-default-s" style={{ color: 'white', fontWeight: '600' }}>
                        ★
                    </Text>
                </Flex>
            )}
            {isTrophy && (
                <Flex
                    style={{
                        width: '24px',
                        height: '24px',
                        minWidth: '24px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: '14px' }}>
                        🏆
                    </Text>
                </Flex>
            )}
            <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{
                    lineHeight: '1.5',
                    ...(isTrophy && { fontWeight: '600', color: '#fbbf24' }),
                }}
            >
                {children}
            </Text>
        </Flex>
    );
}

const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    Table,
    CodeBlock,
    ul: AchievementList as any,
    li: AchievementItem as any,
};

type CustomMDXProps = MDXRemoteProps & {
    components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {

    return (
        // @ts-ignore: Suppressing type error for MDXRemote usage
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}

export const mdxComponents = components;
