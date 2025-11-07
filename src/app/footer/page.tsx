"use client";
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqData = [
    {
      question: "Why were the SDGs created?",
      answer: "The SDGs were designed to address the unfinished agenda of the Millennium Development Goals (MDGs) and tackle global challenges, including poverty, inequality, environmental degradation, and more, with a broader and more ambitious focus."
    },
    {
      question: "Who is responsible for achieving the SDGs?",
      answer: "All countries, governments, businesses, civil society, and individuals have a role to play in achieving the SDGs. Governments are expected to align their policies and actions with the SDGs, while organizations and individuals can contribute through various initiatives and sustainable practices."
    },
    {
      question: "What is the timeline for the SDGs?",
      answer: "The SDGs were adopted in 2015 with a target for achieving all goals by 2030. Progress is measured through various indicators, and periodic reports are published to track achievements and gaps."
    },
    {
      question: "How is progress toward the SDGs measured?",
      answer: "Each goal has specific targets and measurable indicators. Progress is tracked by national governments, international organizations, and the United Nations, and annual reports, such as the SDG Progress Report, are published."
    },
    {
      question: "Are the SDGs legally binding?",
      answer: "No, the SDGs are not legally binding. However, they are a globally agreed-upon framework, and countries are expected to incorporate the goals into their national development policies and work towards their achievement."
    },
    {
      question: "How can businesses contribute to the SDGs?",
      answer: "Businesses can contribute by adopting sustainable practices, promoting decent work, reducing their environmental impact, supporting communities, and aligning their corporate social responsibility (CSR) initiatives with the SDGs."
    },
    {
      question: "What are some challenges to achieving the SDGs?",
      answer: `Key challenges include:
               Lack of sufficient funding.
               Political instability and conflicts.
               Climate change and environmental degradation.
               Inequality and disparities between nations.
               The impact of global crises such as pandemics.`
    },
    {
      question: "What is the connection between the SDGs and climate action?",
      answer: "Climate action (Goal 13) is a critical component of the SDGs. Achieving the other goals, such as reducing poverty and improving health, depends on addressing climate change, as it directly affects natural resources, livelihoods, and ecosystems."
    },
    {
      question: "What are the major funding sources for SDG implementation?",
      answer: "Funding for SDGs comes from a mix of public financing (governments), private sector investment, development aid, and international financial institutions. Achieving the SDGs requires significant financial resources."
    },
    {
      question: "How does the COVID-19 pandemic affect the SDGs?",
      answer: "The pandemic has set back progress on many SDGs, particularly those related to health (Goal 3), poverty (Goal 1), and inequalities (Goal 10). However, it has also highlighted the importance of global cooperation and resilient healthcare systems."
    }
  ];

  return (
    <section className="w-full bg-black px-4 py-12 text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-gray-900/85 p-6 shadow-2xl backdrop-blur sm:p-10">
        <div className="text-center">
          <p className="mx-auto inline-flex items-center justify-center rounded-full border border-blue-500/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/90 sm:text-sm">
            Support hub
          </p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-sm text-gray-300 sm:text-base">
            Have something on your mind? Tap a question to learn more about the goals and how you can get involved.
          </p>
        </div>
        <ul className="mt-8 space-y-4">
          {faqData.map((faq, index) => (
            <li key={index} className="overflow-hidden rounded-2xl border border-white/10 bg-gray-800/80 shadow-lg transition hover:border-blue-400/60">
              <button
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-medium text-white transition hover:bg-gray-800/90 sm:px-6 sm:py-5 sm:text-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex-1">{faq.question}</span>
                <span
                  className={`text-blue-300 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden px-4 pb-4 text-sm text-gray-300 whitespace-pre-line sm:px-6 sm:pb-6 sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
