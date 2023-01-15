<?php

namespace App\Http\Controllers\pages;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Profile;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;


class PageController extends Controller
{
    public function profileIndex(): Response
    {
        $userId = auth()->user()->id;
        $posts = Post::where('user_id', $userId)->latest()->get();
        return Inertia::render('Profile', [
            'posts' => $posts
        ]);
    }

    public function userProfile($slug): Response
    {
        $profile = Profile::whereSlug($slug)->first();
        $user = User::where('username', $slug)->first();
        $posts = Post::where('profile_id', $profile->id)->latest()->get();
        // dd($user);
        return Inertia::render('UserProfile', [
            'profile' => $profile,
            'posts' => $posts,
            'user' => $user
        ]);
    }
}
