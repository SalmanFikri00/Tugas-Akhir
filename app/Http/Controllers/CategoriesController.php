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
}
