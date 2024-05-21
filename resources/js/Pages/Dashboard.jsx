import Card from '@/Components/Card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth , barang , penjualan ,kategori }) {

    let displayBarang = barang.filter( ( ba , index ) => index < 4)
    let displayKategori = kategori.filter( ( ba , index ) => index < 4)
    let displayPenjualan = penjualan.filter( ( ba , index ) => index < 4)

    let stokBarang = 0
    barang.forEach(element => {
        stokBarang += element.stok
    });


    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className=' flex gap-12'>
                <Card title='stok Items' total={stokBarang} data={ displayBarang } link='/items/' />
                <Card title='kategori' total={kategori.length} data={ displayKategori } link='/categories/' />
                <Card title='penjualan' total={penjualan.length} data={ displayPenjualan } link='/reporting/' />
            </div>
        </AuthenticatedLayout>
    );
}
