import { styled } from '@linaria/react';

export const LoadingSkeleton = styled.div`
    & {
        background-color: #e2e5e7;
        // The shine that's going to move across the skeleton:
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0)
        );
        background-size: 40px 100%; // width of the shine
        background-repeat: no-repeat; // No need to repeat the shine effect
        background-position: left -40px top 0px; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
        animation: shine 1s ease infinite; // increase animation time to see effect in 'slow-mo'
    }

    @keyframes shine {
        to {
            // Move shine from left to right, with offset on the right based on the width of the shine - see background-size
            background-position: right -40px top 0px;
        }
    }
`;
