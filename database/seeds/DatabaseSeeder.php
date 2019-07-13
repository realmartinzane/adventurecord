<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'nagkje' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
