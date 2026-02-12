import { MapPin } from "lucide-react"

export function ShippingSection() {
  return (
    <section className="bg-card px-4 py-4">
      <button className="flex w-full items-center gap-3 rounded-lg border border-[#E0E0E0] px-4 py-3.5 text-left">
        <MapPin className="h-5 w-5 text-[#2E7D32] shrink-0" fill="#2E7D32" strokeWidth={0} />
        <span className="text-sm text-[#333333]">Calcular frete e prazo</span>
      </button>
    </section>
  )
}
