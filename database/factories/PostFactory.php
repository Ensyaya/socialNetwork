<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $ID = rand(1,25);
        return [
            'post_content' => $this->faker->words(15, true),
            'post_image' => $this->faker->imageUrl(640, 480),
            'user_id' => $ID,
            'profile_id' => $ID,
            'post_status' => 'Open to Everyone',
        ];
    }
}
