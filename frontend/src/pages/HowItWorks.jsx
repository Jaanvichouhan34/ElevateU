import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Target, Zap, ArrowRight, UserCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera size={32} className="text-cyan-500" />,
      title: "1. Capture or Describe",
      description: "Upload a photo of your planned outfit or simply describe it in text. The AI processes visual data or text equally well to understand your style intent."
    },
    {
      icon: <Target size={32} className="text-violet-500" />,
      title: "2. Select Your Event",
      description: "Choose from over 24 highly-specific event profiles (from Salary Negotiation to First Date). This provides the vital context our AI needs to judge appropriateness."
    },
    {
      icon: <Zap size={32} className="text-pink-500" />,
      title: "3. AI Processing",
      description: "Our core intelligence engine instantly cross-references your inputs against modern style rules, psychology of color, and specific event etiquette."
    },
    {
      icon: <Sparkles size={32} className="text-indigo-500" />,
      title: "4. Receive Actionable Feedback",
      description: "You'll get an immediate Style Rating out of 10, alongside a detailed breakdown of what works, what to avoid, and last-minute grooming tips."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="text-center mb-20 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-black uppercase tracking-widest mb-6"
        >
           <Sparkles size={14} /> <span>THE PROCESS</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-6">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600">Works</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          ElevateU uses advanced AI models to provide instant, personalized style and communication feedback for life's most important moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="glass p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl hover:-translate-y-2 transition-transform group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] transition-all group-hover:scale-150 group-hover:bg-indigo-500/10 pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-black italic mb-4">{step.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 max-w-4xl mx-auto glass p-12 md:p-16 rounded-[4rem] border border-indigo-500/10 shadow-2xl relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-violet-600/5 pointer-events-none" />
         
         <div className="text-center space-y-8 relative z-10">
            <h2 className="text-4xl font-black italic tracking-tighter">Ready to <span className="text-indigo-600 dark:text-cyan-400">Elevate</span> your style?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold text-slate-600 dark:text-slate-300">
               <div className="flex items-center space-x-2"><UserCheck size={18} className="text-green-500" /><span>Instant Results</span></div>
               <div className="flex items-center space-x-2"><ShieldCheck size={18} className="text-green-500" /><span>Privacy Focused</span></div>
               <div className="flex items-center space-x-2"><Sparkles size={18} className="text-green-500" /><span>AI Powered</span></div>
            </div>
            <div className="pt-4 flex justify-center">
               <Link to="/outfit-scanner" className="inline-flex items-center space-x-3 px-10 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black tracking-widest text-sm shadow-2xl shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-105 transition-all group">
                  <span>TRY SCANNER NOW</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HowItWorks;