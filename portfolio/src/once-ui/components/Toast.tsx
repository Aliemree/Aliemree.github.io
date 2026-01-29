'use client';

import React from 'react';
import { Flex, Text } from '.';
import styles from './Toast.module.scss';

interface ToastProps {
    variant?: 'success' | 'danger';
    onClose?: () => void;
    action?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({
    variant = 'success',
    onClose,
    action,
    children,
    className,
    style
}) => {
    return (
        <Flex
            className={`${styles.toast} ${styles[variant]} ${className || ''}`}
            style={style}
            padding="4"
            gap="4"
            alignItems="center"
            radius="m"
        >
            <Text variant="body-default-s">{children}</Text>
            {action}
            {onClose && (
                <button
                    onClick={onClose}
                    className={styles.close}
                    aria-label="Close"
                >
                    ×
                </button>
            )}
        </Flex>
    );
};

export { Toast };
