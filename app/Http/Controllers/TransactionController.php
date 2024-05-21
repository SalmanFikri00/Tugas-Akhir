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

        $barang = Barang::find($request->barang);

        $barang->stok -= $request->jumlah;
        $barang->save();

        Penjualan::create( $request->all());

        return redirect()->route('order.index');

    }

    public function destroy ( Request $request ) {

        Penjualan::find($request->id)->delete();

        return redirect('/reporting');

    }

    public function update ( Request $request ) {

        Penjualan::find($request->id)->update($request->all());

        return redirect('/reporting');

    }

    public function edit ( Request $request ) {

        $item = Barang::all();
        $penjualan = Penjualan::find( $request->id);
        $barang = $penjualan->Barangs()->first();

        return Inertia::render('Transactions/EditOrder' , [
            'penjualan' => $penjualan,
            'item' => $item,
            'barangPenjualan' => $barang,
        ]);

    }

    public function Order () {

        $item = Barang::all();

        return Inertia::render('Transactions/Order' , [
            'item' => $item
        ]);
    }


}
