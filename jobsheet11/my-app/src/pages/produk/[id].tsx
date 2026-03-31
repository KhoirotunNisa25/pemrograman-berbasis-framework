import fetcher from "../../util/swr/fetcher";
import {useRouter} from 'next/router';
import useSWR from 'swr';
import DetailProduk from '../../views/DetailProduk';

const HalamanProduk = () => {
   const {query} = useRouter();
    const {data, error, isLoading} = useSWR(`/api/produk/${query.id}`, fetcher);
    return (
        <div>
          <DetailProduk products={isLoading ? [] : data.data}></DetailProduk>
        </div>
    );
};

export default HalamanProduk;