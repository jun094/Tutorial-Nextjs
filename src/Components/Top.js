import { Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import Gnb from './Gnb';

function Top() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <img src="/images/logo.png" alt="logo.." style={{ display: 'block', width: 80, marginRight: 20 }} />
                <Header as="h1">준영이의 Next JS 튜토리얼</Header>
            </div>
            <Gnb />
        </>
    );
}

export default Top;
