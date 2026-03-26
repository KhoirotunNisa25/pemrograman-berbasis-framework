
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const TampilanRegister = () => {
    const { push } = useRouter();
    const handlerRegister = () => {
        console.log("register berhasil");
        push('/auth/login');
    }
    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>
            <button onClick={() => handlerRegister()}>Register</button> <br/>
            <h1 style={{ color: "red",border: "1px solid red",borderRadius: "5px",padding: "5px",}}>sudah punya akun</h1>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    );
};

export default TampilanRegister;