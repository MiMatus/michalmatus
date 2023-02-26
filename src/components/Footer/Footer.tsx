import { GithubUrl, LinkedInURL, PageRepositoryUrl } from '@michalspace/utils/routes/external';
import { FC } from 'react';
import {
    AttributionLink,
    AttributionList,
    AttributionTitle,
    FooterLink,
    FooterLinks,
    FooterLogo,
    FooterWrapper,
    GithubIcon,
    LinkedInIcon,
    Motto,
    PageSourceLink,
    TwitterIcon,
} from './Footer.style';

export const Footer: FC = () => (
    <FooterWrapper>
        <FooterLogo />
        <Motto>PHP Developer, GO Lover, Typescript enjoyer, Rust Admirer</Motto>
        <FooterLinks>
            <FooterLink href={GithubUrl} target="_blank" rel="noopener" title="Github Profile">
                <GithubIcon />
            </FooterLink>
            <FooterLink href={LinkedInURL} target="_blank" rel="noopener" title="LinkedIn Profile">
                <LinkedInIcon />
            </FooterLink>
            <FooterLink href="#" title="Not anymore in this place :-)">
                <TwitterIcon />
            </FooterLink>
        </FooterLinks>
        <PageSourceLink href={PageRepositoryUrl}>Designed & Built by Michal Matúš</PageSourceLink>
        <AttributionList>
            <AttributionTitle>
                This page contain amazing work of others amazing people, be sure to check them out:
            </AttributionTitle>
            <AttributionLink href="https://www.php.net/releases/8.2/en.php" target={'_blank'} rel="noopener">
                PHP Logo - Karen Rustad Tölva, CC0, via Wikimedia Commons
            </AttributionLink>
            <AttributionLink href="https://go.dev" target={'_blank'} rel="noopener">
                Golang Logo - Creative Commons Attribution 4.0 licensed
            </AttributionLink>
            <AttributionLink
                href="https://commons.wikimedia.org/wiki/File:Rustacean-flat-happy.svg"
                target={'_blank'}
                rel="noopener"
            >
                Rust Logo - Karen Rustad Tölva, CC0, via Wikimedia Commons
            </AttributionLink>
            <AttributionLink
                href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"
                target={'_blank'}
                rel="noopener"
            >
                Typescript Logo - ™/®Microsoft, Public domain, via Wikimedia Commons
            </AttributionLink>
            <AttributionLink
                href="https://commons.m.wikimedia.org/wiki/File:React-icon.svg"
                target={'_blank'}
                rel="noopener"
            >
                React Logo - Creative Commons Attribution-Share Alike 1.0 Generic
            </AttributionLink>
            <AttributionLink
                href="https://commons.wikimedia.org/wiki/File:Elasticsearch_logo.svg"
                target={'_blank'}
                rel="noopener"
            >
                Elasticsearch Logo - ™/®Elasticsearch
            </AttributionLink>
            <AttributionLink
                href="https://www.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_11668759.htm#query=ai%20illustration&position=12&from_view=keyword&track=ais"
                target={'_blank'}
                rel="noopener"
            >
                Programmer illustration - Image by vectorjuice on Freepik
            </AttributionLink>
        </AttributionList>
    </FooterWrapper>
);
