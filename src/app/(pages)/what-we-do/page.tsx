'use client';

import Link from 'next/link';

export default function WhatWeDoPage() {
  const activities = [
    {
      title: 'Mentorship Program',
      description:
        'Connecting experienced members with newcomers to foster growth and learning in data science.',
      icon: '👩‍💼',
    },
    {
      title: 'Hackathons',
      description:
        'Annual hackathons bringing together students to create innovative data-driven solutions.',
      icon: '💻',
    },
    {
      title: 'Networking and Panel Events',
      description:
        'Organizing networking events and panel discussions to connect students with industry professionals and experts.',
      icon: '🤝',
    },
    {
      title: 'Social Events',
      description:
        'Planning and hosting social events for the club to help members get to know each other.',
      icon: '👥',
    },
    {
      title: 'Sponsorships',
      description:
        'Reaching out to companies to sponsor our events and provide resources for our members.',
      icon: '💰',
    },
    {
      title: 'Website Development',
      description:
        'Developing and maintaining the CDSS website to provide information about the club and its activities.',
      icon: '🌐',
    },
    
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-cdss-blue">What We Do</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At CDSS, we are on different committees that are responsible for different activities.
          </p>
        </section>

        {/* Activities Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-cdss-blue">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cdss-blue/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-cdss-blue">Want to Get Involved?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Join us in our next event or become a member to participate in our
            activities.
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-cdss-blue text-white px-6 py-3 rounded-full font-medium hover:bg-cdss-blue/90 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="https://linktr.ee/cdss.cu"
              className="inline-block bg-white text-cdss-blue px-6 py-3 rounded-full font-medium hover:bg-cdss-blue/10 transition-colors duration-200 border border-cdss-blue"
            >
              Join CDSS
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 