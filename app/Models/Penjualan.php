<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Penjualan extends Model
{
    use HasFactory;

    protected $fillable = [
        'jumlah',
        'pembeli',
        'barang',
        'total',
    ];

    /**
     * Get the user that owns the Penjualan
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Barangs(): BelongsTo
    {
        return $this->belongsTo(Barang::class, 'barang');
    }

}
