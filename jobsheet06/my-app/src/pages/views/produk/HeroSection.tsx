import styles from './produk.module.css';

const HeroSection = () => {
    return (
        <section className={`${styles.hero} bg-sky-200 p-6 rounded-md`}> 
            <h1 className="text-2xl font-semibold mb-2">Halaman Produk</h1>
            <p className="text-sm text-slate-700">Daftar produk tersedia</p>
        </section>
    );
};

export default HeroSection;
