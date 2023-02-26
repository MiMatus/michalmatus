import { AboutMe } from '@michalspace/components/AboutMe';
import { ItsMe } from '@michalspace/components/ItsMe';
import { MyCode } from '@michalspace/components/MyCode';

export default function Home() {
    return (
        <main style={{ width: '100%' }}>
            <ItsMe />
            <AboutMe />
            <MyCode />
        </main>
    );
}
