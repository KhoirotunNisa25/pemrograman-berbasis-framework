import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

const halamanProdukStatic = (props:{products:ProductType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products}/>
        </div>
    );
};
export default halamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/produk');
    // const res : ProductType[] = await res.json();
    const response : { data: ProductType[] } = await res.json();

    // console.log("Data produk yang diambil dari API:", response);
    return {
        props: {
            products: response.data
        },
        revalidate: 10, // Opsi revalidate untuk mengatur waktu pembaruan data (dalam detik)
    }
}