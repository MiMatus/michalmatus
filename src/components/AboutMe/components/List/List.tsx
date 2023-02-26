import { StyledComponentProps } from '@michalspace/types/styled';
import { FC } from 'react';
import { ItemContainer, ListItem, ListTitle, ListWrapper } from './List.style';

type ListProps = StyledComponentProps & { title: string; items: string[] };

export const List: FC<ListProps> = ({ title, items, ...props }) => (
    <ListWrapper {...props}>
        <ListTitle>{title}</ListTitle>
        <ItemContainer>
            {items.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
            ))}
        </ItemContainer>
    </ListWrapper>
);
