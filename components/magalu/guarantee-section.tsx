export function GuaranteeSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-4 border-t-8 border-[#F5F5F5]">
      <div className="rounded-xl border border-[#E0E0E0] p-4 flex flex-col gap-5">
        {/* Magalu Indica */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#003B8E]">
            <div className="text-center leading-none">
              <span className="block text-[7px] font-bold text-[#FFFFFF]">magalu</span>
              <span className="block text-[7px] font-bold text-[#FFFFFF]">indica</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mx-auto mt-0.5">
                <circle cx="5" cy="5" r="5" fill="#00A650" />
                <path d="M3 5L4.5 6.5L7 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-[#333333] leading-snug">
            <span className="font-bold">Magalu Indica</span>{" "}
            {"é entrega rápida, menor preço e melhores lojistas pra você."}
          </p>
        </div>

        {/* Magalu garante */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                fill="#0086FF"
              />
              <path d="M10 15.5l-3.5-3.5 1.41-1.41L10 12.67l5.59-5.59L17 8.5l-7 7z" fill="white" />
            </svg>
          </div>
          <p className="text-sm text-[#333333] leading-snug">
            <span className="font-bold">Magalu garante</span> a sua compra, do
            pedido entrega.
          </p>
        </div>

        {/* Devolucao Gratuita */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
                fill="#0086FF"
              />
            </svg>
          </div>
          <p className="text-sm text-[#333333] leading-snug">
            <span className="font-bold">{"Devolução Gratuita"}</span>{" "}
            {"em até 7 dias depois de receber o produto."}
          </p>
        </div>
      </div>
    </section>
  )
}
