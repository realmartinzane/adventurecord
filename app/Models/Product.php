<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $appends = ['description_html'];
    protected $with = ['category'];

    public function getDescriptionHtmlAttribute()
    {
        return \Parsedown::instance()->text($this->description);
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
