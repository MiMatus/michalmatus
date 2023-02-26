'use client';

import { StyledComponentProps } from '@michalspace/types/styled';
import NextImage from 'next/image';
import { FC, useCallback, useState } from 'react';
import { ImageSkeleton, ImageWrapper } from './MyPicture.style';

export type MyPictureProps = StyledComponentProps;

export const MyPicture: FC = ({ ...props }) => {
    const [isLoading, setLoading] = useState<boolean>(true);

    const onLoadingComplete = useCallback(() => setLoading(false), []);

    return (
        <ImageWrapper {...props}>
            {isLoading ? <ImageSkeleton /> : null}
            <NextImage
                onLoadingComplete={onLoadingComplete}
                src="/michal-matus-selfie.png"
                alt="Michal Matus selfie photo"
                width={330}
                height={418}
                priority
            />
        </ImageWrapper>
    );
};
