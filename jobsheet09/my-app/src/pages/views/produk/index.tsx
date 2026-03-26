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
                {products.length > 0 ? (
                    <>
                    {products.map((product: ProductType) => (
                        <div key={product.id} className={styles.produk__content__item}>
                            <img src={product.image} alt={product.name} className={styles.produk__content__item__image} width="200" />
                            <h4 className={styles.produk__content__item__name}>{product.name}</h4>
                            <p className={styles.produk__content__item__price}>Harga: Rp {product.price.toLocaleString()}</p>
                            <p className={styles.produk__content__item__size}>Ukuran: {product.size}</p>
                            <p className={styles.produk__content__item__category}>Kategori: {product.category}</p>
                        </div>
                    ))}
                    </>
                ) : (
                    Array.from({length: 6}).map((_, index) => (
                        <div className={styles.produk__content__skeleton}>
                            <div className={styles.produk__content__skeleton__image}></div>
                            <div className={styles.produk__content__skeleton__name}></div>
                            <div className={styles.produk__content__skeleton__price}></div>
                            <div className={styles.produk__content__skeleton__size}></div>
                            <div className={styles.produk__content__skeleton__category}></div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;