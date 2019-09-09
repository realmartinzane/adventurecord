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
        /*
        DB::table('roles')->insert(['name' => 'Super Admin']);
        DB::table('roles')->insert(['name' => 'Admin']);
        DB::table('roles')->insert(['name' => 'Moderator']);
        DB::table('roles')->insert(['name' => 'User']);
        */
        factory(App\Models\Update::class, 3)->create();
    }
}
