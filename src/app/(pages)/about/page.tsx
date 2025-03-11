'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-cdss-blue">About CDSS</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              The Columbia Data Science Society (CDSS) is a student-run organization
              dedicated to fostering a vibrant community of data science enthusiasts
              at Columbia University. Our mission is to bridge the gap between
              academic learning and real-world applications in data science.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              We are a community of students who are passionate about data science and
              who are willing to share their knowledge and experience with the community. 
              We are also a community of students who are willing to help each other grow and learn in the field of data science.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Founded by passionate students in 2013, CDSS has grown into a hub for
              innovation, learning, and collaboration in the field of data science.
              CDSS has an elaborate network of alumni and industry professionals
              who are willing to share their knowledge and experience with the community.
              In addition, CDSS hosts a variety of events, including workshops, seminars,
              social events, and even an annual hackathon to help students learn and grow in the field of data science.
            </p>
            
          </div>
        </section>

        {/* Values Section
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-cdss-blue">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative problem-solving and embrace cutting-edge
                technologies in data science.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and knowledge sharing within
                our community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cdss-blue">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from projects to
                events.
              </p>
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        <section className="mb-2">
          <h2 className="text-3xl font-bold mb-8 text-center text-cdss-blue">Our E-Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/hairin.jpg"
                  alt="Hairan Liang"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-cdss-blue">Hairan Liang</h3>
              <p className="text-gray-600">Graduate President</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/tiffany.jpg"
                  alt="Tiffany Leong"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-cdss-blue">Tiffany Leong</h3>
              <p className="text-gray-600">Undergraduate President</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/patrick.jpg"
                  alt="Patrick Shen"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-cdss-blue">Patrick Shen</h3>
              <p className="text-gray-600">Treasurer</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/anurag.jpg"
                  alt="Anurag Jakkula"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-cdss-blue">Anurag Jakkula</h3>
              <p className="text-gray-600">Secretary</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 