<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemsResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $categories = $this->kategories()->get()->first();

        return [
            'id' => $this->id,
            'nama_barang' => $this->nama_barang,
            'kategori' => $categories->kategori,
            'harga_jual' => $this->harga_jual,
            'harga_beli' => $this->harga_beli,
            'merk' => $this->merk,
            'stok' => $this->stok,
        ];
    }
}
