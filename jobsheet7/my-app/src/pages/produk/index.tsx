// import ProdukView from '../views/produk';

// const produk = () => {
//     return (
//         <>
//             <ProdukView />
//         </>
//     );
// };

// export default produk;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
}

const kategori = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     if (!isLogin) {
    //         push('/login');
    //     }
    // }, []);

    useEffect(() => {
        fetch("api/produk")
            .then((response) => response.json())
            .then((responsedata) => {
                // console.log("Data Produk:", responsedata.data);
                setProducts(responsedata.data);
            })
            .catch((error) => {
                console.error("Error fetching produk:", error);
            });
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map((products: ProductType) => (
                <div key={products.id}>
                    <h2>{products.name}</h2>
                    <p>Harga: {products.price}</p>
                    <p>Ukuran: {products.size}</p>
                    <p>Kategori: {products.category}</p>

                </div>
            ))}
        </div>
    );
};

export default kategori;    