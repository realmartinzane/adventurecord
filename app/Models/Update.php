<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon;

class Update extends Model
{
    protected $appends = ['created_date', 'body_html'];
    protected $fillable = ['title', 'body'];

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

    public function getCreatedDateAttribute()
    {
        return Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d.m.Y');
    }

    public function getBodyHtmlAttribute()
    {
        return \Parsedown::instance()->text($this->body);
    }
}