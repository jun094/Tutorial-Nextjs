import { Button, Header } from 'semantic-ui-react';
import styles from './Item.module.css';

function Item({ item }) {
    const { image_link, name, price, category, product_type, description } = item;

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={image_link} alt={name} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>${price}</strong>
                    <span className={styles.txt_info}>
                        {category ? `${category}/` : ''}
                        {product_type}
                    </span>
                    <Button color="purple">구매하기</Button>
                </div>
            </div>
            <Header as="h3">제품 설명</Header>
            <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
        </>
    );
}

export default Item;
