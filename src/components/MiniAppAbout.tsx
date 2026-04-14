export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <p className="text-[#c9a84c] tracking-[0.3em] text-xs uppercase mb-2">Наша история</p>
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-[#c9a84c] pb-3 text-white" style={{fontFamily: "'Playfair Display', serif"}}>О ресторане</h2>

      <div className="space-y-6">
        <div className="bg-[#111111] p-6 border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.3)]">
          <h3 className="text-2xl font-black mb-4 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Живой огонь. Настоящий вкус.</h3>
          <p className="text-lg leading-relaxed mb-4 text-[#ccc]">
            La Fornace — это ресторан для тех, кто ценит подлинность. Каждая пицца готовится в дровяной печи при 485°C — так, как это делали сотни лет в Неаполе. Никакой электрики, только живой огонь.
          </p>
          <p className="text-lg leading-relaxed text-[#ccc]">
            Наш шеф-повар Лука Феррари прошёл обучение в легендарной пиццерии Napoli с 30-летней историей. Он принёс сюда не просто рецепты — а культуру настоящей итальянской кухни.
          </p>
        </div>

        <div className="bg-[#111111] p-6 border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.3)]">
          <h3 className="text-2xl font-black mb-4 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Наши принципы</h3>
          <div className="flex flex-wrap gap-2">
            {["Дровяная печь 485°C", "Мука типо 00", "Моцарелла буффало", "Томаты Сан-Марцано", "Импортные специи", "Живое тесто 48ч"].map(
              (item) => (
                <span
                  key={item}
                  className="bg-[#c9a84c] text-black px-3 py-1 border-[2px] border-[#8b6914] font-bold text-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "2019", label: "Год открытия" },
            { num: "48ч", label: "Выдержка теста" },
            { num: "485°C", label: "Температура печи" },
          ].map(({ num, label }) => (
            <div key={label} className="bg-[#111111] p-4 border-[3px] border-[#333] text-center">
              <p className="text-3xl font-black text-[#c9a84c]" style={{fontFamily: "'Playfair Display', serif"}}>{num}</p>
              <p className="text-sm text-[#888] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
