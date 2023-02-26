import { styled } from '@linaria/react';
import { ButtonLink } from '../ButtonLink';

export const MyProjects = styled.span`
    color: var(--font-color-heading-light);
`;

export const MyCodeTitle = styled.h2`
    font-size: var(--font-size-heading-secondary);
    color: var(--font-color-heading-primary);
    margin: 0px;
`;

export const MyCodeText = styled.p`
    font-size: var(--font-size-text);
    font-weight: var(--font-weight-text);
    color: var(--font-color-text-primary);
    margin: 0px;
`;

export const MyCodeLink = styled(ButtonLink)``;

export const MyCodeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 7rem;
    text-align: center;
    padding: var(--layout-panel-padding-size);
`;
