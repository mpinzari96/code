import { Navigation } from "@/components/navigation"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1a1a1a]">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#1a1a1a]">
              Register for Youth For God
            </h1>
            <p className="text-lg text-[#6B5D4F] text-balance">
              Join us May 22-24, 2026 in Sacramento, CA for an unforgettable experience
            </p>
          </div>

          <div className="bg-[#FDFBF7] border border-[#D4C4B0] rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://subsplash.com/bbc-ca/lb/ev/+pn3qtnr/register"
              title="Youth For God Registration"
              className="w-full h-[1200px] bg-white"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
