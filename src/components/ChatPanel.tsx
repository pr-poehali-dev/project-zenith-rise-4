import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useUIStore } from "@/lib/ui-store"
import { Button } from "@/components/ui/button"

const QUICK_CHIPS = ["Наше меню", "Забронировать стол", "О ресторане"]

const RESPONSES: Record<string, string> = {
  "Наше меню": "В La Fornace — авторские пиццы на тонком тесте, приготовленные в дровяной печи при 485°C. Каждый рецепт создан нашим шеф-поваром из Неаполя.",
  "Забронировать стол": "С удовольствием! Откройте раздел «Бронирование» и выберите удобное время. Принимаем гостей ежедневно с 12:00 до 23:00.",
  "О ресторане": "La Fornace — ресторан премиальной итальянской кухни. Наша философия: только живой огонь, только свежие продукты, только настоящий вкус Италии.",
}

const ACTION_RESPONSES: Record<string, { response: string; action: string }> = {
  "открой меню": { response: "Открываю меню!", action: "art" },
  "покажи меню": { response: "Вот наше меню!", action: "art" },
  "наше меню": { response: "Открываю меню!", action: "art" },
  "открой историю": { response: "Открываю историю ресторана!", action: "about" },
  "о ресторане": { response: "Рассказываю о La Fornace!", action: "about" },
  "открой бронирование": { response: "Открываю форму бронирования!", action: "resume" },
  "забронировать стол": { response: "Открываю форму бронирования!", action: "resume" },
  "открой отзывы": { response: "Открываю отзывы гостей!", action: "writings" },
  "покажи отзывы": { response: "Вот что говорят наши гости!", action: "writings" },
}

type AppType = "about" | "resume" | "writings" | "art"

export function ChatPanel() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([])
  const [inputValue, setInputValue] = useState("")
  const { openOS } = useUIStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleChipClick = (chip: string) => {
    const response = RESPONSES[chip] || "Интересный вопрос! Дай подумать..."
    setMessages((prev) => [...prev, { text: chip, isUser: true }, { text: response, isUser: false }])
  }

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue("")

    // Check if it's an action command
    const lowerMessage = userMessage.toLowerCase()
    const actionMatch = Object.keys(ACTION_RESPONSES).find((key) => lowerMessage.includes(key))

    if (actionMatch) {
      const { response, action } = ACTION_RESPONSES[actionMatch]
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: response, isUser: false }])

      setTimeout(() => {
        openOS(action as AppType)
      }, 1000)
    } else {
      // Default response for non-action messages
      const defaultResponse =
        "Добро пожаловать в La Fornace! Напишите «наше меню», «о ресторане» или «забронировать стол» — я помогу."
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }, { text: defaultResponse, isUser: false }])
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 space-y-3 h-32 overflow-y-auto scroll-smooth">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 border-[3px] border-[#c9a84c] shadow-[2px_2px_0px_0px_rgba(201,168,76,0.5)] ${
                msg.isUser ? "bg-[#c9a84c] text-black" : "bg-[#1a1a1a] text-[#f5f0e8]"
              }`}
            >
              <p className="text-sm font-medium leading-tight">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleInputSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Напиши сообщение или команду..."
            className="flex-1 p-3 border-[3px] border-[#c9a84c] shadow-[2px_2px_0px_0px_rgba(201,168,76,0.3)] bg-[#1a1a1a] text-[#f5f0e8] font-medium text-sm focus:outline-none focus:shadow-[1px_1px_0px_0px_rgba(201,168,76,0.3)] focus:translate-x-[1px] focus:translate-y-[1px] transition-all placeholder:text-[#666]"
          />
          <Button
            type="submit"
            className="bg-[#c9a84c] text-black border-[3px] border-[#8b6914] shadow-[2px_2px_0px_0px_rgba(139,105,20,0.5)] hover:shadow-[1px_1px_0px_0px_rgba(139,105,20,0.5)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold px-4"
          >
            Отправить
          </Button>
        </div>
      </form>

      {/* Quick Action Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {QUICK_CHIPS.map((chip) => (
          <Button
            key={chip}
            onClick={() => handleChipClick(chip)}
            className="bg-[#1a1a1a] text-[#c9a84c] border-[3px] border-[#c9a84c] shadow-[2px_2px_0px_0px_rgba(201,168,76,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(201,168,76,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold text-xs px-3 py-2 h-auto"
          >
            {chip}
          </Button>
        ))}
      </div>
    </div>
  )
}