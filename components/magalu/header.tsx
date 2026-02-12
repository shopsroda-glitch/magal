"use client"

import { Menu, Search, ShoppingBag } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar with logo */}
      <div className="flex items-center justify-between bg-[#0086FF] px-4 py-2.5">
        <button aria-label="Menu" className="text-[#FFFFFF] p-1">
          <Menu className="h-6 w-6" strokeWidth={2.5} />
        </button>
        <span className="font-display text-[22px] font-extrabold text-[#FFFFFF] tracking-tight">
          magalu
        </span>
        <button aria-label="Sacola" className="text-[#FFFFFF] p-1 relative">
          <ShoppingBag className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>

      {/* Search bar */}
      <div className="bg-[#0086FF] px-4 pb-3">
        <div className="flex items-center rounded-lg bg-[#FFFFFF] px-3 py-2.5 shadow-sm">
          <input
            type="text"
            placeholder="Busca no Magalu"
            className="flex-1 text-sm text-[#333333] placeholder:text-[#999999] outline-none bg-transparent"
            aria-label="Busca no Magalu"
          />
          <Search className="h-5 w-5 text-[#0086FF]" strokeWidth={2.5} />
        </div>
      </div>

      {/* Rainbow gradient strip - exactly like Magalu */}
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(to right, #00BCD4, #4CAF50, #8BC34A, #FFEB3B, #FF9800, #F44336, #E91E63, #9C27B0)",
        }}
      />
    </header>
  )
}
