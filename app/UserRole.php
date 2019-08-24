<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserRole extends Model
{

    protected $with = ['details'];

    public function details()
    {
        return $this->hasOne('App\Role', 'id');
    }
}
