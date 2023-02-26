import { GithubUrl } from '@michalspace/utils/routes/external';
import { FC } from 'react';

import { MyCodeLink, MyCodeSection, MyCodeText, MyCodeTitle, MyProjects } from './MyCode.style';

export const MyCode: FC = () => (
    <MyCodeSection>
        <MyCodeTitle>
            My code / <MyProjects>My projects</MyProjects>
        </MyCodeTitle>
        <MyCodeText>
            I love open-source so I try to make many projects public/open as I can. <br /> Check out my repositories and
            feel free to ask or criticise anything
        </MyCodeText>
        <MyCodeLink href={GithubUrl}>Check out my work</MyCodeLink>
    </MyCodeSection>
);
