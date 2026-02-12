export function Footer() {
  return (
    <footer className="bg-[#0086FF] px-4 py-6 text-center pb-24">
      <p className="text-xs leading-relaxed text-[#FFFFFF]">
        {"Preços e condições de pagamento exclusivos para compras via internet, podendo variar nas lojas físicas. Ofertas válidas na compra de até 5 peças de cada produto por cliente, até o término dos nossos estoques para internet. Caso os produtos apresentem divergências de valores, o preço válido é o da sacola de compras. Vendas sujeitas a análise e confirmação de dados."}
      </p>
      <a
        href="#"
        className="mt-3 inline-block text-xs font-bold text-[#FFFFFF] underline underline-offset-2"
      >
        {"Política de privacidade"}
      </a>
      <p className="mt-3 text-xs text-[#FFFFFF]">
        {"Magazine Luiza S/A \u2013 CNPJ: 47.960.950/1088-36"}
      </p>
      <p className="text-xs text-[#FFFFFF]">
        {"Rua Arnulfo de Lima, 2385 \u2013 Vila Santa Cruz CEP: 14.403\u2013471 \u2013 Franca/SP"}
      </p>
      <p className="mt-2 text-xs text-[#FFFFFF]">
        {"Endereço eletrônico: "}
        <a href="#" className="font-bold underline underline-offset-2">
          www.magazineluiza.com.br
        </a>
        {","}
      </p>
      <p className="text-xs text-[#FFFFFF]">
        <a href="#" className="font-bold underline underline-offset-2">
          www.magazineluiza.com.br/formulariocontato
        </a>
      </p>
      <p className="text-xs text-[#FFFFFF]/80 mt-3">
        {"\u00a9 Magazine Luiza \u2013 Todos os direitos reservados"}
      </p>
    </footer>
  )
}
