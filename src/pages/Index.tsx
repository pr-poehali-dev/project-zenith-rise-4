import { AnimatedRobot } from "@/components/AnimatedRobot"
import { ChatPanel } from "@/components/ChatPanel"
import { Dock } from "@/components/Dock"
import { OSOverlay } from "@/components/OSOverlay"

export default function HomePage() {
  return (
    <>
      {/* Landing Page - Fixed height, no scroll */}
      <div className="h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Dark grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #c9a84c 1px, transparent 1px),
              linear-gradient(to bottom, #c9a84c 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center flex-1 max-w-lg w-full">
          {/* AI Robot */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <AnimatedRobot />
            <div className="text-center">
              <p className="text-[#c9a84c] font-semibold tracking-[0.3em] text-sm uppercase mb-1">Ресторан итальянской кухни</p>
              <h1 className="text-5xl font-black text-center text-white" style={{fontFamily: "'Playfair Display', serif"}}>La Fornace</h1>
            </div>
          </div>

          {/* Chat Panel */}
          <ChatPanel />
        </div>

        <div className="relative z-10 pb-4">
          <Dock />
        </div>
      </div>

      {/* OS Overlay */}
      <OSOverlay />
    </>
  )
}