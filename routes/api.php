<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function(){
  Route::get('/user', function( Request $request ){
    return $request->user();
  });
});

/*
  |-------------------------------------------------------------------------------
  | Get All Updates
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/data
  | Controller:     API\UpdateController@data
  | Method:         GET
  | Description:    Get all updates.
*/

Route::get('updates/all', 'UpdateController@all');

/*
  |-------------------------------------------------------------------------------
  | Get a Single Update (Show)
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/single
  | Controller:     API\UpdateController@getSingle
  | Method:         GET
  | Description:    Get a single update in show view.
*/

Route::get('updates/{id}', 'UpdateController@single');

/*
  |-------------------------------------------------------------------------------
  | Store a New Update
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/store
  | Controller:     API\UpdateController@store
  | Method:         POST
  | Description:    Store a new update.
*/

Route::post('updates/store', 'UpdateController@store');

/*
  |-------------------------------------------------------------------------------
  | Update an Existing Update
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/update
  | Controller:     API\UpdateController@update
  | Method:         POST
  | Description:    Update an existing update.
*/

Route::post('updates/{id}/update', 'UpdateController@update');

/*
  |-------------------------------------------------------------------------------
  | Destroy an Existing Update
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/destroy
  | Controller:     API\UpdateController@destroy
  | Method:         DELETE
  | Description:    Delete an Update from the records.
*/

Route::post('updates/{id}/destroy', 'UpdateController@destroy');