<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Update;
use App\Http\Requests\PostUpdateRequest;
use Auth;

class UpdateController extends Controller
{

    public function all()
    {
        $updates = Update::orderby('created_at', 'desc')->get();
        return response()->json($updates);
    }

    public function single($id)
    {
        $update = Update::findOrFail($id);
        $update->views += 1;
        $update->save();
        
        $savedUpdate = Update::findOrFail($id);
        return response()->json($savedUpdate);
    }

    public function store(PostUpdateRequest $request)
    {
        $update = new Update();
        $update->title = $request->title;
        $update->body = $request->body;
        $update->author_id = Auth::user()->id;
        $update->save();

        return response()->json('Your update has been created.');
    }

    public function update(PostUpdateRequest $request, $id)
    {
        Update::findOrFail($id)->update($request->only('title', 'body'));
        return response()->json('Your update has been edited.');
    }

    public function destroy($id)
    {
        Update::findOrFail($id)->delete();
        return response()->json('Your update has been deleted.');
    }
}
