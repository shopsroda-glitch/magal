import { ShoppingBag } from "lucide-react"

const BUY_LINK = "https://seguro.paymentsmp.sbs/api/public/shopify?product=2493263451617&store=24932"

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E0E0E0] bg-[#FFFFFF] shadow-[0_-2px_10px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2.5">
        <div>
          <p className="text-sm font-extrabold text-[#1A1A1A]">
            R$79,90{" "}
            <span className="text-xs font-normal text-[#666666]">no Pix</span>
          </p>
          <p className="text-xs text-[#999999]">
            {"ou 12x de R$11,28 no cartão"}
          </p>
        </div>
        <a
          href={BUY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-[#00A650] px-5 py-2.5 text-sm font-extrabold text-[#FFFFFF] uppercase tracking-wider shadow-sm transition-colors hover:bg-[#008C44] active:bg-[#007A3B]"
        >
          <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
          COMPRAR AGORA
        </a>
      </div>
    </div>
  )
}
