'use client';

import React, { ReactNode } from 'react';
import { Text } from '.';
import styles from './Dropdown.module.scss';
import classNames from 'classnames';

export interface DropdownOptions {
    label: string;
    value: string;
    icon?: string;
    danger?: boolean;
    divider?: boolean;
}

export interface DropdownProps {
    options: DropdownOptions[];
    onOptionSelect?: (option: DropdownOptions) => void;
    selectedOption?: string;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    onOptionSelect,
    selectedOption,
    children,
    className,
    style
}) => {
    return (
        <div
            className={`${styles.dropdown} ${className || ''}`}
            style={style}
            role="listbox"
        >
            {children}
            {options.map((option, index) => {
                if (option.divider) {
                    return <div key={index} className={styles.divider} />;
                }

                const isSelected = selectedOption === option.value;

                return (
                    <div
                        key={option.value || index}
                        className={classNames(
                            styles.option,
                            isSelected && styles.selected,
                            option.danger && styles.danger
                        )}
                        onClick={() => onOptionSelect?.(option)}
                        role="option"
                        aria-selected={isSelected}
                        data-value={option.value}
                        tabIndex={0}
                    >
                        <Text variant="body-default-s">{option.label}</Text>
                    </div>
                );
            })}
        </div>
    );
};

export { Dropdown };
