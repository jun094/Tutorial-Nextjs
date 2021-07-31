// 500 error는 여기서 server side renering으로 처리해준다.

function Error({ statusCode }) {
    return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

// 여기서 404 처리를 해줄 수 있긴하다.
// 그러나, 404는 정적이 유리하므로 404.js를 따로 만들어주자.

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
