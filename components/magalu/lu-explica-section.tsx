import Image from "next/image"

const articles = [
  {
    image: "/images/article-1.jpg",
    title: "Como escolher o ventilador ideal para sua casa",
    description:
      "Saiba qual modelo de ventilador é o melhor para cada ambiente e necessidade...",
  },
  {
    image: "/images/article-2.jpg",
    title: "Ventilador de mesa: conheça os melhores modelos",
    description:
      "Ventilador de mesa: conheça os melhores modelos para refrescar sua casa...",
  },
  {
    image: "/images/article-3.jpg",
    title: "Dicas para refrescar o ambiente no verão",
    description:
      "O ventilador é sua aliado na sua rotina. Descubra algumas dicas rápidas...",
  },
]

export function LuExplicaSection() {
  return (
    <section className="border-t-8 border-[#F5F5F5]">
      {/* Lu Explica banner image */}
      <div className="relative w-full">
        <Image
          src="/images/gemini-generated-image-5pgr0e5pgr0e5pgr.png"
          alt="Lu Explica - Ventilador de Mesa"
          width={800}
          height={280}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Articles */}
      <div className="bg-[#FFFFFF] px-4 py-4 flex flex-col gap-5">
        {articles.map((article) => (
          <a
            key={article.title}
            href="#"
            className="flex items-start gap-3 group"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-[#0086FF] group-hover:underline leading-snug">
                {article.title}
              </h3>
              <p className="mt-1 text-xs text-[#666666] leading-relaxed line-clamp-3">
                {article.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
