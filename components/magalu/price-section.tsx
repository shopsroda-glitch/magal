export function PriceSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-4 border-t-8 border-[#F5F5F5]">
      {/* Price header with discount badge and oferta relampago */}
      <div className="flex items-start justify-between">
        <div>
          <span className="inline-block rounded bg-[#E8F5E9] px-2 py-0.5 text-xs font-bold text-[#00A650]">
            4% OFF no PIX
          </span>
          <p className="mt-2 text-sm text-[#999999] line-through">R$249,90</p>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[32px] font-extrabold text-[#1A1A1A] leading-tight font-display">
              R$79,90
            </span>
            <span className="text-base text-[#666666]">no Pix</span>
          </div>
        </div>
        {/* Oferta Relampago badge */}
        <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-[#FFD600] to-[#00A650] px-3 py-2.5 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase text-[#FFFFFF] leading-tight block drop-shadow-sm">
            OFERTA
          </span>
          <span className="text-[10px] font-extrabold uppercase text-[#FFFFFF] leading-tight block drop-shadow-sm">
            {"REL\u00c2MPAGO"}
          </span>
        </div>
      </div>

      {/* Payment options cards */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {/* Credit card option */}
        <div className="rounded-lg border border-[#E0E0E0] p-3">
          <p className="text-sm font-bold text-[#1A1A1A]">
            {"Cartão de crédito"}
          </p>
          <p className="mt-1 text-sm text-[#333333]">R$ 98,31</p>
          <p className="text-xs text-[#666666]">ou 12x de R$ 6,88</p>
        </div>

        {/* Pix option */}
        <div className="rounded-lg border border-[#E0E0E0] p-3">
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-bold text-[#1A1A1A]">Pix</p>
            <span className="text-xs font-bold text-[#00A650]">4% OFF</span>
          </div>
          <p className="mt-1 text-sm text-[#333333]">R$79,90</p>
        </div>
      </div>
    </section>
  )
}
