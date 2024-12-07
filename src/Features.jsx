import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Zap, Pyramid } from 'lucide-react';

const Features = () => {
  const keyBenefits = [
    {
      icon: Shield,
      title: "Unmatched Security",
      description: "Advanced quantum encryption ensures your assets are safe.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Eye,
      title: "Total Transparency",
      description: "Monitor every transaction with peace of mind.",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Transactions",
      description: "Near-instant global transactions.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Pyramid,
      title: "Asset-Backed Stability",
      description: "Real, asset-backed currency for more stability.",
      gradient: "from-violet-400 to-violet-600"
    }
  ];

  const howItWorks = [
    "Set Up: Connect your existing wallet to our secure platform.",
    "Authenticate: Verify your identity securely with QFS hardware.",
    "Access & Manage: Start managing your funds with QFS-backed security."
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Welcome to the Next Era of Digital Finance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Quantum Financial System (QFS) is here to transform how you manage and secure your digital assets.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:-translate-y-1 border border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {howItWorks.map((step, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 rounded-lg hover:bg-gray-800/30 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-4 py-2 flex items-center justify-center mr-6 font-bold shadow-lg">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-200">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/connect">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-md">
                Connect with QFS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;