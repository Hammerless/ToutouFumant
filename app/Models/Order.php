<?php

namespace App\Models;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'menu_id',
        'user_id',
        'steps',
        'is_active'
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
