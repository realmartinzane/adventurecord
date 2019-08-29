<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Update;
use Auth;

class LikeController extends Controller
{
    public function like($id)
    {
        $update = Update::findOrFail($id);
        
        if(!$update->likes->contains(Auth::user()->id))
        {
            $update->likes()->attach(Auth::user()->id);

            return response()->json(['update_liked' => true], 204);
        }
    }

    public function unlike($id)
    {
        $update = Update::findOrFail($id);

        $update->likes()->detach(Auth::user()->id);

        return response(null, 204);
    }
}
