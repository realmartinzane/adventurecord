<?php

namespace App\Models\Adv;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $connection = 'mysql2';
    protected $table = 'ItemIndex';
}
