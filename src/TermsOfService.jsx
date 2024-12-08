import React from 'react';
import { Gavel, FileText, ShieldCheck, Globe } from 'lucide-react';
import Footer from './Footer';

const TermsOfService = () => {
  const termsSections = [
    {
      icon: Gavel,
      title: "User Obligations",
      content: [
        "Compliance with platform rules",
        "Accurate account information",
        "Responsible platform usage",
        "Prohibition of fraudulent activities"
      ]
    },
    {
      icon: FileText,
      title: "Legal Agreements",
      content: [
        "Service usage contract",
        "Intellectual property rights",
        "Limitation of liability",
        "Dispute resolution mechanisms"
      ]
    },
    {
      icon: ShieldCheck,
      title: "User Protections",
      content: [
        "Account security guidelines",
        "Data protection commitments",
        "User rights and safeguards",
        "Transparent policy enforcement"
      ]
    },
    {
      icon: Globe,
      title: "Global Compliance",
      content: [
        "International regulatory adherence",
        "Cross-border transaction guidelines",
        "Local jurisdiction considerations",
        "Compliance with financial regulations"
      ]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal framework governing the use of our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {termsSections.map((section, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700/50"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg`}>
                    <section.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <ul className="text-gray-300 space-y-2 pl-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="mr-2 text-blue-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Legal Commitments</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Legal Clarity:</strong> Our terms are designed to be transparent, fair, and protective of both user rights and platform integrity.
              </p>
              <p>
                <strong className="text-white">Continuous Review:</strong> We regularly update our terms to reflect evolving legal landscapes and user needs.
              </p>
              <p>
                <strong className="text-white">User Empowerment:</strong> We prioritize clear communication and user understanding of our legal framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default TermsOfService;