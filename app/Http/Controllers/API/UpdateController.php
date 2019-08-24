<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Update;
use App\Http\Requests\PostUpdateRequest;

class UpdateController extends Controller
{

    /*
    |-------------------------------------------------------------------------------
    | Get All Updates
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/data
    | Controller:     API\UpdateController@data
    | Method:         GET
    | Description:    Get all updates.
    */

    public function data()
    {
        return Update::orderby('created_at', 'desc')->get();
    }

    /*
    |-------------------------------------------------------------------------------
    | Get a Single Update (Index)
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/{id}
    | Controller:     API\UpdateController@get
    | Method:         GET
    | Description:    Get a single update in index view
    */

    public function get($id)
    {
        return Update::findOrFail($id);
    }

    /*
    |-------------------------------------------------------------------------------
    | Get a Single Update (Show)
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/{id}/single
    | Controller:     API\UpdateController@getSingle
    | Method:         GET
    | Description:    Get a single update in show view
    */

    public function getSingle($id)
    {
        $update = Update::findOrFail($id);
        $update->views += 1;
        $update->save();
        return Update::findOrFail($id);
    }

    /*
    |-------------------------------------------------------------------------------
    | Store a New Update
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/store
    | Controller:     API\UpdateController@store
    | Method:         POST
    | Description:    Store a new update.
    */

    public function store(PostUpdateRequest $request)
    {
        Update::create($request->only('title', 'body'));
        return response()->json('Your update has been created.');
    }

    /*
    |-------------------------------------------------------------------------------
    | Get Update Data (Edit)
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/{id}/update
    | Controller:     API\UpdateController@update
    | Method:         GET
    | Description:    Get update data for edit view
    */

    public function update(PostUpdateRequest $request, $id)
    {
        Update::findOrFail($id)->update($request->only('title', 'body'));
        return response()->json('Your update has been edited.');
    }

    /*
    |-------------------------------------------------------------------------------
    | Get Update Data (Edit)
    |-------------------------------------------------------------------------------
    | URL:            /api/updates/{id}/destroy
    | Controller:     API\UpdateController@destroy
    | Method:         DELETE
    | Description:    Delete an Update from the records
    */  

    public function destroy($id)
    {
        Update::findOrFail($id)->delete();
        return response()->json('Your update has been deleted.');
    }
}
