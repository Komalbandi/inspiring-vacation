<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('play_list', function (Blueprint $table) {
            $table->increments('id');
            $table->string('artist');
            $table->string('song');
            $table->string('image');
            $table->string('musicTime');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop('play_list');
    }
};
