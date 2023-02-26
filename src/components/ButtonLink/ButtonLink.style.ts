import { styled } from '@linaria/react';

export const Link = styled.a`
    font-size: 2.5rem;
    border: 0.2rem solid var(--button-link-border-color);
    color: var(--button-link-color);
    background: var(--button-link-background);
    padding: 0.2em 0.75em;
    border-radius: 2.5em;
    text-decoration: none;
    transition: background 0.5s;
`;
