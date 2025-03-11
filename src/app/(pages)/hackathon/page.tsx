'use client';

import Link from 'next/link';

export default function HackathonPage() {
  const schedule = [
    {
      time: '9:00 AM',
      event: 'Opening Ceremony',
      description: 'Welcome address and keynote speaker',
    },
    {
      time: '10:00 AM',
      event: 'Team Formation',
      description: 'Form teams and brainstorm project ideas',
    },
    {
      time: '11:00 AM',
      event: 'Hacking Begins',
      description: 'Start working on your projects',
    },
    {
      time: '1:00 PM',
      event: 'Lunch Break',
      description: 'Networking lunch provided',
    },
    {
      time: '2:00 PM',
      event: 'Workshop Sessions',
      description: 'Technical workshops and mentorship',
    },
    {
      time: '6:00 PM',
      event: 'Dinner Break',
      description: 'Dinner and refreshments provided',
    },
    {
      time: '9:00 PM',
      event: 'Project Submissions',
      description: 'Submit your projects for judging',
    },
    {
      time: '10:00 PM',
      event: 'Presentations',
      description: 'Present your projects to judges',
    },
    {
      time: '11:00 PM',
      event: 'Awards Ceremony',
      description: 'Winners announced and prizes distributed',
    },
  ];

  const prizes = [
    {
      place: '1st Place',
      prize: '$1,000',
      extras: 'Plus internship opportunities',
    },
    {
      place: '2nd Place',
      prize: '$500',
      extras: 'Plus sponsored software licenses',
    },
    {
      place: '3rd Place',
      prize: '$250',
      extras: 'Plus sponsored merchandise',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-cdss-blue">Columbia Data Science Hackathon</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join us for 24 hours of innovation, collaboration, and data science
            challenges. Build something amazing with fellow data enthusiasts!
          </p>
          {/* <div className="space-x-4">
            <Link
              href="/hackathon/register"
              className="inline-block bg-cdss-blue text-white px-8 py-3 rounded-full font-medium hover:bg-cdss-blue/90 transition-colors duration-200"
            >
              Register Now
            </Link>
            <Link
              href="#schedule"
              className="inline-block bg-white text-cdss-blue px-8 py-3 rounded-full font-medium hover:bg-cdss-blue/10 transition-colors duration-200 border border-cdss-blue"
            >
              View Schedule
            </Link>
          </div> */}
        </section>

        {/* Event Details */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">When & Where</h3>
              <p className="text-gray-600">
                {/* March 15-16, 2024
                <br />
                9:00 AM - 11:00 PM
                <br />
                Columbia University
                <br />
                Mudd Building, Room 633 */}
                TBA
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">Theme</h3>
              <p className="text-gray-600">
                {/* "Data Science for Social Good"
                <br />
                Develop innovative solutions to real-world social challenges using
                data science and machine learning. */}
                TBA
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">Eligibility</h3>
              <p className="text-gray-600">
                Open to all Columbia University students
                <br />
                Teams of 2-4 members
                <br />
                All skill levels welcome
              </p>
            </div>
          </div>
        </section>

        {/* Schedule
        <section id="schedule" className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cdss-blue">Event Schedule</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {schedule.map((item, index) => (
                <div key={index} className="p-6 hover:bg-cdss-blue/5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-24 font-semibold text-cdss-blue">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cdss-blue">{item.event}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Prizes */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cdss-blue">Prizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-cdss-blue">{prize.place}</h3>
                <p className="text-3xl font-bold text-cdss-blue mb-4">
                  TBA
                </p>
                {/* <p className="text-gray-600">{prize.extras}</p> */}
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cdss-blue">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add sponsor logos here */}
            {[1, 2, 3, 4].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-32 h-32 bg-cdss-blue/10 rounded" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-cdss-blue">FAQ</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-cdss-blue">
                What should I bring?
              </h3>
              <p className="text-gray-600">
                Bring your laptop, charger, and student ID. All meals and snacks
                will be provided.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-cdss-blue">
                Do I need a team?
              </h3>
              <p className="text-gray-600">
                You can register as an individual or with a team. We'll help you
                find team members during the team formation session.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-cdss-blue">
                What if I'm new to data science?
              </h3>
              <p className="text-gray-600">
                No worries! We welcome participants of all skill levels. Mentors
                will be available throughout the event to help you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 