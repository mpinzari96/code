import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const schedule = [
  {
    date: "Thursday, May 22, 2026",
    events: [
      {
        time: "4:00 PM - 6:00 PM",
        title: "Registration & Check-in",
        description:
          "Welcome reception with light refreshments. Pick up your conference materials and connect with fellow attendees.",
        speaker: "Conference Team",
      },
      {
        time: "6:00 PM - 7:00 PM",
        title: "Opening Dinner",
        description: "Enjoy a delicious meal and get to know other conference participants in a relaxed setting.",
        speaker: "All Attendees",
      },
      {
        time: "7:30 PM - 9:00 PM",
        title: "Opening Worship & Keynote",
        description:
          "Kick off the conference with powerful worship and an inspiring message about stepping into your calling.",
        speaker: "Sarah Rodriguez & Pastor Michael Chen",
      },
      {
        time: "9:00 PM - 10:30 PM",
        title: "Welcome Mixer",
        description: "Games, music, and fellowship to break the ice and start building connections.",
        speaker: "Youth Leaders",
      },
    ],
  },
  {
    date: "Friday, May 23, 2026",
    events: [
      {
        time: "7:00 AM - 8:30 AM",
        title: "Morning Devotions & Breakfast",
        description: "Start your day with quiet reflection, prayer, and a hearty breakfast.",
        speaker: "Small Group Leaders",
      },
      {
        time: "9:00 AM - 10:15 AM",
        title: "Keynote: 'Identity in Christ'",
        description: "Discover who you are in God's eyes and how that transforms everything about how you live.",
        speaker: "Dr. James Thompson",
      },
      {
        time: "10:30 AM - 11:45 AM",
        title: "Workshop Session A",
        description:
          "Choose from: Leadership Skills, Evangelism Training, Creative Arts Ministry, or Biblical Study Methods.",
        speaker: "Various Speakers",
      },
      {
        time: "12:00 PM - 1:30 PM",
        title: "Lunch & Networking",
        description: "Enjoy lunch while connecting with speakers and other attendees in small group settings.",
        speaker: "All Attendees",
      },
      {
        time: "2:00 PM - 3:15 PM",
        title: "Panel: 'Faith in the Real World'",
        description: "Young professionals share how they live out their faith in school, work, and relationships.",
        speaker: "Young Professional Panel",
      },
      {
        time: "3:30 PM - 4:45 PM",
        title: "Workshop Session B",
        description:
          "Choose from: Mental Health & Faith, Missions & Service, Technology & Ministry, or Financial Stewardship.",
        speaker: "Various Speakers",
      },
      {
        time: "6:00 PM - 7:30 PM",
        title: "Dinner & Entertainment",
        description: "Delicious dinner followed by a talent show featuring conference attendees.",
        speaker: "Conference Attendees",
      },
      {
        time: "8:00 PM - 9:30 PM",
        title: "Evening Worship & Message",
        description: "Powerful worship and a challenging message about living boldly for Christ.",
        speaker: "Emma Williams",
      },
    ],
  },
  {
    date: "Saturday, May 24, 2026",
    events: [
      {
        time: "7:00 AM - 8:30 AM",
        title: "Morning Prayer & Breakfast",
        description: "Begin with corporate prayer and enjoy breakfast with your small group.",
        speaker: "Small Group Leaders",
      },
      {
        time: "9:00 AM - 10:15 AM",
        title: "Keynote: 'Your Next Steps'",
        description: "Practical guidance for taking what you've learned and applying it in your daily life.",
        speaker: "Pastor David Kim",
      },
      {
        time: "10:30 AM - 11:45 AM",
        title: "Workshop Session C",
        description:
          "Choose from: Discipleship & Mentoring, Social Justice & Faith, Family & Relationships, or Career & Calling.",
        speaker: "Various Speakers",
      },
      {
        time: "12:00 PM - 1:30 PM",
        title: "Farewell Lunch",
        description: "Final meal together with time for exchanging contact information and making future plans.",
        speaker: "All Attendees",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Closing Worship & Commissioning",
        description: "Celebrate what God has done and receive a blessing as you return to your communities.",
        speaker: "Rachel Martinez & All Speakers",
      },
      {
        time: "3:30 PM - 4:00 PM",
        title: "Final Goodbyes & Departure",
        description: "Exchange final hugs, take photos, and begin your journey home with renewed purpose.",
        speaker: "Conference Team",
      },
    ],
  },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#1a1a1a]">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#1a1a1a]">Conference Schedule</h1>
            <p className="text-lg text-[#6B5D4F] max-w-2xl mx-auto text-balance">
              Three days packed with inspiring speakers, practical workshops, and meaningful fellowship opportunities.
            </p>
          </div>

          <div className="space-y-12">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B7355] mb-6 text-center">{day.date}</h2>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <Card
                      key={eventIndex}
                      className="bg-[#FDFBF7] border-[#D4C4B0] hover:bg-[#E8DED0] transition-colors"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <CardTitle className="text-[#1a1a1a] text-lg">{event.title}</CardTitle>
                          <span className="text-[#8B7355] font-medium text-sm">{event.time}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-[#6B5D4F] mb-2 leading-relaxed">{event.description}</p>
                        <p className="text-sm text-[#8B7355]">
                          <span className="font-medium">Led by:</span> {event.speaker}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#E8DED0] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#8B7355]">Don't Miss Out!</h2>
            <p className="text-[#1a1a1a] mb-6 max-w-2xl mx-auto">
              This packed schedule is designed to maximize your growth and connections. Register today to be part of
              this transformative experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="bg-[#8B7355] hover:bg-[#A68968] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Register Now
              </a>
              <a
                href="/speakers"
                className="border border-[#D4C4B0] text-[#6B5D4F] hover:bg-[#E8DED0] hover:text-[#1a1a1a] px-8 py-3 rounded-lg transition-colors"
              >
                Meet the Speakers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
