"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Search, MessageCircle, HelpCircle } from "lucide-react";
import Container from "../constants/Container";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 px-6 flex justify-between items-start text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent transition-all group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className={`mt-1 transition-all ${isOpen ? 'text-[#6F36D2]' : 'text-gray-400'}`}>
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-inter text-lg md:text-xl text-gray-900 font-semibold pr-4 flex-1 group-hover:text-[#6F36D2] transition-colors">
            {question}
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-[#6F36D2] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pl-16">
          <div className="text-gray-600 leading-relaxed text-base">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, isActive, onClick, iconUrl, faqCount }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 text-center lg:flex-1 w-full ${
        isActive
          ? "bg-gradient-to-br from-[#6F36D2] to-[#5a2bb0] text-white shadow-lg"
          : "bg-white text-gray-700 hover:shadow-md border border-gray-200 hover:border-[#6F36D2]/30"
      }`}
    >
      <div className="relative z-10">
        {iconUrl ? (
          <img 
            src={iconUrl} 
            alt={category.title}
            className={`w-12 h-12 object-contain mx-auto mb-3 transition-all ${isActive ? '' : 'opacity-70 group-hover:opacity-100'}`}
          />
        ) : category.icon && (
          <span className={`text-4xl mb-3 block transition-transform group-hover:scale-110 ${isActive ? '' : 'opacity-70'}`}>
            {category.icon}
          </span>
        )}
        <h3 className="font-semibold text-base mb-1">{category.title}</h3>
        {/* <p className={`text-xs ${isActive ? 'text-purple-100' : 'text-gray-500'}`}>
          {faqCount} article{faqCount !== 1 ? 's' : ''}
        </p> */}
      </div>
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}
    </button>
  );
};



export const KnowledgeBaseContent = ({ categories = [], faqs = [] }) => {
  // Listen for search events from hero
  useEffect(() => {
    const handleSearch = (e) => {
      setSearchQuery(e.detail);
      setActiveCategory(null);
      setOpenFAQIndex(null);
    };

    window.addEventListener("faqSearch", handleSearch);
    return () => {
      window.removeEventListener("faqSearch", handleSearch);
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState(categories[0]?._id || null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory ? faq.category?._id === activeCategory : true;
    const matchesSearch = searchQuery
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const getCategoryFaqCount = (categoryId) => {
    return faqs.filter(faq => faq.category?._id === categoryId).length;
  };

  const hasNoContent = categories.length === 0 || faqs.length === 0;

  return (
    <Container className="bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto">
        {hasNoContent ? (
          <div className="text-center py-20">
            <div className="mx-auto">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Knowledge Base Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We're currently setting up our FAQ section. Please check back soon or contact our support team for immediate assistance.
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Category Cards Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl shadow-sm border border-gray-200 p-6 md:p-8">
                <div className="flex flex-wrap gap-4">
                  {categories.map((category) => (
                    <CategoryCard
                      key={category._id}
                      category={category}
                      isActive={activeCategory === category._id}
                      onClick={() => {
                        setActiveCategory(category._id);
                        setSearchQuery("");
                        setOpenFAQIndex(null);
                      }}
                      iconUrl={category.iconImage?.asset?.url}
                      faqCount={getCategoryFaqCount(category._id)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Category Header with Search */}
            {activeCategory && !searchQuery && (
              <div className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
                <div className="mx-auto text-center">
                  <div className="text-4xl mb-4">
                    {categories.find((c) => c._id === activeCategory)?.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {categories.find((c) => c._id === activeCategory)?.title}
                  </h2>
                  {categories.find((c) => c._id === activeCategory)?.description && (
                    <p className="text-gray-600 text-lg">
                      {categories.find((c) => c._id === activeCategory)?.description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Search Results Info */}
            {searchQuery && (
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Found <span className="font-semibold text-[#6F36D2]">{filteredFAQs.length}</span> result{filteredFAQs.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>
              </div>
            )}

            {/* FAQ List with Enhanced Design */}
            <div className="mx-auto mb-16">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
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
                  <div className="py-16 px-6 text-center">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      No FAQs found. Try a different search or category.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Contact Support Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#6F36D2] to-[#5a2bb0] rounded-3xl p-8 md:p-16 text-center">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTIgMTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
              <div className="relative z-10">
                <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Still need help?
                </h3>
                <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
                  Can't find what you're looking for? Our support team is here to help you 24/7.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#6F36D2] px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:-translate-y-1 text-lg"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
}