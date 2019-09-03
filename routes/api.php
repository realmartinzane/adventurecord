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
      GET     /api/v1/users/search
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
});

/*
    ==================================================
    Middleware: Authenticated
    ==================================================
*/

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function()
{
  /*
      GET     /api/v1/updates/{id}/like
  */
  Route::post('updates/{id}/like', 'API\LikeController@like');
  /*
      GET     /api/v1/updates/{id}/unlike
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
      GET     /api/v1/updates/store
  */
  Route::post('updates/store', 'API\UpdateController@store');
  /*
      GET     /api/v1/updates/{id/update
  */
  Route::put('updates/{id}/update', 'API\UpdateController@update');
  /*
      GET     /api/v1/updates/{id}/destroy
  */
  Route::delete('updates/{id}/destroy', 'API\UpdateController@destroy');
});