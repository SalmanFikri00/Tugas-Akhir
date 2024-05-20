<?php

namespace Database\Seeders;

use App\Models\barang;
use App\Models\Kategori;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'salman',
            'role' => 'admin',
            'email' => 'fikriyoyoyo02@gmail.com',
            'password' => '12345678',
        ]);

        Kategori::create([
            'kategori' => 'laptop'
        ]);

        Kategori::create([
            'kategori' => 'ssd'
        ]);

        Kategori::create([
            'kategori' => 'pc desktop'
        ]);

        barang::create([
            "nama_barang" => 'TUF gimang',
            "kategori" => 1,
            'harga_jual' => 15000000,
            'harga_beli'=> 13000000,
            'merk' => 'Asus',
            'stok' => 20,
        ]);
        barang::create([
            "nama_barang" => 'NVME 256gb',
            "kategori" => 2,
            'harga_jual' => 500000,
            'harga_beli'=> 400000,
            'merk' => 'vgen',
            'stok' => 100,
        ]);
        barang::create([
            "nama_barang" => 'HP DL102 Desktop PC',
            "kategori" => 3,
            'harga_jual' => 11000000,
            'harga_beli'=> 9000000,
            'merk' => 'HP',
            'stok' => 25,
        ]);


    }
}
