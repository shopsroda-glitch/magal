"use client"

import { useState } from "react"
import { Heart, Star } from "lucide-react"

export function ProductInfo() {
  const [liked, setLiked] = useState(false)
  const [selectedVoltage, setSelectedVoltage] = useState("110V")

  return (
    <section className="bg-[#FFFFFF] px-4 pb-4">
      {/* Magalu Indica badge */}
      <div className="mb-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0086FF] px-3 py-1.5 text-sm font-bold text-[#FFFFFF]">
          magalu indica
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.5 8L7 10.5L11.5 5.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {/* Product title */}
      <h1 className="text-base font-semibold leading-snug text-[#1A1A1A]">
        Ventilador de Mesa Mondial VTX-40-8P 40cm - 3 Velocidades
      </h1>

      {/* Rating and favorite */}
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= 4
                    ? "fill-[#FFAA00] text-[#FFAA00]"
                    : "fill-[#FFAA00]/50 text-[#FFAA00]/50"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#666666]">4.8 (10855)</span>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          aria-label={
            liked ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
          className="p-1"
        >
          <Heart
            className={`h-6 w-6 ${
              liked ? "fill-[#E53935] text-[#E53935]" : "text-[#999999]"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Voltagem selector */}
      <div className="mt-4">
        <span className="text-sm text-[#666666]">Voltagem</span>
        <div className="mt-2 flex items-center gap-3">
          {["110V", "220V"].map((voltage) => (
            <button
              key={voltage}
              onClick={() => setSelectedVoltage(voltage)}
              className={`rounded-full border px-5 py-1.5 text-sm font-medium transition-colors ${
                selectedVoltage === voltage
                  ? "border-[#0086FF] text-[#0086FF] bg-[#EBF5FF]"
                  : "border-[#CCCCCC] text-[#333333]"
              }`}
            >
              {voltage}
            </button>
          ))}
        </div>
      </div>

      {/* Sold by */}
      <div className="mt-4 border-t border-[#EEEEEE] pt-3">
        <p className="text-sm text-[#666666]">
          Vendido e entregue por{" "}
          <span className="font-bold text-[#0086FF]">Magalu</span>
        </p>
      </div>
    </section>
  )
}
