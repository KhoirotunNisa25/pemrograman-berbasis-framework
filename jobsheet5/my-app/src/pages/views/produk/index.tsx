import HeroSection from './HeroSection';
import MainSection from './MainSection';
import styles from './produk.module.css';

const ProdukView = () => {
    return (
        <div className={styles.container}>
            <HeroSection />
            <MainSection />
        </div>
    );
};

export default ProdukView;
