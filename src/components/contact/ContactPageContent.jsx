"use client";
import ContactForm from "@/components/form/ContactForm";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { ContactBanner } from "./ContactBanner";

export default function ContactPageContent() {
  return (
    <div>
      {/* Banner Section */}
      <ContactBanner />
      
      {/* Main Content */}
      <div className="bg-white pb-16">
        <Container>
          <div className="mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#6F36D2]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6F36D2] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#6F36D2]/25">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Address</h3>
                <Body className="text-gray-600 leading-relaxed">
                  1st Floor, Vanguard House, #48, Moore St, Parry's Corner, George Town, Chennai, Tamil Nadu 600001
                </Body>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#6F36D2]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6F36D2] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#6F36D2]/25">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Email</h3>
                <Body className="text-gray-600">
                  <a href="mailto:info@burhanitechnologies.com" className="hover:text-[#6F36D2] transition-colors">
                    info@burhanitechnologies.com
                  </a>
                </Body>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#6F36D2]/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6F36D2] to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#6F36D2]/25">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Hours</h3>
                <Body className="text-gray-600 leading-relaxed">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 9:00 AM - 1:00 PM
                </Body>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#6F36D2] to-purple-600 bg-clip-text text-transparent">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}