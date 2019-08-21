<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Socialite;
use App\User;

class OAuthController extends Controller
{
    public function getUser($provider)
    {
        $user = Socialite::driver($provider)->stateless()->user();

        return response()->json($user);
    }

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

        return response()->json($user);
    }
}