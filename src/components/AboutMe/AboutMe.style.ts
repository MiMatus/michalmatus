import { styled } from '@linaria/react';
import { mediaMin } from '@michalspace/utils/mediaQueries';

export const AboutMeTitle = styled.h2`
    font-size: var(--font-size-heading-primary);
    color: var(--font-color-heading-secondary);
    margin: 0px;
    margin-top: 1rem;
`;

export const AboutMeText = styled.p`
    font-size: var(--font-size-text);
    font-weight: var(--font-weight-text);
    color: var(--font-color-text-secondary);
    margin: 0px;
`;

export const TechnologiesTitle = styled.h3`
    font-size: var(--font-size-heading-secondary);
    color: var(--font-color-heading-primary);
    margin: 0px;
`;

export const TechnologiesListWrapper = styled.div`
    display: flex;
    gap: 9rem;
    justify-content: space-between;
    margin-top: 2.8rem;
    flex-wrap: nowrap;

    & > * {
        flex: 0 0 auto;
    }
`;

export const TechnologyImages = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
    gap: 2rem;

    & > * {
        height: 4.5rem;
        width: auto;
        flex: 0 0 auto;
    }

    ${mediaMin('medium')} {
        & > * {
            height: 6rem;
        }
    }
`;

export const TechnologiesWrapper = styled.div`
    overflow-x: auto;
`;

export const TechnologiesPanel = styled.div`
    background: var(--layout-panel-background-primary);
    padding: 4rem 7rem;
    box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    border-radius: 4rem;
    position: relative;
    top: -6rem;
    border: 0.1rem solid var(--default-border-color);
    align-self: center;
    width: calc(
        100% - var(--layout-panel-padding-size) - var(--layout-panel-padding-size) -
            var(--layout-panel-content-padding-size) - var(--layout-panel-content-padding-size)
    );
`;

export const AboutMeWrapper = styled.div`
    background: var(--layout-panel-background-secondary);
    padding: var(--layout-panel-padding-size)
        calc(var(--layout-panel-content-padding-size) + var(--layout-panel-padding-size))
        calc(var(--layout-panel-padding-size) + 6rem);
`;

export const AboutMeSection = styled.section`
    display: flex;
    flex-direction: column;
`;
