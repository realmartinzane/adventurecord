<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Update;

class UpdateController extends Controller
{
    public function data()
    {
        return Update::orderby('created_at', 'desc')->get();
    }
    public function get()
    {
        return Update::findOrFail($id);
    }
}
