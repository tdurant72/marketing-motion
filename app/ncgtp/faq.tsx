'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { WordPullUp } from '@/components/ui/word-up';
interface FAQItemProps {
    question: string;
    answer: string;
    }


const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left cursor-pointer"
      >
        <span className="text-xl font-medium text-neutral-950">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6 " />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-800 text-lg text-balance">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What is the North Carolina Global TransPark (NCGTP)?",
      answer: "The NCGTP is a 2,500-acre multimodal industrial mega-park and aviation complex located in Kinston, North Carolina. Its mission is to create skilled jobs and attract economic investment by leveraging its access to air, rail, and highway transportation."
    },
    {
      question: "What is the main purpose of the NCGTP?",
      answer: "The NCGTP was established to serve as an economic engine for Eastern North Carolina by developing a specialized facility built around a comprehensive multimodal transportation network, primarily targeting the aerospace, logistics, and defense sectors."
    },
    {
      question: "What key industries are located at the NCGTP?",
      answer: "The primary industries include Aerospace & Aviation, Advanced Manufacturing, Logistics & Exporting, Defense & Security, and Emergency Response. The park acts as a growing cluster for these sectors."
    },
    {
      question: "What are the major transportation assets at the NCGTP?",
      answer: "The core asset is the Kinston Regional Jetport (ISO), which features an 11,500-foot by 150-foot runway—the largest civilian runway in the state. It also has access to rail spurs and an expanding road network to major highways."
    },
    {
      question: "Who are some of the major tenants and employers at the TransPark?",
      answer: "Key tenants include Spirit AeroSystems (aerospace manufacturing), Mountain Air Cargo (MAC) (express cargo and fleet maintenance), flyExclusive (charter jet service), and DB Schenker (global logistics)."
    },
    {
      question: "Does the NCGTP have Foreign Trade Zone (FTZ) status?",
      answer: "Yes, the NCGTP is a Magnet Site within Foreign Trade Zone (FTZ) #214. This status allows businesses to import foreign goods into the zone duty-free, helping to reduce costs for exporting and logistics operations."
    },
    {
      question: "Are training and education resources available on-site?",
      answer: "Yes, the site hosts facilities like the Spirit AeroSystems Center of Excellence and works closely with Lenoir Community College to provide targeted education, workforce training, and certification programs for the park's tenants."
    },
    // Executive-focused questions
    {
      question: "What risk mitigation strategies are in place for new tenants?",
      answer: "NCGTP offers a stable regulatory environment, robust infrastructure, and dedicated support teams to help businesses navigate permitting, compliance, and operational risks. Our concierge relocation service ensures a smooth transition with minimal disruption."
    },
    {
      question: "What is the expected ROI for relocating to NCGTP?",
      answer: "Companies relocating to NCGTP benefit from performance-based incentives, the lowest corporate tax rate in the US, and access to a skilled labor force. Many tenants report significant cost savings, improved logistics, and accelerated growth within the first year."
    },
    {
      question: "How does NCGTP support workforce recruitment and retention?",
      answer: "NCGTP partners with local colleges and training centers to provide tailored workforce development programs. Our region boasts a 5.2M skilled labor force, and we assist with recruitment, onboarding, and ongoing training to ensure your talent needs are met."
    },
    {
      question: "What is the regulatory environment like at NCGTP?",
      answer: "North Carolina is consistently ranked as one of the most business-friendly states in the US. NCGTP offers streamlined permitting, proactive government support, and a collaborative approach to regulatory compliance, making it easy for executives to focus on growth."
    }
  ];

  return (
    <div className="bg-slate-50/80 mx-auto 2xl:w-4/5 md:px-16
     px-6 py-16 pb-32 ">
      <WordPullUp words='Frequently Asked Questions' className="text-5xl font-bold mb-12 "/>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;