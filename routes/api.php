<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function()
{
    /*
    |-------------------------------------------------------------------------------
    | Get Auth User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/user
    | Controller:     API\UsersController@user
    | Method:         GET
    | Description:    Get the authenticated user
    */
    
    Route::get('/user', 'API\UserController@user');

    /*
    |-------------------------------------------------------------------------------
    | Get a Single User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/users/{id}
    | Controller:     API\UsersController@single
    | Method:         GET
    | Description:    Get the authenticated user
    */
    
    Route::get('/users/{id}', 'API\UserController@single');

    /*
    |-------------------------------------------------------------------------------
    | Get All Updates
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/all
    | Controller:     API\UpdateController@all
    | Method:         GET
    | Description:    Get all updates.
  */

  Route::get('updates/all', 'API\UpdateController@all');

  /*
    |-------------------------------------------------------------------------------
    | Get a Single Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/single
    | Controller:     API\UpdateController@getSingle
    | Method:         GET
    | Description:    Get a single update.
  */

  Route::get('updates/{id}', 'API\UpdateController@single');

  

});

Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', 'role:Admin']], function()
{
/*
    |-------------------------------------------------------------------------------
    | Store a New Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/store
    | Controller:     API\UpdateController@store
    | Method:         POST
    | Description:    Store a new update.
  */

  Route::post('updates/store', 'API\UpdateController@store');

  /*
    |-------------------------------------------------------------------------------
    | Update an Existing Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/update
    | Controller:     API\UpdateController@update
    | Method:         POST
    | Description:    Update an existing update.
  */

  Route::post('updates/{id}/update', 'API\UpdateController@update');

  /*
    |-------------------------------------------------------------------------------
    | Destroy an Existing Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/destroy
    | Controller:     API\UpdateController@destroy
    | Method:         DELETE
    | Description:    Delete an Update from the records.
  */

  Route::post('updates/{id}/destroy', 'API\UpdateController@destroy');
});