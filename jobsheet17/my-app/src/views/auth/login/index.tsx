
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./login.module.scss";

const TampilanLogin = () => {
    const { push, query } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const callbackUrl = (query.callbackUrl as string) || "/";
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        // const form = event.currentTarget;
        // const formData = new FormData(form);
        // const email = (formData.get("email") as string) || "";
        // const password = (formData.get("password") as string) || "";

        // if (!email.trim()) {
        //     setError("Email is required");
        //     return;
        // }

        // if (!password.trim()) {
        //     setError("Password is required");
        //     return;
        // }

        // setIsLoading(true);

        // const result = await signIn("credentials", {
        //     redirect: false,
        //     email,
        //     password,
        // });

        // setIsLoading(false);

        // if (result?.error) {
        //     setError("Email atau password salah");
        //     return;
        // }

        // if (typeof window !== "undefined") {
        //     localStorage.setItem("isLogin", "true");
        // }

        // push("/produk");
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });

            // console.log("signIn result", res);
            if (!res?.error){
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError(res?.error || "Login failed");
            }
        } catch (error) {
            setIsLoading(false);
            setError("wrong email or password");
        }
    };

    return (
    <>  
        <div className={styles.login}>
            {error && <p className={styles.login__error}>{error}</p>}
            <h1 className={styles.login__title}>Halaman Login</h1>

            <div className={styles.login__form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.login__form__item}>
                        <label
                            htmlFor="email"
                            className={styles.login__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className={styles.login__form__item__input}
                        />
                    </div>

                    <div className={styles.login__form__item}>
                        <label
                            htmlFor="password"
                            className={styles.login__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            className={styles.login__form__item__input}
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.login__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                    <br /><br />
                    <button
                        onClick={() => signIn("google", { callbackUrl, redirect: false })}
                        className={styles.login__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Sign In with Google"}
                    </button>
                </form>

                <br />
                <p className={styles.login__form__item__text}>
                    Belum punya akun? <Link href="/auth/register">Daftar di sini</Link>
                </p>
            </div>
        </div>
    </>
    );
};

export default TampilanLogin;