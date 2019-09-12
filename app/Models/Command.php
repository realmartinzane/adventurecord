<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    public function command_category()
    {
        return $this->belongsTo('App\Models\CommandCategory');
    }
}
