<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Socialite;
use App\User;
use App\Update;

class OAuthController extends Controller
{
    public function login($provider)
    {
        $discordUser = Socialite::driver($provider)->stateless()->user();

        $user = User::where('id', $discordUser->getId())->first();

        if(!$user)
        {
            $user = User::create(
            [
                'id' => $discordUser->getId(),
                'name' => $discordUser->getName(),
                'discriminator' => $discordUser->user['discriminator'],
                'email' => $discordUser->getEmail(),
            ]);
        }
        else
        {
            if($user->name !== $discordUser->name)
            {
                $oldName = $user->name;
                $newName = $discordUser->name;

                $user->update(['name' => $discordUser->getName()]);

                $updates = Update::where('author', $oldName)->get();
                foreach($updates as $update)
                {
                    $update->update(['author' => $newName]);
                }
            }
        }

        return response()->json($discordUser);
    }

    public function user($id)
    {
        $user = User::findOrFail($id);
        
        return response()->json($user);
    }

    public function out()
    {
      return view('layouts.app');
    }
}