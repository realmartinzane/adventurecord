<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Update;

class UpdateController extends Controller
{

    

    /*
    |-------------------------------------------------------------------------------
    | Get All Updates
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/data
    | Controller:     API\UpdateController@single
    | Method:         GET
    | Description:    Get all updates.
    */

    public function all()
    {
        return Update::orderby('created_at', 'desc')->get();
    }

    /*
    |-------------------------------------------------------------------------------
    | Get a Single Update (Show)
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/single
    | Controller:     API\UpdateController@single
    | Method:         GET
    | Description:    Get a single update in show view
    */

    public function single($id)
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
    | URL:            /api/v1/updates/store
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
    | Update an Existing Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/update
    | Controller:     API\UpdateController@update
    | Method:         POST
    | Description:    Update an existing update.
    */

    public function update(PostUpdateRequest $request, $id)
    {
        Update::findOrFail($id)->update($request->only('title', 'body'));
        return response()->json('Your update has been edited.');
    }

    /*
    |-------------------------------------------------------------------------------
    | Destroy an Existing Update
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/updates/{id}/destroy
    | Controller:     API\UpdateController@destroy
    | Method:         DELETE
    | Description:    Delete an Update from the records.
    */  

    public function destroy($id)
    {
        Update::findOrFail($id)->delete();
        return response()->json('Your update has been deleted.');
    }
}
