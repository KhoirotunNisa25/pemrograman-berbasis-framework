import Link from "next/link";
import { useRouter } from "next/router";
import handler from '../../../../../jobsheet2-setup/my-app/src/pages/api/hello';

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push('/produk');
    }
    return (
        <div>
            <h1>Halaman Login</h1>
            {/* <button onClick={handlerLogin}>Login</button> <br/>
            <button onClick={() => push ('/produk')}>Login</button> <br/> */}
            <button onClick={() => handlerLogin()}>Login</button> <br/>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default halamanLogin;