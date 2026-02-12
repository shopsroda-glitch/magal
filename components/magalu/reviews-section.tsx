import { Star, User } from "lucide-react"

const ratingDistribution = [
  { stars: 5, count: 999, label: "+999" },
  { stars: 4, count: 895, label: "895" },
  { stars: 3, count: 126, label: "126" },
  { stars: 2, count: 75, label: "75" },
  { stars: 1, count: 256, label: "256" },
]

const reviews = [
  {
    name: "Henrique",
    rating: 5,
    comment: "Ventilador potente demais! Com esse calor que tava fazendo, foi a melhor compra que fiz.",
    date: "há 1 dia",
  },
  {
    name: "Celso",
    rating: 5,
    comment: "Muito bom, venta bastante e faz pouco barulho. Chegou rápido, parabéns Magalu!",
    date: "há 1 dia",
  },
  {
    name: "Michele",
    rating: 5,
    comment: "Chegou muito rápido, amei! Refresca o quarto inteiro, podem comprar sem medo.",
    date: "há 1 dia",
  },
  {
    name: "Laida",
    rating: 5,
    comment: "Ótima qualidade e venta muito. Tava sofrendo com o calor e agora durmo tranquila.",
    date: "há 1 dia",
  },
  {
    name: "Lediane",
    rating: 5,
    comment: "Maravilhoso! Me salvando muito nesse calor. Silencioso e muito potente, recomendo demais.",
    date: "há 2 dias",
  },
  {
    name: "Maria",
    rating: 4,
    comment: "Amei meu ventilador, chegou bem rápido e bem embalado. Venta bem, perfeito pro verão.",
    date: "há 2 dias",
  },
  {
    name: "Andreza",
    rating: 5,
    comment: "Entrega super rápida, já tenho um deste e é muito bom, então comprei de presente. Salva no calor!",
    date: "há 2 dias",
  },
  {
    name: "Alessandra",
    rating: 5,
    comment: "Perfeito pra esse calor! As 8 pás fazem toda diferença, venta muito mais.",
    date: "há 2 dias",
  },
]

const maxCount = Math.max(...ratingDistribution.map((r) => r.count))

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-[#F5A623] text-[#F5A623]"
              : star <= Math.ceil(rating)
                ? "fill-[#F5A623]/40 text-[#F5A623]/40"
                : "fill-[#E0E0E0] text-[#E0E0E0]"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-5 border-t-8 border-[#F5F5F5]">
      <h2 className="text-lg font-bold text-[#1A1A1A]">
        {"Avaliações dos clientes"}
      </h2>

      {/* Rating summary */}
      <div className="mt-4 flex items-start gap-6">
        {/* Left: big rating number */}
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-0.5">
            <span className="text-[40px] font-extrabold text-[#1A1A1A] leading-none font-display">
              4.8
            </span>
          </div>
          <Star className="mt-1 h-7 w-7 fill-[#F5A623] text-[#F5A623]" />
          <p className="mt-2 text-xs font-bold text-[#333333]">10.855</p>
          <p className="text-xs text-[#666666]">{"avaliações"}</p>
          <p className="text-xs font-bold text-[#333333] mt-0.5">3.274</p>
          <p className="text-xs text-[#666666]">{"comentários"}</p>
        </div>

        {/* Right: rating bars */}
        <div className="flex flex-1 flex-col gap-2 pt-1">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-1.5">
              <span className="w-3 text-xs font-semibold text-[#666666] text-right">
                {item.stars}
              </span>
              <Star className="h-3 w-3 fill-[#F5A623] text-[#F5A623] shrink-0" />
              <div className="flex-1 h-2.5 rounded-full bg-[#EEEEEE] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#0086FF]"
                  style={{
                    width: `${(item.count / maxCount) * 100}%`,
                  }}
                />
              </div>
              <span className="w-8 text-xs text-[#666666] text-right">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual reviews */}
      <div className="mt-6 flex flex-col">
        {reviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className={`py-4 ${index > 0 ? "border-t border-[#EEEEEE]" : ""}`}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#CCCCCC]">
                <User className="h-3.5 w-3.5 text-[#999999]" />
              </div>
              <span className="text-sm font-bold text-[#1A1A1A]">
                {review.name}
              </span>
              <StarRating rating={review.rating} />
            </div>
            <p className="mt-2 text-sm text-[#333333] leading-relaxed">
              {review.comment}
            </p>
            <p className="mt-1 text-xs text-[#999999]">{review.date}</p>
          </div>
        ))}
      </div>

      {/* Ver todas button */}
      <button className="mt-2 flex w-full items-center justify-center rounded-lg border border-[#E0E0E0] py-3.5 text-sm font-bold text-[#0086FF] transition-colors hover:bg-[#F5F5F5]">
        {"Ver todas as avaliações"}
      </button>
    </section>
  )
}
