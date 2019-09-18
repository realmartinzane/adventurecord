<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon;

class Purchase extends Model
{
    protected $appends = ['date'];
    protected $with = ['user', 'product'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    public function getDateAttribute()
    {
        return Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d.m.Y');
    }
}
