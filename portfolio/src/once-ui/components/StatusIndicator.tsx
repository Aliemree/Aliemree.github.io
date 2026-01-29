'use client';

import React from 'react';
import styles from './StatusIndicator.module.scss';

interface StatusIndicatorProps {
    size?: 's' | 'm' | 'l';
    color?: 'green' | 'yellow' | 'red' | 'gray';
    className?: string;
    style?: React.CSSProperties;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    size = 'm',
    color = 'gray',
    className,
    style
}) => {
    return (
        <div
            className={`${styles.indicator} ${styles[size]} ${styles[color]} ${className || ''}`}
            style={style}
        />
    );
};

export { StatusIndicator };
