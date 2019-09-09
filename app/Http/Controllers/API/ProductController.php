<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function all()
    {
        $products = Product::orderby('created_at', 'desc')->get();
        return response()->json($products);
    }

    public function single($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }
}
