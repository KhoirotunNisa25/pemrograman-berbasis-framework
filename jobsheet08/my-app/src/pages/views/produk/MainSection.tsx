import styles from './produk.module.css';

const MainSection = () => {
    return (
        <main className={`${styles.main} bg-gray-50 p-4 rounded-lg mt-4 text-gray-700`}> 
            <p className="leading-relaxed">Konten list produk</p>
        </main>
    );
};

export default MainSection;
