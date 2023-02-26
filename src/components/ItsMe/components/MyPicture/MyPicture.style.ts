'use client';

import { styled } from '@linaria/react';
import { mediaMin } from '@michalspace/utils/mediaQueries';
import { LoadingSkeleton } from '../../../LoadingSkeleton';

export const ImageSkeleton = styled(LoadingSkeleton)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
`;

export const ImageWrapper = styled.div`
    position: relative;

    max-width: 250px;
    margin-top: 7.8rem;
    border: 0.6rem solid var(--profile-image-border-color);
    ${mediaMin('medium')} {
        max-width: 330px;
        margin-top: 0rem;
    }

    & > img {
        vertical-align: top;
        height: auto;
        max-width: 100%;
    }
`;
