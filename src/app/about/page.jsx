import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "About Burhani Technologies | Software Development Experts Chennai",
  description:
    "Learn about Burhani Technologies - Chennai's trusted partner for custom software development, ERP implementation, and business automation. Serving Healthcare, Finance, Manufacturing & Construction industries.",
  keywords: [
    "software development company Chennai",
    "IT services Chennai",
    "custom software solutions",
    "ERP consultants",
    "business automation experts",
  ],
  openGraph: {
    title: "About Burhani Technologies | Software Development Experts",
    description:
      "Learn about Burhani Technologies - Chennai's trusted partner for custom software development, ERP implementation, and business automation.",
    url: "https://burhanitechnologies.com/about",
  },
  alternates: {
    canonical: "https://burhanitechnologies.com/about",
  },
};

export default function About() {
  return (
    <div className="w-full bg-white text-foreground">
      {/* Hero Section - Mission & Vision */}
      <section className="relative w-full py-16 md:pt-24 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/about-banner.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gradient-to-b from-gray-900/50 to-black/60 absolute inset-0 w-full h-full" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center pt-20">
          <p className="text-sm md:text-base font-semibold text-white mb-4 uppercase tracking-wide">
            The Mission & Vision
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            Get 3X Growth and Success with Cutting-Edge Technology Expertise
          </h1>
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            Burhani Technologies is an innovation-driven technology partner,
            empowering businesses with smart, customized solutions. We combine
            advanced expertise with a commitment to client success to deliver
            exceptional results and create new opportunities for efficiency and
            growth.
          </p>
          <Button className="bg-[#6f36d2] hover:bg-[#5a2ba8] text-white font-bold px-8 py-3 rounded-lg">
            Talk to Us
          </Button>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-gray-600 mb-4 uppercase tracking-wide">
              The Mission & Vision
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Principles That Drive Us
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our work is governed by a focus on quality, forward-thinking
              creativity, and genuine partnership. Here is what truly sets us
              apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Excellence Card */}
            <Card className="p-6 md:p-8 bg-white border-2 border-[#b79be8] rounded-lg hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 w-12 h-12 bg-[#b79be8]/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/excellence.svg"
                  alt="Excellence"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We are committed to delivering the highest quality solutions
                that exceed expectations.
              </p>
            </Card>

            {/* Innovation Card */}
            <Card className="p-6 md:p-8 bg-white border-2 border-[#b79be8] rounded-lg hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 w-12 h-12 bg-[#b79be8]/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/innovation.svg"
                  alt="Innovation"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We embrace new ideas and cutting-edge technologies to drive
                progress.
              </p>
            </Card>

            {/* Collaboration Card */}
            <Card className="p-6 md:p-8 bg-white border-2 border-[#b79be8] rounded-lg hover:shadow-lg transition-shadow flex flex-col">
              <div className="mb-4 w-12 h-12 bg-[#b79be8]/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/collaboration.svg"
                  alt="Collaboration"
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Collaboration
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We work together with our clients as true partners in success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-gray-600 mb-4 uppercase tracking-wide">
              Why Partner With Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Burhani Technologies?
              <br />
              Your Dedicated Partner
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              We put our clients first, combining decades of experience with a
              customized approach to guarantee your success.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <Card className="p-8 bg-white border-4 border-[#b79be8] rounded-lg text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#6f36d2] mb-4">
                14+
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Years of Industry Experience
              </p>
            </Card>
            <Card className="p-8 bg-white border-4 border-[#b79be8] rounded-lg text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#6f36d2] mb-4">
                300+
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                Successful Projects Delivered
              </p>
            </Card>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Experience Expert Team */}
            <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Experience
                    <br />
                    Expert Team
                  </h3>
                </div>
                <img
                  src="/assets/191-156.svg"
                  alt="Expert Team Icon"
                  className="w-20 h-20 flex-shrink-0"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Our skilled team is dedicated to understanding your needs. With
                over 14 years of proven experience, we tackle complex challenges
                and deliver effective, high-quality solutions.
              </p>
            </Card>

            {/* Customized Solutions */}
            <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Customized
                    <br />
                    Solutions
                  </h3>
                </div>
                <img
                  src="/assets/191-163.svg"
                  alt="Customized Solutions Icon"
                  className="w-20 h-20 flex-shrink-0"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                We believe every business is unique. We offer tailored
                solutions—from application development to cloud services—to
                create the perfect strategic fit that drives your growth.
              </p>
            </Card>

            {/* Transparent Communication */}
            <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Transparent
                    <br />
                    Communication
                  </h3>
                </div>
                <img
                  src="/assets/191-171.svg"
                  alt="Communication Icon"
                  className="w-20 h-20 flex-shrink-0"
                />
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                We value clear communication and teamwork. Our open approach
                ensures your ideas are heard, and you are fully informed at
                every step of the development process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-gray-600 mb-4 uppercase tracking-wide">
              Our Culture
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Agile & Adaptable Culture: The Way We Work
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Success in the digital age requires a dynamic mindset. Our
              workplace culture is the engine that drives our creativity and
              ensures we meet your needs effectively.
            </p>
          </div>

          {/* Culture Background Image */}
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="/assets/about-middle.jpg"
              alt="Culture background"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Culture Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Agile & Adaptable */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-[#b79be8] to-[#9b7dd4] rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Agile & Adaptable
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We are dynamic & adaptable, understanding that change is
                inevitable. We provide flexible solutions tailored to your
                business landscape.
              </p>
            </Card>

            {/* Innovative & Creative */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-[#5b9bd5] to-[#4a7fb8] rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Innovative & Creative
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We welcome fresh ideas and creativity. Our environment
                encourages bold innovation, helping us design and create unique
                solutions that continually evolve with our clients' changing
                needs.
              </p>
            </Card>

            {/* Committed & Passionate */}
            <Card className="p-6 md:p-8 bg-gradient-to-br from-[#d98880] to-[#c76b6b] rounded-2xl text-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Committed & Passionate
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We are deeply dedicated to our work and passionate about seeing
                our clients succeed. This commitment drives us to consistently
                go above and beyond in everything we deliver.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base font-semibold text-gray-600 mb-4 uppercase tracking-wide">
              Meet Our Leadership
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Driven by Passion, United as One
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our success is steered by a team of visionary leaders who blend
              technical expertise with creative flair. Get to know the
              professionals behind our comprehensive solutions.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-t-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src="/assets/191-189.webp"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-white rounded-b-lg p-4 text-center border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">YUSUF SHABBIR</h3>
                <p className="text-sm text-gray-600">CEO & Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-t-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src="/assets/191-199.webp"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-white rounded-b-lg p-4 text-center border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">
                  ALIASGAR GHADYALI
                </h3>
                <p className="text-sm text-gray-600">CTO</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-t-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src="/assets/191-209.webp"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-white rounded-b-lg p-4 text-center border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">SURESH BABU</h3>
                <p className="text-sm text-gray-600">Lead Designer</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-t-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src="/assets/191-219.webp"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-white rounded-b-lg p-4 text-center border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">SHIVANN KANNAN</h3>
                <p className="text-sm text-gray-600">UX Director</p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-t-3xl overflow-hidden bg-gray-200 mb-4">
                <img
                  src="/assets/191-229.webp"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full bg-white rounded-b-lg p-4 text-center border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">SADIQ ALI</h3>
                <p className="text-sm text-gray-600">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Expertise Section */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/about-footer.jpg"
            alt="Journey background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gradient-to-b from-gray-800/50 to-black/60 absolute inset-0 w-full h-full" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm md:text-base font-semibold text-white mb-4 uppercase tracking-wide">
            Our Expertise & Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
            Our Journey: Building a Foundation of Expertise
          </h2>
          <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            In our early years, we built a strong foundation of expertise,
            staying ahead of emerging technologies and mastering IT strategy,
            software development, and infrastructure optimization—laying the
            groundwork for the exceptional solutions we deliver today.
          </p>
          <Button className="bg-[#6f36d2] hover:bg-[#5a2ba8] text-white font-bold px-8 py-3 rounded-lg">
            Explore our services →
          </Button>
        </div>
      </section>
    </div>
  );
}
