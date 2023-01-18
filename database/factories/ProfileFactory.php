<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $users = User::all();
        foreach ($users as $user) {
            $userId = $user->id;
            $slug = $user->username;
        }
        return [
            'user_id' => $userId,
            'slug' => Str::slug($slug),
        ];
    }
}
