import Head from 'next/head';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '../src/Components/ItemList';
import { Header, Divider } from 'semantic-ui-react';

export default function Home() {
    const [list, setList] = useState([]);

    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

    const getDatas = () => {
        Axios.get(API_URL).then((res) => {
            setList(res.data);
        });
    };
    useEffect(() => {
        getDatas();
    }, []);

    return (
        <>
            <Head>
                <title>Home | next js 튜토리얼</title>
            </Head>
            <Header as="h3" style={{ paddingTop: 40 }}>
                베스트 상품
            </Header>
            <Divider />

            <ItemList list={list.slice(0, 9)} />

            <Header as="h3" style={{ paddingTop: 40 }}>
                모든 상품
            </Header>
            <Divider />

            <ItemList list={list.slice(9)} />
        </>
    );
}
