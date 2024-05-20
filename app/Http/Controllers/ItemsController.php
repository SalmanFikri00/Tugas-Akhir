<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemsResources;
use App\Models\Barang;
use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ItemsController extends Controller
{



    public function index()
    {

        $datas = Barang::all();

        // dd($datas->kategories()->get()->first()->kategori)

        $datas = ItemsResources::collection($datas);

        return Inertia::render('MasterData/Items' , [
            'datas' => $datas,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        Barang::create($request->all());

        return redirect()->route('items.index');

    }

    /**
     * Display the specified resource.
     */
    public function add()
    {

        $kategori = Kategori::all();

        // dd($kategori);

        return Inertia::render('MasterData/AddItems',[
            'kategori' => $kategori,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

        Barang::find($request->id)->update($request->only(['nama_barang' , 'kategori' , 'harga_jual' , 'harga_beli' , 'merk' , 'stok']));

        return Redirect()->route('items.index');

    }

    public function edit(Request $request)
    {

        $kategori = Kategori::all();
        $item = Barang::find($request->id);
        $kat = $item->kategories()->first();
        $item['kategori'] = $kat;

        return Inertia::render('MasterData/EditItems',[
            'item' => $item,
            'kategori' => $kategori,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        Barang::find($id)->delete();
        return Redirect()->route('items.index');


    }
}
