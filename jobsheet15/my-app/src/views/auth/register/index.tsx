
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const TampilanRegister = () => {
    // const { push } = useRouter();
    // const handlerRegister = () => {
    //     console.log("register berhasil");
    //     push('/auth/login');
    // }
    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Halaman Register</h1>
            {/* <button onClick={() => handlerRegister()}>Register</button> <br/> */}
            {/* <h1 style={{ color: "red",border: "1px solid red",borderRadius: "5px",padding: "5px",}}>sudah punya akun</h1> */}

            <div className={styles.register__form}>
                <form action="">
                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="email"
                            className={styles.register__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={styles.register__form__item__input}
                        />
                    </div>

                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="Fullname"
                            className={styles.register__form__item__label}
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Fullname"
                            className={styles.register__form__item__input}
                        />
                    </div>

                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="password"
                            className={styles.register__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={styles.register__form__item__input}
                        />
                    </div>

                    <button type="submit" className={styles.register__form__item__button}>
                        Register
                    </button>
                </form>

                <br />
                <p className={styles.register__form__item__text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;