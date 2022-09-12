<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NiceController as Nice;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/eziukas', fn() => '<h1>EŽIUKAS</h1>'); 
Route::get('/bebriukas/super', function() { return '<h1>NE EŽIUKAS</h1>';}); 


Route::get('/fun/{kiek}/{abc?}', [Nice::class, 'fun']);

Route::get('/suma', [Nice::class, 'showForm'])->name('show');
Route::post('/suma', [Nice::class, 'doForm'])->name('calculate');
