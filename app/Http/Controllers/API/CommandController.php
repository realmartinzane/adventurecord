<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Command;

class CommandController extends Controller
{
    public function all()
    {
        $commands = Command::all();
        return response()->json($commands);
    }
}
