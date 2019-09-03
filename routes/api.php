<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'v1'], function()
{
  /*
    |-------------------------------------------------------------------------------
    | Get Auth User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/user
    | Controller:     API\UserController@user
    | Method:         GET
    | Description:    Get the authenticated user
  */
    
    Route::get('/user', 'API\UserController@user');

  /*
    |-------------------------------------------------------------------------------
    | Get a Single User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/users/{id}
    | Controller:     API\UserController@single
    | Method:         GET
    | Description:    Get the authenticated user
  */
    
    Route::get('/users/{id}', 'API\UserController@single');

  /*
  |-------------------------------------------------------------------------------
  | Search for a User
  |-------------------------------------------------------------------------------
  | URL:            /api/v1/users/search
  | Controller:     API\UpdateController@search
  | Method:         POST
  | Description:    Search for a user.
  */

    Route::post('/users/search', 'API\UserController@search');

  /*
    |-------------------------------------------------------------------------------
    | Get an Adventure Cord Profile
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/profiles/{id}/single
    | Controller:     API\ProfileController@single
    | Method:         GET
    | Description:    Get an adventure cord profile.
  */

  Route::get('profiles/{id}', 'Adv\ProfileController@single');

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
    | Controller:     API\UpdateController@single
    | Method:         GET
    | Description:    Get a single update.
  */

  Route::get('updates/{id}', 'API\UpdateController@single');
});

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function()
{
  /*
    |-------------------------------------------------------------------------------
    | Like an Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/like
    | Controller:     API\LikeController@like
    | Method:         POST
    | Description:    Like an update.
  */

    Route::post('updates/{id}/like', 'API\LikeController@like');

  /*
    |-------------------------------------------------------------------------------
    | Unlike an Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/unlike
    | Controller:     API\LikeController@unlike
    | Method:         POST
    | Description:    Unlike an update.
  */

    Route::delete('updates/{id}/unlike', 'API\LikeController@unlike');
});

Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', 'role:1']], function()
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

  Route::put('updates/{id}/update', 'API\UpdateController@update');

  /*
    |-------------------------------------------------------------------------------
    | Destroy an Existing Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/destroy
    | Controller:     API\UpdateController@destroy
    | Method:         DELETE
    | Description:    Delete an Update from the records.
  */

  Route::delete('updates/{id}/destroy', 'API\UpdateController@destroy');
});