<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController as C;
use App\Http\Controllers\MovieController as M;
use App\Http\Controllers\HomeController as H;
use App\Http\Controllers\TagController as T;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| I will!
|
*/



Auth::routes();

Route::get('/', [H::class, 'homeList'])->name('home')->middleware('gate:home');
Route::put('/rate/{movie}', [H::class, 'rate'])->name('rate')->middleware('gate:user');
Route::post('/comment/{movie}', [H::class, 'addComment'])->name('comment')->middleware('gate:user');

Route::prefix('movie')->name('m_')->group(function () {
    Route::get('/', [M::class, 'index'])->name('index')->middleware('gate:user');
    Route::get('/create', [M::class, 'create'])->name('create')->middleware('gate:admin');
    Route::post('/create', [M::class, 'store'])->name('store')->middleware('gate:admin');
    Route::get('/show/{movie}', [M::class, 'show'])->name('show')->middleware('gate:user');
    Route::delete('/delete/{movie}', [M::class, 'destroy'])->name('delete')->middleware('gate:admin');
    Route::get('/edit/{movie}', [M::class, 'edit'])->name('edit')->middleware('gate:admin');
    Route::put('/edit/{movie}', [M::class, 'update'])->name('update')->middleware('gate:admin');
});

Route::prefix('tag')->name('t_')->group(function () {
    Route::get('/', [T::class, 'index'])->name('index')->middleware('gate:user');
    Route::get('/create', [T::class, 'create'])->name('create')->middleware('gate:admin');
    Route::post('/create', [T::class, 'store'])->name('store')->middleware('gate:admin');
    Route::get('/show/{tag}', [T::class, 'show'])->name('show')->middleware('gate:user');
    Route::delete('/delete/{tag}', [T::class, 'destroy'])->name('delete')->middleware('gate:admin');
    Route::get('/edit/{tag}', [T::class, 'edit'])->name('edit')->middleware('gate:admin');
    Route::put('/edit/{tag}', [T::class, 'update'])->name('update')->middleware('gate:admin');
});

Route::prefix('comment')->name('c_')->group(function () {
    Route::get('/', [C::class, 'index'])->name('index')->middleware('gate:user');
    Route::delete('/delete/{comment}', [C::class, 'destroy'])->name('delete')->middleware('gate:admin');
});
