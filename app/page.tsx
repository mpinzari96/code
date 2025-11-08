import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1a1a1a]">
      <Navigation />

      {/* Hero Banner Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/hero-banner.png)" }}>
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-lg text-balance">SOLUS CHRISTUS</h1>*/}
          <Link href="/register">
            <Button
              size="lg"
              className="bg-white hover:bg-[#F5EFE6] text-[#1a1a1a] font-bold px-12 py-6 text-xl shadow-xl"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#8B7355]">Our Mission</h2>
          <p className="text-lg text-[#1a1a1a] leading-relaxed text-balance">
          God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.
          </p>
        </div>
      </section>

      {/* Video Promo Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#8B7355]">Conference Preview</h2>
          <div className="aspect-video bg-[#E8DED0] rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Youth For God Conference Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#D4C4B0]">Contact</h3>
              <p className="text-[#A68968]">Email: info@youthforgod.com</p>
              <p className="text-[#A68968]">Phone: (916) 555-0123</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#D4C4B0]">Location</h3>
              <p className="text-[#A68968]">Sacramento Convention Center</p>
              <p className="text-[#A68968]">1400 J Street, Sacramento, CA 95814</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#D4C4B0]">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-[#A68968] hover:text-[#D4C4B0]">
                  Facebook
                </a>
                <a href="#" className="text-[#A68968] hover:text-[#D4C4B0]">
                  Instagram
                </a>
                <a href="#" className="text-[#A68968] hover:text-[#D4C4B0]">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#6B5D4F] mt-8 pt-8 text-center text-[#A68968]">
            <p>&copy; 2026 Youth For God. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
