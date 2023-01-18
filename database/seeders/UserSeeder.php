<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'name' => 'ens',
            'surname' => 'yaya',
            'username' => 'admin',
            'email' => 'admin@admin.com',
            'image' => 'http://res.cloudinary.com/dzexlugxs/image/upload/v1673789449/socialnetwork/users/l0t96rn4zy2tkibxa1hm.jpg',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        User::factory(50)->create();
    }
}
