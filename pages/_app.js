import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/Components/Footer';
import Top from '../src/Components/Top';

//공통 레이아웃을 사용하기 위해서는 _app.js를 사용
/*
_app.js의 기능들
1. 페이지들이 변화할 때 layout을 유지
2. 페이지를 navigating 할 때 state(상태) 유지
3. componentDidCatch로 고객들의 에러 관리
4. 페이지들에 추가데이터 사용가능 (예를 들어 전달되는 GraphQL queries)
5. 글로벌 css는 이곳에서 선언한다.
*/

// props의 Component : 현재 페이지를 의미
// props의 pageProps :

function MyApp({ Component, pageProps }) {
    return (
        <div className="wrapper">
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
