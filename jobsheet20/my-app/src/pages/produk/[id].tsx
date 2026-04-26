import fetcher from "../../util/swr/fetcher";
import {useRouter} from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduk';
import produk from '../../../../../jobsheet05/my-app/src/pages/produk/index';
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({product}:{product: ProductType}) => {
  // Digunakan client side rendering (CSR) untuk mengambil data produk berdasarkan ID dari URL
  //  const {query} = useRouter();
  //   const {data, error, isLoading} = useSWR(`/api/produk/${query.id}`, fetcher);
  //   return (
  //       <div>
  //         <DetailProduk products={isLoading ? [] : data.data}></DetailProduk>
  //       </div>
  //   );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  )
};

export default HalamanProduk;

// Fungsi getServerSideProps untuk mengambil data produk berdasarkan ID dari URL secara server side rendering (SSR).
// akan dipanggil setiap kali halaman diakses, sehingga data produk selalu terbaru.
// mengambil data produk dari API menggunakan fetcher dan mengembalikan data produk sebagai props ke komponen HalamanProduk.

// {digunakan server side rendering (SSR) untuk mengambil data produk berdasarkan ID dari URL}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params.id}`);
  const respone = await res.json();

  if (!respone.data) {
    return { notFound: true };
  }

  return {
    props: {
      product: respone.data,
    },
  };
}



// Digunakan  static site generation (SSG) untuk mengambil data produk berdasarkan ID dari URL.
// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/produk');
//   const respone = await res.json();

//   const paths = respone.data.map((product: ProductType) => ({
//     params: { id: product.id }
//   }))

//   return {
//     paths,
//     fallback: false
//   };
//   // console.log("Paths yang dihasilkan getStaticPaths:", paths); // Debugging: tampilkan paths yang dihasilkan
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
//   // const response: ProductType = await res.json();
//   const response: { data: ProductType } = await res.json();

//   // console.log("Data produk yang diambil dari API:", response); // Debugging: tampilkan data produk yang diambil

//   return {
//     props: {
//       product: response.data,
//     }
//   }
// }