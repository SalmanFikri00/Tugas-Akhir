<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\DashboardAdmin;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware(['auth', 'verified' ])->group(function () {

    Route::get('/dashboard', [DashboardAdmin::class, 'index'])->name('dashboard');

    Route::get('/', [DashboardAdmin::class, 'index']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


        Route::get('/items', [ ItemsController::class , 'index'])->name('items.index');

        Route::get('/items/add', [ ItemsController::class , 'add'])->name('items.add');

        Route::post('/items/add', [ ItemsController::class , 'store'])->name('items.store');

        Route::get('/items/{id}', [ ItemsController::class , 'edit'])->name('items.edit');

        Route::patch('/items/{id}', [ ItemsController::class , 'update'])->name('items.update');

        Route::delete('/items/{id}', [ ItemsController::class , 'destroy'])->name('items.destroy');

        Route::get('/categories', [ CategoriesController::class , 'index'])->name('categories.index');

        Route::get('/categories/add', [ CategoriesController::class , 'add'])->name('categories.add');

        Route::post('/categories/add', [ CategoriesController::class , 'store'])->name('categories.store');

        Route::get('/reporting', [ TransactionController::class , 'index'])->name('reporting.index');

        Route::get('/order', [ TransactionController::class , 'order'])->name('order.index');

        Route::post('/order', [ TransactionController::class , 'store'])->name('order.store');

});



require __DIR__.'/auth.php';
