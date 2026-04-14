export function MiniAppArt() {
  const menuItems = [
    { title: "Margherita Classica", desc: "Томаты Сан-Марцано, моцарелла буффало, базилик", price: "890 ₽", category: "Классика" },
    { title: "Tartufo Nero", desc: "Крем из трюфеля, страчателла, руккола, пармезан 36 мес.", price: "2 100 ₽", category: "Премиум" },
    { title: "Diavola", desc: "Острая салями, моцарелла фиор ди латте, чили, мёд", price: "1 290 ₽", category: "Классика" },
    { title: "Quattro Formaggi", desc: "Горгонзола, рикотта, пармезан, моцарелла, грецкий орех", price: "1 490 ₽", category: "Классика" },
    { title: "Burrata e Prosciutto", desc: "Бурата, прошутто крудо 24 мес., инжир, бальзамик", price: "1 890 ₽", category: "Премиум" },
    { title: "Fungi Porcini", desc: "Белые грибы, трюфельное масло, тимьян, пармезан", price: "1 650 ₽", category: "Премиум" },
  ]

  const categories = ["Все", "Классика", "Премиум"]
  
  return (
    <div className="max-w-4xl">
      <p className="text-[#c9a84c] tracking-[0.3em] text-xs uppercase mb-2">Дровяная печь 485°C</p>
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-[#c9a84c] pb-3 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Меню пиццерии</h2>

      <div className="flex gap-2 mb-6">
        {categories.map(cat => (
          <span key={cat} className="bg-[#1a1a1a] text-[#c9a84c] border-[2px] border-[#c9a84c] px-4 py-1 text-sm font-bold cursor-default">
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="bg-[#111111] border-[3px] border-[#333] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:border-[#c9a84c] hover:shadow-[2px_2px_0px_0px_rgba(201,168,76,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1507] via-[#2a1f0a] to-[#0d0d0d] border-b-[3px] border-[#333] flex items-center justify-center relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/ee62c21d-a42a-4bae-bec7-ec2ac3f0facb/files/b0821a15-2b28-4fe1-b757-7fdbcae83d5b.jpg"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <span className={`absolute top-2 right-2 text-xs font-black px-2 py-0.5 border-[2px] z-10 ${item.category === "Премиум" ? "bg-[#c9a84c] text-black border-[#8b6914]" : "bg-[#222] text-[#888] border-[#444]"}`}>
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1 text-white" style={{fontFamily: "'Playfair Display', serif"}}>{item.title}</h3>
              <p className="text-sm text-[#888] mb-3 leading-relaxed">{item.desc}</p>
              <p className="text-xl font-black text-[#c9a84c]">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#555] text-sm">Все пиццы готовятся на тесте 48-часовой ферментации · Диаметр 32 см</p>
      </div>
    </div>
  )
}