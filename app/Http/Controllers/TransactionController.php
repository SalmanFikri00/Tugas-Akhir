<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReportPenjualanResource;
use App\Models\Barang;
use App\Models\Penjualan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{

    public function index () {


        $penjualan = Penjualan::all();



        return Inertia::render('Transactions/Reporting' , [
            'penjualan' => ReportPenjualanResource::collection($penjualan)
        ]);
    }

    public function store (Request $request) {

        // dd($request->barang);
        Penjualan::create( $request->all());

        return redirect()->route('order.index');

    }

    public function delete () {

    }

    public function update () {

    }

    public function Order () {

        $item = Barang::all();

        return Inertia::render('Transactions/Order' , [
            'item' => $item
        ]);
    }


}
