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
import useSWR from "swr";
import fetcher from '../util/swr/fetcher';


// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const kategori = () => {
    // const [products, setProducts] = useState<ProductType[]>([]);

    const [products, setProducts] = useState([]);
    const { data, error, isLoading } = useSWR("api/produk", fetcher);

    // useEffect(() => {
    //     fetch("/api/produk")
    //     .then((response) => response.json())
    //     .then((responsedata) => {
    //         console.log(responsedata);
    //         setProducts(responsedata.data);
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching products:", error);
    //     });
    // }, []);

    return (
        <div>
            <TampilanProduk products={isLoading ? [] : data.data} />
        </div>
    );
};

export default kategori;    