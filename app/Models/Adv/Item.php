<?php

namespace App\Models\Adv;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $connection = 'mysql3';
    // protected $connection = 'mysql2';
    protected $table = 'ItemIndex';
    protected $appends = ['sell_price_amount'];

    public function getSellPriceAmountAttribute()
    {
        return number_format($this->SellPrice);
    }
}
