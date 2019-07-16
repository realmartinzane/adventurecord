<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Update extends Model
{
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }
}
