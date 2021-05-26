import Head from 'next/head';
import Axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [list, setList] = useState([]);

    const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

    const getDatas = () => {
        Axios.get(API_URL).then((res) => {
            setList(res.data);
            console.log(res.data);
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
            main home 페이지입니다.
        </>
    );
}
