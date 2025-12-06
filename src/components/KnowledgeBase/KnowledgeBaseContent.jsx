"use client";
import Container from "@/components/constants/Container";
import { Body } from "@/components/textComponents/Body";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-5 px-6 flex justify-between items-start text-left hover:bg-gray-50 transition-colors group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-inter text-base md:text-lg text-gray-900 font-semibold pr-4 flex-1">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#6F36D2] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <Body className="text-gray-600 leading-relaxed">{answer}</Body>
        </div>
      )}
    </div>
  );
};

const CategoryTab = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${
        isActive
          ? "bg-[#6F36D2] text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
      }`}
    >
      {category.icon && <span className="text-lg">{category.icon}</span>}
      <span>{category.title}</span>
    </button>
  );
};

export const KnowledgeBaseContent = ({ categories, faqs }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?._id || null
  );
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Listen for search events from hero
  useEffect(() => {
    const handleSearch = (e) => {
      console.log("FAQ Search event received:", e.detail);
      setSearchQuery(e.detail);
      setActiveCategory(null); // Show all when searching
      setOpenFAQIndex(null); // Close any open FAQ
    };

    console.log("Setting up faqSearch event listener");
    window.addEventListener("faqSearch", handleSearch);
    return () => {
      console.log("Cleaning up faqSearch event listener");
      window.removeEventListener("faqSearch", handleSearch);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Filter FAQs based on active category and search query
  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory
      ? faq.category?._id === activeCategory
      : true;
    const matchesSearch = searchQuery
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Check if there's no content
  const hasNoContent = categories.length === 0 || faqs.length === 0;

  return (
    <div id="faq-content" className="bg-white py-16 md:py-24">
      <Container>
        {/* Show empty state if no content */}
        {hasNoContent ? (
          <div className="text-center py-20" data-aos="fade-up">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Knowledge Base Coming Soon
              </h2>
              <Body className="text-gray-600 mb-8">
                We're currently setting up our FAQ section. Please check back soon or contact our support team for immediate assistance.
              </Body>
              <a
                href="/contact"
                className="inline-block bg-[#6F36D2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a2bb0] transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
              
              {/* Instructions for admin */}
              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg text-left">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  👨‍💼 For Administrators:
                </h3>
                <Body className="text-blue-800 mb-3">
                  To add content to this page:
                </Body>
                <ol className="text-sm text-blue-800 space-y-2 ml-4">
                  <li>1. Start Sanity Studio: <code className="bg-blue-100 px-2 py-1 rounded">cd sanity-backend && npm run dev</code></li>
                  <li>2. Create FAQ Categories (e.g., Getting Started, Services, Billing)</li>
                  <li>3. Add FAQs and assign them to categories</li>
                  <li>4. Publish your content</li>
                  <li>5. Refresh this page to see your FAQs</li>
                </ol>
                <Body className="text-blue-800 mt-3">
                  📖 See <code className="bg-blue-100 px-2 py-1 rounded">QUICK_START_FAQ.md</code> for detailed instructions with sample content.
                </Body>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Category Tabs */}
            <div
              className="mb-12 overflow-x-auto scrollbar-hide"
              data-aos="fade-up"
            >
              <div className="flex gap-3 pb-4 min-w-max">
                {categories.map((category) => (
                  <CategoryTab
                    key={category._id}
                    category={category}
                    isActive={activeCategory === category._id}
                    onClick={() => {
                      setActiveCategory(category._id);
                      setSearchQuery("");
                      setOpenFAQIndex(null);
                    }}
                  />
                ))}
              </div>
            </div>

        {/* Active Category Info */}
        {activeCategory && !searchQuery && (
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {categories.find((c) => c._id === activeCategory)?.title}
            </h2>
            {categories.find((c) => c._id === activeCategory)?.description && (
              <Body className="text-gray-600 max-w-2xl mx-auto">
                {categories.find((c) => c._id === activeCategory)?.description}
              </Body>
            )}
          </div>
        )}

        {/* Search Results Info */}
        {searchQuery && (
          <div className="text-center mb-8" data-aos="fade-down">
            <Body className="text-gray-600">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} for "{searchQuery}"
            </Body>
          </div>
        )}

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={faq._id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))
            ) : (
              <div className="py-12 px-6 text-center">
                <Body className="text-gray-500">
                  No FAQs found. Try a different search or category.
                </Body>
              </div>
            )}
          </div>
        </div>

            {/* Contact Support Section */}
            <div
              className="mt-16 bg-gradient-to-br from-[#6F36D2]/10 to-[#6622DC]/5 rounded-2xl p-8 md:p-12 text-center"
              data-aos="fade-up"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Still need help?
              </h3>
              <Body className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to
                help.
              </Body>
              <a
                href="/contact"
                className="inline-block bg-[#6F36D2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a2bb0] transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};
