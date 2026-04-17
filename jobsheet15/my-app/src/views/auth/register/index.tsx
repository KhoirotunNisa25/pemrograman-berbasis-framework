
import Link from "next/link";
import { useRouter } from "next/router";
import { use, useState } from "react";
import styles from "./register.module.css";

const TampilanRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const fullname = formData.get("fullname") as string;
        const password = formData.get("password") as string;
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, fullname, password }),
        });
        // const result = await response.json();
        // console.log("Response from API:", result);
        if (response.status == 200) {
            // Handle successful registration
            form.reset();
            // event.currentTarget.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(
                response.status === 400 ? "Email already exists" : "An error occurred. Please try again."
            );
        }
    };
    return (
        <div className={styles.register}>
                {error && <p className={styles.register__error}>{error}</p>}
            <h1 className={styles.register__title}>Halaman Register</h1>
            {/* <button onClick={() => handlerRegister()}>Register</button> <br/> */}
            {/* <h1 style={{ color: "red",border: "1px solid red",borderRadius: "5px",padding: "5px",}}>sudah punya akun</h1> */}

            <div className={styles.register__form}>
                <form onSubmit={handleSubmit}>
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

                    <button type="submit" className={styles.register__form__item__button} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Register"}
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