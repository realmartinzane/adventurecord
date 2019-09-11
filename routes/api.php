<?php

use Illuminate\Http\Request;

/*
    ==================================================
    Middleware: None
    ==================================================
*/

Route::group(['prefix' => 'v1'], function()
{
  /*
      GET     /api/v1/user
  */
  Route::get('/user', 'API\UserController@user');
  /*
      GET     /api/v1/users/{id}
  */
  Route::get('/users/{id}', 'API\UserController@single');
  /*
      POST     /api/v1/users/search
  */
  Route::post('/users/search', 'API\UserController@search');
  /*
      GET     /api/v1/profiles/{id}/single
  */
  Route::get('profiles/{id}', 'Adv\ProfileController@single');
  /*
      GET     /api/v1/upates/all
  */
  Route::get('updates/all', 'API\UpdateController@all');
  /*
      GET     /api/v1/updates/{id}
  */
  Route::get('updates/{id}', 'API\UpdateController@single');
  /*
      GET     /api/v1/shop/products/
  */
  Route::get('shop/products', 'API\ProductController@all');
  /*
      GET     /api/v1/shop/products/{id}
  */
  Route::get('shop/products/{id}', 'API\ProductController@single');
  /*
      POST     /api/v1/shop/products/{id}/create-payment
  */
  Route::post('shop/products/{id}/create-payment', 'API\PaymentController@create');
  /*
      POST     /api/v1/shop/products/{id}/execute-payment
  */
  Route::post('shop/products/{id}/execute-payment', 'API\PaymentController@execute');
});

/*
    ==================================================
    Middleware: Authenticated
    ==================================================
*/

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function()
{
  /*
      POST     /api/v1/updates/{id}/like
  */
  Route::post('updates/{id}/like', 'API\LikeController@like');
  /*
      DELETE     /api/v1/updates/{id}/unlike
  */
  Route::delete('updates/{id}/unlike', 'API\LikeController@unlike');
});

/*
    ==================================================
    Middleware: Authenticated & Role (Super Admin)
    ==================================================
*/

Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', 'role:1']], function()
{
  /*
      POST     /api/v1/updates/store
  */
  Route::post('updates/store', 'API\UpdateController@store');
  /*
      PUT     /api/v1/updates/{id/update
  */
  Route::put('updates/{id}/update', 'API\UpdateController@update');
  /*
      DELETE     /api/v1/updates/{id}/destroy
  */
  Route::delete('updates/{id}/destroy', 'API\UpdateController@destroy');
});