import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const speakers = [
  {
    name: "Pastor Michael Chen",
    title: "Youth Pastor & Author",
    bio: "Michael has been ministering to young people for over 15 years and is the author of 'Faith in Action: A Young Person's Guide to Living Boldly.' He brings energy and practical wisdom to every message.",
    image: "/placeholder-zjdb4.png",
    social: {
      twitter: "@pastormchen",
      instagram: "@michaelchenyouth",
    },
  },
  {
    name: "Sarah Rodriguez",
    title: "Worship Leader & Speaker",
    bio: "Sarah leads worship at Hillside Church and has a heart for helping young people discover their identity in Christ. Her powerful testimony and musical gifts inspire audiences nationwide.",
    image: "/placeholder-w6c3c.png",
    social: {
      twitter: "@sarahworship",
      instagram: "@sarahrodriguezmusic",
    },
  },
  {
    name: "Dr. James Thompson",
    title: "Biblical Scholar & Teacher",
    bio: "Dr. Thompson holds a PhD in Biblical Studies and has a gift for making complex theological concepts accessible to young minds. He's passionate about equipping the next generation of leaders.",
    image: "/placeholder-sjxnh.png",
    social: {
      twitter: "@drjthompson",
      instagram: "@jamesthompsonteaching",
    },
  },
  {
    name: "Emma Williams",
    title: "Missionary & Evangelist",
    bio: "Emma has served in missions across three continents and brings stories of God's faithfulness from around the world. Her passion for evangelism is contagious and inspiring.",
    image: "/professional-headshot-of-young-white-female-missio.jpg",
    social: {
      twitter: "@emmamissions",
      instagram: "@emmawilliamsglobal",
    },
  },
  {
    name: "Pastor David Kim",
    title: "Church Planter & Mentor",
    bio: "David has planted three churches and mentored dozens of young leaders. He specializes in helping young people discover their calling and step into leadership roles.",
    image: "/professional-headshot-of-young-korean-male-pastor-.jpg",
    social: {
      twitter: "@pastordkim",
      instagram: "@davidkimleadership",
    },
  },
  {
    name: "Rachel Martinez",
    title: "Youth Counselor & Speaker",
    bio: "Rachel is a licensed counselor who works specifically with teenagers and young adults. She brings both professional expertise and personal warmth to discussions about mental health and faith.",
    image: "/professional-headshot-of-young-hispanic-female-cou.jpg",
    social: {
      twitter: "@rachelmcounsels",
      instagram: "@rachelmartinezcounseling",
    },
  },
]

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1a1a1a]">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#1a1a1a]">Meet Our Speakers</h1>
            <p className="text-lg text-[#6B5D4F] max-w-2xl mx-auto text-balance">
              Learn from passionate leaders who are dedicated to empowering young people in their faith journey and
              personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card
                key={index}
                className="bg-[#FDFBF7] border-[#D4C4B0] overflow-hidden hover:bg-[#E8DED0] transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{speaker.name}</h3>
                  <p className="text-[#8B7355] font-medium mb-3">{speaker.title}</p>
                  <p className="text-[#6B5D4F] text-sm leading-relaxed mb-4">{speaker.bio}</p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#D4C4B0] text-[#6B5D4F] hover:bg-[#E8DED0] hover:text-[#1a1a1a] bg-transparent"
                      asChild
                    >
                      <a
                        href={`https://twitter.com/${speaker.social.twitter.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#D4C4B0] text-[#6B5D4F] hover:bg-[#E8DED0] hover:text-[#1a1a1a] bg-transparent"
                      asChild
                    >
                      <a
                        href={`https://instagram.com/${speaker.social.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Instagram
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#E8DED0] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#8B7355]">Ready to Learn?</h2>
            <p className="text-[#1a1a1a] mb-6 max-w-2xl mx-auto">
              Don't miss the opportunity to learn from these incredible speakers. Register now to secure your spot at
              Youth For God.
            </p>
            <Button size="lg" className="bg-[#8B7355] hover:bg-[#A68968] text-white font-semibold" asChild>
              <a href="/register">Register Now</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
