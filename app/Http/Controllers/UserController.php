<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function get($id)
    {
        return User::findOrFail($id);
    }
}
