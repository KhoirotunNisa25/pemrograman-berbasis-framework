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
  const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
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