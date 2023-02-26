import { MailAddress } from '@michalspace/utils/routes/external';
import { FC } from 'react';
import { ThemeButton } from './components/ThemeButton';
import { HeaderLogo, HeaderWrapper, HelloIcon, HelloLink, HelloText, Navigation } from './Header.style';

export const Header: FC = () => (
    <HeaderWrapper>
        <HeaderLogo />
        <Navigation>
            <ThemeButton />
            <HelloLink title="Say hello" href={`mailto:${MailAddress}`}>
                <HelloIcon />
                <HelloText>Say hello</HelloText>
            </HelloLink>
        </Navigation>
    </HeaderWrapper>
);
