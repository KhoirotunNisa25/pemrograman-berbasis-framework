import HeroSection from './HeroSection';
import MainSection from './MainSection';
import styles from './produk.module.css';

const ProdukView = () => {
    return (
        <div className={`${styles.container} container mx-auto px-4 py-6`}>
            <HeroSection />
            <MainSection />
        </div>
    );
};

export default ProdukView;
