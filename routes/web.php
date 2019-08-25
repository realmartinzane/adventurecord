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

Route::get('/', 'Web\AppController@getApp')->middleware('auth');

Route::get('/login', 'Web\AppController@getLogin')->name('login')->middleware('guest');
Route::get('/logout', 'Web\AppController@getLogout')->name('logout');

Route::get('/login/{provider}', 'Web\AuthController@getSocialRedirect')->middleware('guest');
Route::get('/login/{provider}/callback', 'Web\AuthController@getSocialCallback')->middleware('guest');
/*
Route::post('sociallogin/{provider}', 'Auth\AuthController@SocialSignup');
Route::get('login/{provider}/callback', 'OutController@index')->where('provider', '.*');
*/