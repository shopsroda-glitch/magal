"use client"

import { useState } from "react"

const fullDescription = `O ventilador é uma opção muito prática para refrescar sua casa nos dias de calor. É que além de poder ser instalado em quase qualquer ambiente, ele é prático, fácil de usar e tem várias funções. Com o ventilador de mesa VTX-40-8P Turbo da Mondial você terá muito mais vento e menos barulho proporcionando bem estar para toda sua família. Ideal para quem procura eficiência, segurança e grande vazão de ar, ele tem 03 velocidades: máxima (turbo 8 pás), média (mais conforto) e mínima (silencioso/dormir). Vem com grades desmontáveis facilitando a limpeza do produto, botão de fácil acionamento para movimento oscilante na direção horizontal, ajuste de inclinação e hélice de 40cm. A função Turbo, faz com que suas 8 pás gere 20% mais vento: a hélice de 8 pás possui melhor design aerodinâmico, permitindo maior vazão de ar e melhorando o seu desempenho. Tudo para seu bem estar.`

export function DescriptionSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="bg-card px-4 py-5 border-t-8 border-[#F5F5F5]">
      <h2 className="text-lg font-bold text-[#1A1A1A]">
        {"Descrição e ficha técnica"}
      </h2>
      <p className="mt-1 text-xs text-[#999999]">
        {"Código 228887000"}
      </p>
      <div
        className={`mt-3 text-sm leading-relaxed text-[#333333] ${!expanded ? "line-clamp-6" : ""}`}
      >
        <p>{fullDescription}</p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-sm font-bold text-[#0086FF] hover:underline"
      >
        {expanded ? "Ver menos" : "Ver mais"}
      </button>
    </section>
  )
}
