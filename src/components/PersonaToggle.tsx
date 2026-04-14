import { useUIStore } from "@/lib/ui-store"
import { Button } from "@/components/ui/button"

export function PersonaToggle() {
  const { persona, setPersona } = useUIStore()

  return (
    <Button
      onClick={() => setPersona(persona === "assistant" ? "alex" : "assistant")}
      className="bg-[#1a1a1a] text-[#c9a84c] border-[3px] border-[#c9a84c] shadow-[2px_2px_0px_0px_rgba(201,168,76,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(201,168,76,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-bold px-4 py-2 focus:ring-4 focus:ring-[#c9a84c]"
    >
      {persona === "assistant" ? "Консьерж" : "Шеф Лука"}
    </Button>
  )
}