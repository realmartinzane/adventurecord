<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

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

    public function getAuthUser()
    {
        return Auth::guard('api')->user();
    }
}
