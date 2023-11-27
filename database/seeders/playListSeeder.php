<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Url;
use Illuminate\Support\Integer;


class playListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=0;$i<10;$i++)
        {
        DB::table('play_list')->insert([
            'artist' => Str::random(10),
            'song' => Str::random(10),
            'image' => Url::random(10),
            'musicTime' => Integer::random(2).":".Integer::random(2),
        ]);
    }
    }
}
