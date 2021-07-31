import React from 'react';

function Error404() {
    return (
        <>
            <h2>custom 404 에러!!</h2>
            <div>
                404 error 는 404.js로 만들고 커스텀해준다.
                <br />
                404는 서버에서 받아올게 없으니, server side 보다 정적 페이지가 유리하다.
                <br />
            </div>
        </>
    );
}

export default Error404;
