import { useState } from "react"

export function MiniAppResume() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [guests, setGuests] = useState("2")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const times = ["12:00", "13:00", "14:00", "15:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl">
      <p className="text-[#c9a84c] tracking-[0.3em] text-xs uppercase mb-2">Всегда рады гостям</p>
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-[#c9a84c] pb-3 text-white" style={{fontFamily: "'Playfair Display', serif"}}>Бронирование стола</h2>

      {submitted ? (
        <div className="bg-[#111111] p-8 border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.3)] text-center">
          <p className="text-5xl mb-4">🕯️</p>
          <h3 className="text-2xl font-black text-white mb-2" style={{fontFamily: "'Playfair Display', serif"}}>Стол забронирован!</h3>
          <p className="text-[#888]">Мы ждём вас, {name}. Подтверждение придёт на ваш номер.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-[#c9a84c] text-black px-6 py-2 border-[2px] border-[#8b6914] font-bold hover:opacity-90 transition-opacity"
          >
            Новое бронирование
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-[#111111] p-6 border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.3)]">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[#c9a84c] text-sm font-bold mb-2 uppercase tracking-wider">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Иван Петров"
                  className="w-full p-3 bg-[#1a1a1a] border-[2px] border-[#333] text-white placeholder:text-[#555] focus:outline-none focus:border-[#c9a84c]"
                />
              </div>
              <div>
                <label className="block text-[#c9a84c] text-sm font-bold mb-2 uppercase tracking-wider">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="+7 999 000 00 00"
                  className="w-full p-3 bg-[#1a1a1a] border-[2px] border-[#333] text-white placeholder:text-[#555] focus:outline-none focus:border-[#c9a84c]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[#c9a84c] text-sm font-bold mb-2 uppercase tracking-wider">Дата</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  className="w-full p-3 bg-[#1a1a1a] border-[2px] border-[#333] text-white focus:outline-none focus:border-[#c9a84c] [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-[#c9a84c] text-sm font-bold mb-2 uppercase tracking-wider">Время</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="w-full p-3 bg-[#1a1a1a] border-[2px] border-[#333] text-white focus:outline-none focus:border-[#c9a84c]"
                >
                  <option value="">—</option>
                  {times.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[#c9a84c] text-sm font-bold mb-2 uppercase tracking-wider">Гостей</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full p-3 bg-[#1a1a1a] border-[2px] border-[#333] text-white focus:outline-none focus:border-[#c9a84c]"
                >
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "гость" : n < 5 ? "гостя" : "гостей"}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c9a84c] text-black py-4 border-[3px] border-[#8b6914] shadow-[4px_4px_0px_0px_rgba(139,105,20,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(139,105,20,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg uppercase tracking-wider"
            >
              Забронировать стол
            </button>
          </div>

          <div className="flex gap-4 text-sm text-[#666]">
            <span>📞 Или по телефону:</span>
            <span className="text-[#c9a84c] font-bold">+7 (495) 123-45-67</span>
          </div>
        </form>
      )}
    </div>
  )
}
