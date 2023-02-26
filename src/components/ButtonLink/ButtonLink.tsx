import { StyledComponentProps } from '@michalspace/types/styled';
import { FC, DetailedHTMLProps, PropsWithChildren, AnchorHTMLAttributes } from 'react';
import { Link } from './ButtonLink.style';

export const ButtonLink: FC<
    PropsWithChildren &
        StyledComponentProps &
        DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = ({ children, ...props }) => <Link {...props}>{children}</Link>;
