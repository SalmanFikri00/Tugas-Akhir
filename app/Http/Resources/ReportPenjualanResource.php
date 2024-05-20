<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReportPenjualanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $Barangs = $this->Barangs()->get()->first();


        return [
            "pembeli" => $this->pembeli,
            'barang' => $Barangs,
            'jumlah' => $this->jumlah,
            'total' => $this->total,
        ];
    }
}
