"use client";
import React, { useState } from 'react';
import Layout from './layout';

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
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 max-w-[calc(100%-55px)] border border-radius-lg rounded-2xl ml-7">
        <div className="w-[1000px] max-w-[1400px] bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl shadow-xl overflow-hidden p-8 border border-[#004080]">
          <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-100">Frequently Asked Questions</h2>
          <ul className="list-none m-0 p-0">
            {faqData.map((faq, index) => (
              <li key={index} className="bg-gray-700 rounded-lg border border-gray-600 mb-4 transition-colors duration-300 ease-in-out">
                <button
                  className="w-full text-left p-6 bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:rounded-xl"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-semibold text-gray-100">{faq.question}</span>
                    <span
                      className={`text-[#5f9ea0] transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-gray-600 rounded-lg">
                    <p className="text-lg text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Footer;
