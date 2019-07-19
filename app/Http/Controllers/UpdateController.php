<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Update;
use App\Http\Requests\PostUpdateRequest;

class UpdateController extends Controller
{
    public function data()
    {
        return Update::orderby('created_at', 'desc')->get();
    }
    public function get($id)
    {
        return Update::findOrFail($id);
    }
    public function store(PostUpdateRequest $request)
    {
        $update = new Update();
        $update->title = $request->title;
        $update->body = $request->body;
        $update->save();
        
        return 'Success!';
    }
    public function update(PostUpdateRequest $request, $id)
    {
        $update = Update::findOrFail($id);
        $update->title = $request->title;
        $update->body = $request->body;
        $update->save();
        
        return 'Success!';
    }
}
