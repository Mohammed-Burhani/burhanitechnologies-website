"use client";
import React, { useState } from "react";
import { Add, Minus } from "iconsax-react";

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? (
          <Minus size={24} className="text-gray-600" />
        ) : (
          <Add size={24} className="text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};