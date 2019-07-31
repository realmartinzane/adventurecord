<?php

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

Route::get('/', function () 
{
    return view('layouts.app');
});

Route::get('login/discord', 'Auth\LoginController@redirectToProvider');
Route::get('login/discord/callback', 'Auth\LoginController@handleProviderCallback');

Route::get('updates/data', 'UpdateController@data');
Route::get('updates/{id}', 'UpdateController@get');
Route::get('updates/{id}/single', 'UpdateController@getSingle');
Route::post('updates/store', 'UpdateController@store');
Route::post('updates/{id}/update', 'UpdateController@update');
Route::post('updates/{id}/destroy', 'UpdateController@destroy');

Auth::routes();