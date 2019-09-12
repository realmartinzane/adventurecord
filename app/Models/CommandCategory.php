<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CommandCategory extends Model
{
    public function command()
    {
        return $this->hasMany('App\Models\Command');
    }
}
