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

Route::get('updates/data', 'UpdateController@data');

/*
  |-------------------------------------------------------------------------------
  | Get a Single Update (Index)
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}
  | Controller:     API\UpdateController@get
  | Method:         GET
  | Description:    Get a single update in index view
*/

Route::get('updates/{id}', 'UpdateController@get');

/*
  |-------------------------------------------------------------------------------
  | Get a Single Update (Show)
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/single
  | Controller:     API\UpdateController@getSingle
  | Method:         GET
  | Description:    Get a single update in show view
*/

Route::get('updates/{id}/single', 'UpdateController@getSingle');

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
  | Get Update Data (Edit)
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/update
  | Controller:     API\UpdateController@update
  | Method:         GET
  | Description:    Get update data for edit view
*/

Route::get('updates/{id}/update', 'UpdateController@update');

/*
  |-------------------------------------------------------------------------------
  | Get Update Data (Edit)
  |-------------------------------------------------------------------------------
  | URL:            /api/updates/{id}/destroy
  | Controller:     API\UpdateController@destroy
  | Method:         DELETE
  | Description:    Delete an Update from the records
*/

Route::post('updates/{id}/destroy', 'UpdateController@destroy');