"use client";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import { useState } from "react";
import { Search, HelpCircle, BookOpen, Sparkles } from "lucide-react";

export const KnowledgeBaseHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search triggered with query:", searchQuery);
    
    if (!searchQuery.trim()) {
      console.log("Empty search query, returning");
      return;
    }
    
    // Dispatch custom event with search query first
    console.log("Dispatching faqSearch event");
    window.dispatchEvent(
      new CustomEvent("faqSearch", { detail: searchQuery })
    );
    
    // Then scroll to FAQ section after a small delay
    setTimeout(() => {
      const faqSection = document.getElementById("faq-content");
      console.log("FAQ section element:", faqSection);
      if (faqSection) {
        console.log("Scrolling to FAQ section");
        faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <Container className="relative bg-gradient-to-br from-[#0a0014] via-[#1a0a2e] to-[#0a0014] overflow-hidden !pb-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] blur-[150px] rounded-full bg-[#6F36D2]/20 -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] blur-[150px] rounded-full bg-[#6622DC]/15 -bottom-32 -right-32 animate-pulse delay-1000" />
        <div className="absolute w-[400px] h-[400px] blur-[120px] rounded-full bg-purple-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <HelpCircle className="absolute top-20 left-[10%] w-8 h-8 text-purple-400/20 animate-float" />
        <BookOpen className="absolute top-40 right-[15%] w-10 h-10 text-purple-300/20 animate-float-delayed" />
        <Sparkles className="absolute bottom-32 left-[20%] w-6 h-6 text-purple-500/20 animate-float" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto text-center">
          <div data-aos="fade-down">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F36D2]/10 border border-[#6F36D2]/20 mb-8">
              <Sparkles className="w-4 h-4 text-[#6F36D2]" />
              <span className="text-sm font-semibold text-purple-300">
                Knowledge Base
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              How can we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F36D2] to-[#a855f7]">
                help you?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions and learn how to get the most
              out of our services
            </p>
          </div>

          <form
            onSubmit={handleSearch}
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6F36D2] to-[#a855f7] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                  className="w-full pl-16 pr-32 py-6 bg-transparent text-white placeholder:text-gray-400 text-lg outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-3 px-6 py-3 bg-[#6F36D2] hover:bg-[#5a2bb0] text-white rounded-lg font-semibold transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </Container>
  );
};
