<?php

namespace App\Http\Controllers\Adv;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Adv\Marketplace;

class MarketplaceController extends Controller
{
    public function search($id)
    {
        $item = Marketplace::where('ItemId', '=', 1)->first();
        
        return $item;
    }

    public function top()
    {
        $topItems = Marketplace::all()->take(10);

        return $topItems;
    }
}
