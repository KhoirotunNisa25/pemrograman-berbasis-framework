import styles from '../styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <head>
                <title>404 - Halaman tidak ditemukan</title>
            </head>
            <img src="/404.svg" alt="404" className={styles.error__image} />
            <h1>404 - Halaman tidak ditemukan</h1>
            <p>Maaf, Halaman yang Anda cari tidak ada.</p>
        </div>
    );
};

export default Custom404;