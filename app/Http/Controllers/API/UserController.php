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

    public function auth()
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
    | Description:    Get a single update.
    */

    public function single($id)
    {
        $user = User::findOrFail($id);
        
        return response()->json($user);
    }
}
