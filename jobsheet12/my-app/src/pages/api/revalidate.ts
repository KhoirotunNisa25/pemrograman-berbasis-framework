// next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    revalidated: boolean;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try  {
        await res.revalidate("/produk/static");
        return res.status(200).json({ revalidated: true });
    } catch (error) {
        console.error("Error in API route:", error);
        res.status(500).send({ revalidated: false });
    }
}

// Note : jika kita menggunakan code ini ada sedikit masalah yaitu Ketika salah satu data dihapus
// maka data yang terhapus tidak secara otomatis terupdate pada layar meskipun sudah di
// refresh selama 10 detik. Untuk bisa terupdate data yang ditampilkan diperlukan trigger
// dengan mengakses apinya http://localhost:3000/api/produk
