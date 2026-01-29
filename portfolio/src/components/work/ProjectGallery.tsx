'use client';

import React, { useState, useEffect } from 'react';
import { SmartImage } from '@/once-ui/components';

interface ProjectImage {
    src: string;
    alt: string;
}

interface ProjectGalleryProps {
    images: ProjectImage[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!images || images.length === 0) {
        return null;
    }

    // Determine grid columns based on image count
    const getGridColumns = () => {
        if (images.length === 6) return 'repeat(3, 1fr)'; // 6 images = 3 columns (3x2)
        if (images.length >= 4) return 'repeat(2, 1fr)';  // 4+ images = 2 columns
        return 'repeat(2, 1fr)';                           // default 2 columns
    };

    return (
        <div className="project-gallery">
            <style jsx>{`
                .project-gallery {
                    display: grid;
                    grid-template-columns: ${getGridColumns()};
                    gap: 16px;
                    width: 100%;
                }

                .gallery-item {
                    width: 100%;
                }

                @media (max-width: 768px) {
                    .project-gallery {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <SmartImage
                        src={image.src}
                        alt={image.alt}
                        aspectRatio="16 / 9"
                        radius="l"
                        enlarge={!isMobile}
                        unoptimized
                        style={{
                            width: '100%',
                            border: '1px solid rgba(71, 85, 105, 0.2)',
                        }}
                    />
                </div>
            ))}
        </div>
    );
};
