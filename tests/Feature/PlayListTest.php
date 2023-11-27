<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\PlayList;

class PlayListTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_get_playlist(): void
    {
        $playList=new PlayList;

        $playList->artist = 'Ari Lasso';
        $playList->song = 'Hampa';
        $playList->image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ari_Lasso.jpg/220px-Ari_Lasso.jpg';
        $playList->musicTime = '04:30';
        $playList->save();

        $response = $this->get('/api/playList');

        $response->assertStatus(200);

        $playList->delete();
    }
}
