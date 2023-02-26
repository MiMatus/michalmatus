import { StyledComponentProps } from '@michalspace/types/styled';
import { FC } from 'react';

export const Moon: FC<StyledComponentProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
        <path
            d="M16.5942 30C21.2209 30 25.4465 27.895 28.246 24.4458C28.6602 23.9355 28.2086 23.1901 27.5686 23.312C20.291 24.698 13.6079 19.1181 13.6079 11.7717C13.6079 7.53996 15.8732 3.64857 19.555 1.55332C20.1226 1.23035 19.9798 0.369902 19.335 0.250781C18.4309 0.084078 17.5135 0.000136895 16.5942 0C8.31441 0 1.59424 6.70963 1.59424 15C1.59424 23.2798 8.30387 30 16.5942 30Z"
            fill="currentColor"
        />
    </svg>
);
