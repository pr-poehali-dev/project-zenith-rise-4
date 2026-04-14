export function MiniAppWritings() {
  const reviews = [
    {
      author: "Александра М.",
      date: "Март 2026",
      rating: 5,
      text: "Лучшая пицца, которую я пробовала в Москве. Тесто невесомое, аромат дровяной печи просто сводит с ума. Маргарита здесь — это отдельное произведение искусства.",
    },
    {
      author: "Дмитрий К.",
      date: "Февраль 2026",
      rating: 5,
      text: "Были на романтический ужин — атмосфера идеальная. Тихо, темно, уютно. Tartufo с трюфелем произвела неизгладимое впечатление. Обязательно вернёмся.",
    },
    {
      author: "Елена Р.",
      date: "Январь 2026",
      rating: 5,
      text: "Наконец-то нашла место, где понимают, что такое настоящая неаполитанская пицца. Сервис на высшем уровне, официанты знают меню наизусть и дают отличные рекомендации.",
    },
    {
      author: "Михаил С.",
      date: "Декабрь 2025",
      rating: 5,
      text: "Регулярно приходим с коллегами на бизнес-ланч. Быстро, вкусно, атмосферно. La Fornace стала нашим любимым рестораном для деловых встреч.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <p className="text-[#c9a84c] tracking-[0.3em] text-xs uppercase mb-2">Голос наших гостей</p>
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-[#c9a84c] pb-3 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Отзывы</h2>

      <div className="space-y-4">
        {reviews.map((review, i) => (
          <article
            key={i}
            className="bg-[#111111] p-6 border-[3px] border-[#333] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:border-[#c9a84c] hover:shadow-[2px_2px_0px_0px_rgba(201,168,76,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-black text-white">{review.author}</h3>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-[#c9a84c] text-sm">★</span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-bold bg-[#1a1a1a] text-[#c9a84c] px-3 py-1 border-[2px] border-[#333]">
                {review.date}
              </span>
            </div>
            <p className="text-[#aaa] leading-relaxed italic">"{review.text}"</p>
          </article>
        ))}
      </div>

      <div className="mt-8 bg-[#111111] p-6 border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.3)] text-center">
        <p className="text-[#c9a84c] text-4xl font-black mb-1" style={{fontFamily: "'Playfair Display', serif"}}>4.9 / 5</p>
        <p className="text-[#888] text-sm">на основе 847 отзывов</p>
      </div>
    </div>
  )
}
