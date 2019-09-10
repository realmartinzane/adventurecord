<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function all()
    {
        $special = Product::where('category_id', '=', 2)->get();
        $nonspecial = Product::where('category_id', '!=', 2)->orderby('created_at', 'desc')->get();
        $products = $special->toBase()->merge($nonspecial);
        return response()->json($products);
    }

    public function single($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }
}
