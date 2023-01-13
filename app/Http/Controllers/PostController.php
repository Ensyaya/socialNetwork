<?php

namespace App\Http\Controllers;

use App\Models\Post;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;


class PostController extends Controller
{

    public function createPost(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:1250 | min:10',
            'image' => 'image | nullable | max:1024 |mimes:jpg,png,jpeg ',
        ]);

        $userId = auth()->user()->id;


        if ($request->hasFile('image')) {

            $result = $request->file('image')->storeOnCloudinary('socialnetwork/posts');
            $imagePath = $result->getPath();
            $imageId = $result->getPublicId();
            Post::create([
                'post_content' => $request->content,
                'user_id' => $userId,
                'post_image' => $imagePath,
                'post_imageId' => $imageId,
            ]);
        } else {
            Post::create([
                'post_content' => $request->content,
                'user_id' => $userId,
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

        if ($post->post_imageId) {
            $deleted = $post->post_imageId;
            Cloudinary::destroy($deleted);
        }
        if ($request->hasFile('image')) {
            $result = $request->file('image')->storeOnCloudinary('socialnetwork/posts');
            $imagePath = $result->getPath();
            $imageId = $result->getPublicId();

            $post->update([
                'post_content' => $request->content,
                'user_id' => $userId,
                'post_image' => $imagePath,
                'post_imageId' => $imageId,
            ]);
        } else {
            $post->update([
                'post_content' => $request->content,
                'user_id' => $userId,
                'post_image' => null,
                'post_imageId' => null,
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
