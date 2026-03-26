import styles from "./produk.module.scss";
type ProductType = {
    id: string;
    image: string;
    name: string;
    price: number;
    size: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    return (
        <div className={styles.produk}>
            <h1 className={styles.produk__title}>Daftar Produk</h1>
            <div className={styles.produk__content}>
            {products.map((product: ProductType) => (
                <div key={product.id} className={styles.produk__content__item}>
                    <img src={product.image} alt={product.name} className={styles.produk__content__item__image} width="200" />
                    <h4 className={styles.produk__content__item__name}>{product.name}</h4>
                    <p className={styles.produk__content__item__price}>Harga: Rp {product.price.toLocaleString()}</p>
                    <p className={styles.produk__content__item__size}>Ukuran: {product.size}</p>
                    <p className={styles.produk__content__item__category}>Kategori: {product.category}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default TampilanProduk;