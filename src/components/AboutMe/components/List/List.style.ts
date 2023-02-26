import { styled } from '@linaria/react';

export const ListTitle = styled.h4`
    font-size: var(--font-size-small-note);
    color: var(--font-color-text-primary);
    font-weight: 300;
    margin: 0px;
`;

export const ListItem = styled.li`
    font-size: var(--font-size-note);
    color: var(--font-color-text-primary);
    margin-top: 0.5em;

    &::before {
        display: inline-block;
        content: '';
        background: var(--color-background-delta);
        width: 0;
        height: 0;
        border-top: 0.5em solid transparent;
        border-bottom: 0.5em solid transparent;
        border-left: 0.8em solid var(--bubble-background-primary);
        margin-right: 0.6em;
    }
`;

export const ItemContainer = styled.ul`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
`;

export const ListWrapper = styled.div``;
