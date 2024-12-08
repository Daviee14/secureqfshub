import React from 'react';
import { ShieldCheck, Lock, Globe } from 'lucide-react';
import Footer from './Footer';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: "Quantum Encryption",
      description: "Advanced quantum-level encryption protects every transaction and asset.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Lock,
      title: "Anti-Fraud Technology",
      description: "Cutting-edge security protocols prevent unauthorized access and cyber threats.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Globe,
      title: "Global Security Standards",
      description: "Compliance with international data protection and financial security guidelines.",
      gradient: "from-indigo-400 to-indigo-600"
    }
  ];

  const testimonials = [
    {
      quote: "Connecting my wallet to QFS has completely changed the way I manage my assets. The security and transparency are unparalleled.",
      author: "Sarah L.",
      role: "Early Adopter"
    },
    {
      quote: "The setup was simple, and now I can track my transactions with peace of mind. QFS has brought financial security to a whole new level.",
      author: "Mark D.",
      role: "Investor"
    }
  ];

  const faqs = [
    {
      question: "What is QFS?",
      answer: "The Quantum Financial System (QFS) is a blockchain-based network designed to enhance global transactions with quantum encryption and asset-backed stability."
    },
    {
      question: "How secure is linking my wallet to QFS?",
      answer: "Extremely secure. QFS uses quantum encryption, anti-hacking measures, and advanced security protocols to protect every transaction and asset."
    },
    {
      question: "Is my data safe?",
      answer: "Yes, QFS respects your privacy. All transactions are encrypted, and we adhere to strict data protection guidelines to ensure your information is always safe."
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
            Your Security Is Our Top Priority
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            QFS hardware ledger provides a highly secure, private, and quantum-encrypted environment to protect your digital assets.
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Security Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50"
              >
                <p className="text-lg italic text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-blue-300">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default SecurityPage;