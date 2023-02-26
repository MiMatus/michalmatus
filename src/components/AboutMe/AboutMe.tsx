import { FC } from 'react';
import { ElasticSearch } from '../Ilustration/ElasticSearch';
import { Golang } from '../Ilustration/Golang';
import { Gopher } from '../Ilustration/Gopher';
import { PHP } from '../Ilustration/PHP';
import { React } from '../Ilustration/React';
import { Rust } from '../Ilustration/Rust';
import { Typescript } from '../Ilustration/Typescript';
import {
    AboutMeSection,
    AboutMeText,
    AboutMeTitle,
    AboutMeWrapper,
    TechnologiesPanel,
    TechnologiesTitle,
    TechnologiesListWrapper,
    TechnologiesWrapper,
    TechnologyImages,
} from './AboutMe.style';
import { List } from './components/List';

export const AboutMe: FC = () => (
    <AboutMeSection>
        <AboutMeWrapper>
            <AboutMeTitle>About me</AboutMeTitle>
            <AboutMeText>
                My journey started back in 2015 when I decided to create my first web app written in PHP (and lot of
                HTML & CSS stuff). It is said that programming can sometimes be indistinguishable from magic and for
                sure it was <strong>magical for me 🎇</strong>
                <br />I quiet quickly started to discover all kind wonders of <strong>software development</strong>.
                <strong> PHP, JS, Golang, Rust, SQL/NoSQL DBs, proper design patterns, event sourcing</strong> and many
                many more kept comming to my path and I while enyoyed all of them 🥰 I became little bit of code wizzard
                🧙 who knows which spell to use to solve every problem I stumble upon (*almost every problem - cross
                browser compatibility would require damn strong dark magic 😅).
                <br />
                <br />
                On my journey I’ve had the privilege of working on one of{' '}
                <strong>the biggest e-commerce in central Europe 🛒</strong>,{' '}
                <strong>the most used legal laws app in Czech Republic 📖</strong>,{' '}
                <strong>trade mark protection app 🛂</strong>, <strong>craftsmen marketplace ⚒️</strong>...
            </AboutMeText>
        </AboutMeWrapper>
        <TechnologiesPanel>
            <TechnologiesTitle>Few things I’ve been working with recently</TechnologiesTitle>
            <TechnologiesWrapper>
                <TechnologiesListWrapper>
                    <List title="Languages" items={['PHP 8+', 'Typescript 4+', 'Golang', 'Rust']} />
                    <List title="Frameworks" items={['Roadrunner', 'Next.js', 'Symfony', 'Tokio']} />
                    <List title="Databases" items={['Elasticsearch', 'PostgreSQL', 'SQL Server', 'Redis']} />
                    <List title="Others" items={['Kubernetes', 'Docker', 'Consul', 'Vault']} />
                </TechnologiesListWrapper>
                <TechnologyImages>
                    <Rust />
                    <ElasticSearch />
                    <PHP />
                    <Golang />
                    <Gopher />
                    <React />
                    <Typescript />
                </TechnologyImages>
            </TechnologiesWrapper>
        </TechnologiesPanel>
    </AboutMeSection>
);
