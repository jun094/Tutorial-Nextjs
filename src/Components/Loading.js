import { Dimmer, Loader, Image } from 'semantic-ui-react';

const Loading = () => (
    <div style={{paddingTop:40}}>
        <Loader inline="centered" active>
            Loading
        </Loader>
    </div>
);

export default Loading;
