<?php

namespace App\Http\Controllers\Adv;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    public function single($id)
    {
        $item = Item::where('ItemId', '=', 1)->first();
        
        return $item;
    }
}
