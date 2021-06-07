# Next JS 으로 ssr 구현해보기

[유튜브 강의 영상 링크](https://www.youtube.com/watch?v=Ujjdn2wMIew)

## Create Next App으로 웹팩 바벨 설정

## Next js 는 모든 페이지를 pre-rendering 해놓는다.

### 1. 장점

-   더 좋은 퍼포먼스
-   검색 엔진 최적화

### 2. 형태 (차이점 : 언제 html 파일을 생성하는가.)

-   정적 생성
-   server side rendering

#### 2.1 정적 생성

-   언제 : 프로젝트가 빌드하는 시점에 html파일들을 생성
-   예시 : 유저 요청이 필요없는 페이지, 유저 요청이 있어도 같은 페이지, 마케팅 페이지, 도움말 페이지
-   사용법 : getStaticProps / getStaticPaths
-   모든 요청에 기존에 만들어놓은 html 파일들 재사용
-   정적생성된 html 파일들은 CDN에 캐시됨
-   퍼포먼스 이유로, next js는 정적생성을 추천하고 있음

#### 2.2 서버 사이드 렌더링

-   언제 : 매 요청마다 html을 생성
-   예시 : 유저 요청이 있을 때마다 다시 그려야 하는 페이지
-   사용법 : getServerSideProps
-   CDN에 캐시되지 않기 때문에 조금 느릴 수 있음
-   항상 최신 상태가 유지됨
