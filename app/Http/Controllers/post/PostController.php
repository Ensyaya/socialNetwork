<?php

namespace App\Http\Controllers\post;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Profile;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:1250 | min:10',
            'image' => 'image | nullable | max:1024 |mimes:jpg,png,jpeg ',
        ]);

        $userId = auth()->user()->id;
        $profile = Profile::where('user_id', $userId)->first();

        if ($request->hasFile('image')) {

            $result = $request->file('image')->storeOnCloudinary('socialnetwork/posts');
            $imagePath = $result->getPath();
            $imageId = $result->getPublicId();
            Post::create([
                'post_content' => $request->content,
                'post_status' => $request->status,
                'user_id' => $userId,
                'profile_id' => $profile->id,
                'post_image' => $imagePath,
                'post_imageId' => $imageId,
            ]);
        } else {
            Post::create([
                'post_content' => $request->content,
                'post_status' => $request->status,
                'user_id' => $userId,
                'profile_id' => $profile->id,
                'post_image' => null,
                'post_imageId' => null,
            ]);
        }
    }

    public function updatePost(Request $request, $id)
    {
        if ($request->hasFile('image')) {
            $request->validate([
                'content' => 'required|string|max:1250 | min:10',
                'image' => ' nullable | image | max:1024 |mimes:jpg,png,jpeg ',
            ]);
        } else {
            $request->validate([
                'content' => 'required|string|max:1250 | min:10',
            ]);
        }
        $post = Post::findOrFail($id);

        $userId = auth()->user()->id;
        if ($request->hasFile('image')) {

            if ($post->post_imageId) {
                $deleted = $post->post_imageId;
                Cloudinary::destroy($deleted);
            }
            $result = $request->file('image')->storeOnCloudinary('socialnetwork/posts');
            $imagePath = $result->getPath();
            $imageId = $result->getPublicId();

            $post->update([
                'post_content' => $request->content,
                'post_status' => $request->status,
                'user_id' => $userId,
                'post_image' => $imagePath,
                'post_imageId' => $imageId,
            ]);
        } else {
            $post->update([
                'post_content' => $request->content,
                'post_status' => $request->status,
                'user_id' => $userId,
                'post_image' => $post->post_image,
                'post_imageId' => $post->post_imageId,
            ]);
        }
    }

    public function deletePost(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        if ($post->post_imageId) {
            $deleted = $post->post_imageId;
            Cloudinary::destroy($deleted);
        }
        $post->delete();
    }
}
