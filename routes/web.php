<?php

use App\Http\Controllers\post\PostController;
use App\Http\Controllers\pages\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('user/profile', [PageController::class, 'profileIndex'])->name('profile.profileIndex');
    Route::post('user/post', [PostController::class, 'createPost'])->name('post.createPost');
    Route::post('user/post/{id}', [PostController::class, 'updatePost'])->name('post.updatePost');
    Route::delete('user/post/{id}', [PostController::class, 'deletePost'])->name('post.deletePost');

    Route::get('user/profile/{slug}', [PageController::class, 'userProfile'])->name('profile.userProfile');

    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__.'/auth.php';
