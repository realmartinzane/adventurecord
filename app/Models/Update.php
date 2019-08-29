<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon;
use Illuminate\Support\Facades\Auth;

class Update extends Model
{
    protected $appends = ['created_date', 'body_html', 'likes_count'];
    protected $fillable = ['title', 'body'];
    protected $with = ['author', 'userLike'];

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

    public function author()
    {
        return $this->belongsTo('App\User', 'author_id', 'id');
    }

    public function likes()
    {
        return $this->belongsToMany('App\User', 'likes')->withTimestamps();
    }

    public function userLike()
    {
        return $this->belongsToMany('App\User', 'likes')->where('user_id', auth('api')->id());
    }

    public function getLikesCountAttribute()
    {
        return $this->likes()->count();
    }
}
