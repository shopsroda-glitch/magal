import { ShoppingBag } from "lucide-react"

const BUY_LINK = "https://seguro.paymentsmp.sbs/api/public/shopify?product=2493263451617&store=24932"

export function CtaButtons() {
  return (
    <section className="bg-[#FFFFFF] px-4 pb-4 flex flex-col gap-3">
      <a
        href={BUY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#00A650] px-6 py-3.5 text-base font-bold text-[#FFFFFF] shadow-sm transition-colors hover:bg-[#008C44] active:bg-[#007A3B]"
      >
        <ShoppingBag className="h-5 w-5" strokeWidth={2} />
        {"Adicionar á sacola"}
      </a>
      <a
        href={BUY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center rounded-lg border-2 border-[#00A650] bg-transparent px-6 py-3 text-base font-bold text-[#00A650] transition-colors hover:bg-[#E8F5E9] active:bg-[#C8E6C9]"
      >
        Comprar agora
      </a>
    </section>
  )
}
