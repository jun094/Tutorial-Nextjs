import { useRouter } from 'next/router';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Item from '../../src/Components/Item';
import Loading from '../../src/Components/Loading';

const View = () => {
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

    return (
        <>
            {isLoading && <Loading />}
            {!isLoading && <Item item={item} />}
        </>
    );
};

export default View;
