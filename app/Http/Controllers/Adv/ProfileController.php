<?php
namespace App\Http\Controllers\Adv;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Adv\Profile;
class ProfileController extends Controller
{
    public function single($id)
    {
        $profile = Profile::findOrFail($id);
        if($profile == null) return;
        return response()->json($profile);
    }
}