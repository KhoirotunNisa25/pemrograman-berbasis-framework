import { useRouter } from "next/router";
import { useEffect } from "react";

const produk = () => {
    const { push } = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isLogin = localStorage.getItem('isLogin') === 'true';
            if (!isLogin) {
                push('/auth/login');
            }
        }
    }, [push]);

    return (
        <div>
            Produk user Page
        </div>
    );
};

export default produk;