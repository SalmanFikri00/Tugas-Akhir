<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index () {

        $categories = Kategori::all();

        return Inertia::render('MasterData/Categories',[
            'datas' => $categories
        ]);

    }

    public function add () {

        return Inertia::render('MasterData/AddCategories');

    }

    public function store (Request $request) {

        // dd($request->kategori);

        Kategori::create($request->all());

        return redirect()->route('categories.index');



    }

    public function edit ( Request $request ) {

        $id = $request->id;

        // dd($id);

        $categories = Kategori::find($id);
        // dd($categories);


        return Inertia::render('MasterData/EditCategories' , [
            'categories' => $categories,
            'id' => $id
        ]);

    }

    public function update ( Request $request ) {

        $kategori = Kategori::find($request->id);

        $kategori->update($request->only(['kategori']));

        return redirect('/categories');
    }

    public function destroy (Request $request) {

        Kategori::find($request->id)->delete();

    }

}
