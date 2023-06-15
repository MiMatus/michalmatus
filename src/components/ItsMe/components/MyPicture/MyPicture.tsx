'use client';

import { StyledComponentProps } from '@michalspace/types/styled';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ImageSkeleton, ImageWrapper } from './MyPicture.style';

export type MyPictureProps = StyledComponentProps;

export const MyPicture: FC = ({ ...props }) => {
    const ref = useRef<HTMLImageElement | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    const onLoadingComplete = useCallback(() => setLoading(false), []);
    useEffect(() => {
        if (ref.current && ref.current.complete) {
            onLoadingComplete();
        }
    }, [onLoadingComplete]);

    return (
        <ImageWrapper {...props}>
            {isLoading ? <ImageSkeleton /> : null}
            <img
                ref={ref}
                onLoad={onLoadingComplete}
                srcSet="/michal-matus-selfie-384.webp 1x, /michal-matus-selfie-750.webp 2x"
                src="/michal-matus-selfie.png"
                alt="Michal Matus selfie photo"
                width={330}
                height={418}
            />
        </ImageWrapper>
    );
};
