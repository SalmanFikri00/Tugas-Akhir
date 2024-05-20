<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Kategori;
use App\Models\Penjualan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardAdmin extends Controller
{
    public function index () {

        $barang = Barang::all();

        $kategori = Kategori::all();

        $penjualan = Penjualan::all();

        return Inertia::render('Dashboard' , [
            'barang' => $barang,
            'kategori' => $kategori,
            'penjualan' => $penjualan,
        ]);

    }
}
