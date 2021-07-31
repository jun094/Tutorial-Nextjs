import Axios from 'axios';
import Item from '../../src/components/Item';
import Head from 'next/head';

import Loading from '../../src/components/Loading';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// dynamic route 사용

// view 상세 페이지 : 유저 요청에 따라 Id 값이 바뀌고 그에 따라 title, desciption이 바뀌는 페이지
// sever side rendering > 정적 웹 페이지

// item을 pre-rendering하여 props로 받는다.
const View = ({ item, name }) => {
    //console.log(item);

    /*
    // 기존 csr 방식
    // 서버 요청 -> 로딩중(pending) -> data fecth 완료 -> view Rendering
    // 그러나, 이 페이지의 특성은 서버에서 받아오는 data에 따라 페이지 meta 정보가 바뀐다..!!
    // 그러므로 서버에서 받아오는 data가 pre-rendering html 파일에 담겨있어야한다.

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const { id } = router.query;

    //상세 item에 대한 정보가 담긴 api
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    const getDatas = () => {
        Axios.get(API_URL).then((res) => {
            setItem(res.data);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        if (id) getDatas();
    }, [id]);
    */

    return (
        <>
            {item && (
                <>
                    <Head>
                        {
                            //pre-render로 미리 서버에서 받아온 정보를 토대로 동적인 meta 데이터 설정이 가능하다.
                        }
                        <title>{item.name}</title>
                        <meta name="description" content={item.desciption}></meta>
                    </Head>
                    {name}환경입니다.
                    <Item item={item} />
                </>
            )}
        </>
    );
};

// 이 부분이 request 될 때마다 pre-render가 된다
export async function getServerSideProps(context) {
    //console.log(context); // 여기서 콘솔 찍으면 sever terminal에 찍힘 !

    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        // item이라는 props를 컴포넌트에서 사용이 가능하다 !!!!
        props: { item: data, name: process.env.name },
    };
}
export default View;
