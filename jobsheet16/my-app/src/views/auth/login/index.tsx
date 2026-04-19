
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./login.module.scss";

const TampilanLogin = () => {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = (formData.get("email") as string) || "";
        const password = (formData.get("password") as string) || "";

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!password.trim()) {
            setError("Password is required");
            return;
        }

        setIsLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setIsLoading(false);

        if (result?.error) {
            setError("Email atau password salah");
            return;
        }

        if (typeof window !== "undefined") {
            localStorage.setItem("isLogin", "true");
        }

        push("/produk");
    };

    return (
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
                </form>

                <br />
                <p className={styles.login__form__item__text}>
                    Belum punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;