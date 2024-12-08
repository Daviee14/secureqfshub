import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import image from './assets/dal.webp'

// Define the animations in a style tag since they're custom
const styles = `
@keyframes quantumPulse {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.3; }
  100% { transform: scale(1); opacity: 0.5; }
}

@keyframes quantumDrift {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
  100% { transform: translate(0, 0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-quantum-pulse-1 {
  animation: quantumPulse 8s infinite ease-in-out;
}

.animate-quantum-pulse-2 {
  animation: quantumPulse 12s infinite ease-in-out;
}

.animate-quantum-drift-1 {
  animation: quantumDrift 15s infinite ease-in-out;
}

.animate-fade-in {
  animation: fadeIn 1s forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 1s 0.3s forwards;
  opacity: 0;
}

.animate-rise-up {
  animation: fadeIn 1s 0.6s forwards;
  opacity: 0;
}
`;

const Hero = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 min-h-[80vh] flex items-center justify-center px-4 py-16 overflow-hidden">
  {/* Background Image */}
  <img
    src={image} // Replace with the path to your saved image
    alt="Futuristic Finance Background"
    className="absolute inset-0 w-full h-full object-cover opacity-60"
  />
  
  {/* Rest of your content */}
  <div className="relative z-10 mt-14 max-w-4xl text-center px-4">
    <h1 className="text-5xl  md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8 leading-tight animate-fade-in">
      Connect to the Future of Finance
    </h1>
    <p className="text-xl md:text-2xl text-blue-100/90 mb-12 max-w-2xl mx-auto animate-fade-in-delay leading-relaxed">
      Effortlessly Link Your Wallet to the Quantum Financial System (QFS) with Unmatched Security and Transparency.
    </p>
    <button className="bg-gradient-to-r from-white to-blue-100 text-indigo-900 hover:from-blue-100 hover:to-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2 group animate-rise-up shadow-lg hover:shadow-xl hover:-translate-y-0.5">
      <Link to="/connect">
        <span>Get Started</span>
      </Link>
      <ArrowRightIcon
        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
        size={24}
      />
    </button>
  </div>
</div>

    </>
  );
};

export default Hero;