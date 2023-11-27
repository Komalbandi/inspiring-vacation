<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PlayList;

class PlayListController extends Controller
{
    public function getAll()
    {
        return PlayList::get();
    }
}
