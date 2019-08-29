<?php

namespace App\Models\Adv;

use Illuminate\Database\Eloquent\Model;
use Carbon;

class Profile extends Model
{
    protected $connection = 'mysql3';
    // protected $connection = 'mysql2';
    protected $table = 'Profiles';
    protected $appends = ['last_active', 'experience_amount', 'gold_amount', 'gems_amount'];

    public function getLastActiveAttribute()
    {
        return Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->LastDateUsed)->format('d.m.Y');
    }

    public function getExperienceAmountAttribute()
    {
        return number_format($this->Experience);
    }

    public function getGoldAmountAttribute()
    {
        return number_format($this->Gold);
    }

    public function getGemsAmountAttribute()
    {
        return number_format($this->Gems);
    }
}
