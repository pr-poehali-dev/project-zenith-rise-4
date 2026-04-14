import { useUIStore } from "@/lib/ui-store"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

type AppType = "about" | "resume" | "writings" | "art"

const DOCK_ITEMS: Array<{ id: AppType; label: string; icon: string }> = [
  { id: "about", label: "О ресторане", icon: "Flame" },
  { id: "resume", label: "Бронирование", icon: "CalendarDays" },
  { id: "writings", label: "Отзывы", icon: "Star" },
  { id: "art", label: "Меню", icon: "UtensilsCrossed" },
]

export function Dock() {
  const { openOS } = useUIStore()

  return (
    <div className="flex gap-3 p-4 bg-[#111111] border-[3px] border-[#c9a84c] shadow-[4px_4px_0px_0px_rgba(201,168,76,0.4)]">
      {DOCK_ITEMS.map(({ id, label, icon }) => (
        <Button
          key={id}
          onClick={() => openOS(id)}
          className="w-12 h-12 p-0 bg-[#c9a84c] text-black border-[3px] border-[#8b6914] shadow-[2px_2px_0px_0px_rgba(139,105,20,0.5)] hover:shadow-[1px_1px_0px_0px_rgba(139,105,20,0.5)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
          aria-label={label}
        >
          <Icon name={icon} size={20} />
        </Button>
      ))}
    </div>
  )
}