import Document, { Html, Head, Main, NextScript } from 'next/document';

//document를 customizing 하기 위한 파일
//next js 는 마크업을 건너뜀
//body태그 상단의 마크업을 핸들링하기 위해서는 이 파일이 필수적임.

//중요 ! 서버에서만 작동하므로 onClick 같은 메소드와 css는 작동하지 않는다.
//title 속성도 각 컴포넌트에서 Head 컴포넌트를 부른 후, 작업해주어야 함.

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
