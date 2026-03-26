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
import Image from 'next/image';
import TampilanProduk from '../views/produk';

const kategori = () => {
    // const [products, setProducts] = useState<ProductType[]>([]);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/produk")
        .then((response) => response.json())
        .then((responsedata) => {
            console.log(responsedata);
            setProducts(responsedata.data);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);

    return (
        <div>
            <TampilanProduk products={products} />
        </div>
    );
};

export default kategori;    