<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class AppController extends Controller
{
    public function getApp()
    {
        return view('home');
    }

    public function getLogin()
    {
        return view('login');
    }

    public function getLogout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
