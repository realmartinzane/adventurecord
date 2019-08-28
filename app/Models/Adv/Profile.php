<?php

namespace App\Models\Adv;

use Illuminate\Database\Eloquent\Model;
use Carbon;

class Profile extends Model
{
    protected $connection = 'mysql2';
    protected $table = 'Profiles';
    protected $appends = ['last_active'];

    public function getLastActiveAttribute()
    {
        return Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->LastDateUsed)->format('d.m.Y');
    }
}
