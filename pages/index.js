import Head from 'next/head';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../src/components/ItemList';
import { Header, Divider } from 'semantic-ui-react';
import Loading from '../src/components/Loading';

// home 페이지 : 유저 요청에 의해 바뀌지 않는 페이지
// sever side rendering < 정적 웹 페이지

export default function Home() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const getDatas = () => {
        Axios.get(API_URL).then((res) => {
            setList(res.data);
            setIsLoading(false);
        });
    };
    useEffect(() => {
        getDatas();
    }, []);

    return (
        <>
            <Head>
                <title>Home | next js 튜토리얼</title>
                <meta name="description" content="dev-jun의 Next js 튜토리얼 페이지입니다."></meta>
            </Head>

            <Header as="h3" style={{ paddingTop: 40 }}>
                베스트 상품
            </Header>
            <Divider />

            {isLoading && <Loading />}
            {!isLoading && <ItemList list={list.slice(0, 9)} />}

            <Header as="h3" style={{ paddingTop: 40 }}>
                모든 상품
            </Header>
            <Divider />

            {isLoading && <Loading />}
            {!isLoading && <ItemList list={list.slice(9)} />}
        </>
    );
}
