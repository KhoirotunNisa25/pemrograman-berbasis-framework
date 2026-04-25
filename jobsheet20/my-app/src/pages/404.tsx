import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/404.module.scss';

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <Image
                src="/404.svg"
                alt="404"
                width={400}
                height={300}
                className={styles.error__image}
            /> 
            <h1 className={styles.error__title}>404 - Halaman tidak ditemukan</h1>
            <p className={styles.error__desc}>Maaf, halaman yang Anda cari tidak ada.</p>
            <Link href="/" className={styles.error__button}>
                Kembali ke Beranda
            </Link>
        </div>
    );
};

export default Custom404;