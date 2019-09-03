<?php

namespace App\Models\Adv;

use Illuminate\Database\Eloquent\Model;

class Marketplace extends Model
{
    protected $connection = 'mysql3';
    // protected $connection = 'mysql2';
    protected $table = 'Marketplace';
    protected $with = ['details'];
    protected $appends = ['price_amount'];

    public function details()
    {
        return $this->belongsTo('App\Models\Adv\Item', 'ItemId', 'ItemId');
    }

    public function getPriceAmountAttribute()
    {
        return number_format($this->Price);
    }
}
