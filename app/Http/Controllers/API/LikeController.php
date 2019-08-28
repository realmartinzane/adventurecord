<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Update;
use Auth;

class LikeController extends Controller
{

    public function like(Update $update)
    {
        $update->likes()->attach(Auth::guard('api')->user()->id);
    }

    public function unlike(Update $update)
    {
        $update->likes()->detach(Auth::guard('api')->user()->id);
    }
}
