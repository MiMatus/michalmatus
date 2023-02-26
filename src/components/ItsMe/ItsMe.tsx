import { GithubUrl, LinkedInURL, MailAddress } from '@michalspace/utils/routes/external';
import { FC } from 'react';
import { MyPicture } from './components/MyPicture';
import {
    Bubble,
    GithubIcon,
    HelloButton,
    IntroductionText,
    IntroductionTextWrapper,
    IntroductionTitle,
    IntroductionWrapper,
    ItsMeSection,
    LightTitlePart,
    LinkedInIcon,
    LinksSidebar,
    ProgrammerIllustration,
    SecondaryIntroduction,
    SidebarLink,
    TwitterIcon,
} from './ItsMe.style';

export const ItsMe: FC = () => (
    <ItsMeSection>
        <LinksSidebar>
            <SidebarLink href={GithubUrl} target="_blank" rel="noopener" title="Github Profile">
                <GithubIcon />
            </SidebarLink>
            <SidebarLink href={LinkedInURL} target="_blank" rel="noopener" title="LinkedIn Profile">
                <LinkedInIcon />
            </SidebarLink>
            <SidebarLink href="/" title="Not anymore in this place :-)">
                <TwitterIcon />
            </SidebarLink>
        </LinksSidebar>
        <IntroductionWrapper>
            <Bubble>It&apos;s me</Bubble>
            <IntroductionTitle>
                <LightTitlePart>Michal Matúš.</LightTitlePart>
                <br />
                Developer & Coffee lover
            </IntroductionTitle>
            <SecondaryIntroduction>
                <IntroductionTextWrapper>
                    <IntroductionText>
                        I enyoy building complex applications with scalability in mind while enyoying wonderful taste of
                        espresso. (*I don&apos;t turn coffee to code but I love merge &#128540; those things toghether)
                    </IntroductionText>
                    <HelloButton href={`mailto:${MailAddress}`}>
                        Say
                        <br />
                        &nbsp;&nbsp;&nbsp;hello
                    </HelloButton>
                </IntroductionTextWrapper>
                <MyPicture />
            </SecondaryIntroduction>
        </IntroductionWrapper>
        <ProgrammerIllustration />
    </ItsMeSection>
);
