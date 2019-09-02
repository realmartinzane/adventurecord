<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;

class UserController extends Controller
{
    /*
    |-------------------------------------------------------------------------------
    | Get User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/user
    | Method:         GET
    | Description:    Gets the authenticated user
    */

    public function user()
    {
        return Auth::guard('api')->user();
    }

    /*
    |-------------------------------------------------------------------------------
    | Get a Single User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/users/{id}
    | Controller:     API\UpdateController@single
    | Method:         GET
    | Description:    Get a single user.
    */

    public function single($id)
    {
        $user = User::findOrFail($id);
        
        return response()->json($user);
    }

    /*
    |-------------------------------------------------------------------------------
    | Search for a User
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/users/{id}/search
    | Controller:     API\UpdateController@search
    | Method:         GET
    | Description:    Search for a user.
    */

    public function search($id)
    {
        $user = User::where('provider_id', '=', $id)->first();
        
        return response()->json($user->id);
    }
}
