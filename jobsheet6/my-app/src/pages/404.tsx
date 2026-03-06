import Head from 'next/head';
import styles from '../styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Head>
                <title>404 - Halaman tidak ditemukan</title>
            </Head>
            <img src="/404.svg" alt="404" className={styles.error__image} />
            <h1 className={styles.error__title}>404 - Halaman tidak ditemukan</h1>
            <p className={styles.error__desc}>Maaf, halaman yang Anda cari tidak ada.</p>
        </div>
    );
};

export default Custom404;