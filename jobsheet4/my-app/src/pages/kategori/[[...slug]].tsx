import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const halamanKategori = () => {
    const { query} = useRouter();
    const slug = query.slug as string[] | undefined;

    return (
        <div>
            <h1>Halaman Kategori</h1>
            <p>Parameter Url:</p>

            {slug && slug.length > 0 ? (
                <ul>
                    {slug.map((s, i) => (
                        <li key={i}>{s}</li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter</p>
            )}

            <br/>
            <div>
                <p><strong>Informasi URL:</strong></p>
                <p>Jumlah Parameter: {slug ? slug.length : 0}</p>
                <p>Full Path: /kategori/{slug ? slug.join("/") : ""}</p>
            </div>
        </div>
    );
};

export default halamanKategori;