<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Barang extends Model
{
    use HasFactory;

    protected $fillable = [
        "nama_barang",
        "kategori",
        'harga_jual',
        'harga_beli',
        'merk',
        'stok',
    ];

    /**
     * Get the user that owns the barang
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function kategories(): BelongsTo
    {
        return $this->belongsTo(Kategori::class, 'kategori');
    }
}
