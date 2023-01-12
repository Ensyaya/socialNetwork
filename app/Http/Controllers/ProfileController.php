<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        $userId = auth()->user()->id;
        $user = auth()->user();

        $user = User::findOrFail($userId);

        if ($request->hasFile('image')) {
            $deleted = $user->imageId;
            Cloudinary::destroy($deleted);

            $result = $request->file('image')->storeOnCloudinary('socialnetwork/users');
            $imagePath = $result->getPath();
            $imageId = $result->getPublicId();

            $user->update([
                'name' => $request->name,
                'email' => $request->email,
                'image' => $imagePath,
                'imageId' => $imageId,
            ]);
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'image' => $user->image,
            'imageId' => $user->imageId,
        ]);




        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }


        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();
        if ($user->imageId) {
            $deleted = $user->imageId;
            Cloudinary::destroy($deleted);
        }

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
