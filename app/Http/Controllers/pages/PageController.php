<?php

namespace App\Http\Controllers\pages;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Post;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
}
