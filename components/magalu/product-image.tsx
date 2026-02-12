"use client"

import React from "react"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

const images = [
  { src: "/images/ventilador-1.png", alt: "Ventilador de Mesa Mondial VTX-40-8P - Vista frontal" },
  { src: "/images/ventilador-2.png", alt: "Ventilador Mondial VTX-40-8P - Linha VTX Super Turbo 8 pas" },
  { src: "/images/ventilador-3.png", alt: "Ventilador Mondial VTX-40-8P - Inclinacao vertical e facilidade na limpeza" },
  { src: "/images/ventilador-4.png", alt: "Ventilador Mondial VTX-40-8P - Oscilacao horizontal e silencio" },
  { src: "/images/ventilador-5.png", alt: "Ventilador Mondial VTX-40-8P - Dimensoes 49x65x34.5cm 2.9kg" },
  { src: "/images/ventilador-6.png", alt: "Ventilador Mondial VTX-40-8P - Alca de transporte e controle de velocidade" },
]

export function ProductImage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, images.length - 1))
    setCurrentIndex(clamped)
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: clamped * scrollRef.current.offsetWidth, behavior: "smooth" })
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (diff > threshold) {
      goTo(currentIndex + 1)
    } else if (diff < -threshold) {
      goTo(currentIndex - 1)
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const width = scrollRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / width)
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
        setCurrentIndex(newIndex)
      }
    }
  }

  return (
    <section className="relative bg-[#FFFFFF]">
      {/* Swipeable image carousel */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
      >
        {images.map((img, i) => (
          <div key={img.src} className="relative aspect-square w-full flex-shrink-0 snap-center">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              className="object-contain p-4"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Image counter badge - bottom right like Magalu */}
      <div className="absolute bottom-10 right-4 rounded bg-[#00000099] px-2.5 py-1 text-xs font-semibold text-[#FFFFFF]">
        {currentIndex + 1} de {images.length}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 pb-3 pt-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex
                ? "w-5 bg-[#0086FF]"
                : "w-2 bg-[#CCCCCC]"
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
