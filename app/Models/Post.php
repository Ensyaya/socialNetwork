<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_content',
        'post_image',
        'post_imageId',
        'profile_id',
        'user_id',
        'post_status',
    ];

//     public function user()
//     {
//         return $this->hasMany(User::class, 'user_id');
//     }
}
