import { useEffect } from "react"
import { useUIStore } from "@/lib/ui-store"
import { OrbSlot } from "./OrbSlot"
import { PersonaToggle } from "./PersonaToggle"
import { MiniAppAbout } from "./MiniAppAbout"
import { MiniAppResume } from "./MiniAppResume"
import { MiniAppWritings } from "./MiniAppWritings"
import { MiniAppArt } from "./MiniAppArt"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

type AppType = "about" | "resume" | "writings" | "art"

const APP_COMPONENTS: Record<AppType, React.ComponentType> = {
  about: MiniAppAbout,
  resume: MiniAppResume,
  writings: MiniAppWritings,
  art: MiniAppArt,
}

const APP_ICONS: Record<AppType, string> = {
  about: "Flame",
  resume: "CalendarDays",
  writings: "Star",
  art: "UtensilsCrossed",
}

const APP_LABELS: Record<AppType, string> = {
  about: "О ресторане",
  resume: "Бронирование",
  writings: "Отзывы",
  art: "Меню",
}

export function OSOverlay() {
  const { osOpen, activeApp, closeOS, setActiveApp } = useUIStore()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && osOpen) {
        closeOS()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [osOpen, closeOS])

  if (!osOpen) return null

  const ActiveComponent = activeApp ? APP_COMPONENTS[activeApp as AppType] : null

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b-[3px] border-[#c9a84c] bg-[#111111]">
        <div className="flex items-center gap-4">
          <OrbSlot size="sm" />
          <div>
            <h1 className="text-2xl font-black text-white" style={{fontFamily: "'Playfair Display', serif"}}>La Fornace</h1>
            <p className="text-[#c9a84c] text-xs tracking-widest uppercase">Ресторан итальянской кухни</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <PersonaToggle />
          <Button
            onClick={closeOS}
            className="w-10 h-10 p-0 bg-[#c9a84c] text-black border-[3px] border-[#8b6914] shadow-[2px_2px_0px_0px_rgba(139,105,20,0.5)] hover:shadow-[1px_1px_0px_0px_rgba(139,105,20,0.5)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus:ring-4 focus:ring-[#c9a84c]"
            aria-label="Закрыть"
          >
            <Icon name="X" size={16} />
          </Button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <nav className="w-64 bg-[#111111] border-r-[3px] border-[#c9a84c] p-4">
          <div className="space-y-2">
            {(Object.keys(APP_COMPONENTS) as AppType[]).map((key) => {
              const iconName = APP_ICONS[key]
              const isActive = activeApp === key

              return (
                <Button
                  key={key}
                  onClick={() => setActiveApp(key)}
                  className={`w-full justify-start gap-3 h-12 border-[3px] font-bold text-left transition-all focus:ring-4 focus:ring-[#c9a84c] ${
                    isActive
                      ? "bg-[#c9a84c] text-black border-[#8b6914] shadow-[2px_2px_0px_0px_rgba(139,105,20,0.5)]"
                      : "bg-[#1a1a1a] text-[#f5f0e8] border-[#333] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)] hover:border-[#c9a84c] hover:translate-x-[1px] hover:translate-y-[1px]"
                  }`}
                >
                  <Icon name={iconName} size={20} />
                  {APP_LABELS[key]}
                </Button>
              )
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto bg-[#0d0d0d]">
          {ActiveComponent ? (
            <ActiveComponent />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-[#c9a84c] tracking-[0.3em] text-sm uppercase mb-3">Добро пожаловать</p>
                <h2 className="text-4xl font-black mb-4 text-white" style={{fontFamily: "'Playfair Display', serif"}}>La Fornace</h2>
                <p className="text-lg text-[#888]">Выберите раздел в боковом меню</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}