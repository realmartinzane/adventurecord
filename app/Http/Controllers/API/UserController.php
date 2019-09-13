<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
use App\Http\Requests\SearchUserRequest;

class UserController extends Controller
{
    public function user()
    {
        return Auth::guard('api')->user();
    }

    public function single($id)
    {
        $user = User::findOrFail($id);
        
        return response()->json($user);
    }

    public function search(SearchUserRequest $request)
    {
        $user = User::where('provider_id', '=', $request->id)->first();
        
        return response()->json($user->id);
    }
}
