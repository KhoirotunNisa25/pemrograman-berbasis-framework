import dynamic from 'next/dynamic';

const AdminPanel = dynamic(() => import('@/views/admin/AdminPanel'));

const halamanAdmin = () => {
    return <AdminPanel />;
};

export default halamanAdmin;