'use client';

import React from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
    label: string;
    className?: string;
    style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
    label,
    className,
    style
}) => {
    return (
        <div
            className={`${styles.tooltip} ${className || ''}`}
            style={style}
        >
            {label}
        </div>
    );
};

export { Tooltip };
