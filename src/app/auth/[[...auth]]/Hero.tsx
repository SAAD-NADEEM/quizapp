import { Sparkles, BrainCircuit, Code2, Lightbulb } from 'lucide-react';

export default function AuthHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[--primary]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-[--accent]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left column - Text content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="h-0.5 w-8 bg-[--primary]"></div>
              <p className="text-sm font-medium tracking-widest text-[--primary] uppercase">
                Interactive Learning
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-[--text] leading-tight">
              Transform <span className="text-[--accent] text-4xl md:text-5xl font-bold leading-tight">Content</span><br />
              Into <span className="relative inline-block">
                Knowledge
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[--accent]" viewBox="0 0 200 20">
                  <path 
                    d="M0 10 Q 50 20, 100 10 T 200 10" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-[--text-light] max-w-lg leading-relaxed">
              Your gateway to active learning. Convert any material into personalized quizzes with AI.
            </p>
          </div>
          
          {/* Right column - Visual element */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Floating card stack illusion */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[--border] rounded-2xl"></div>
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[--border] rounded-2xl"></div>
              
              <div className="relative bg-[--card-bg] border-2 border-[--border] rounded-2xl p-8 shadow-xl backdrop-blur-sm">
                {/* Animated question mark */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[--primary] rounded-full flex items-center justify-center text-white animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Abstract content visualization */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[--primary]/10 p-3 rounded-lg text-[--primary]">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div className="h-4 bg-[--border] rounded-full w-3/4"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`h-16 rounded-lg ${
                        i % 2 === 0 
                          ? 'bg-[--primary]/5 border border-[--primary]/10' 
                          : 'bg-[--background]'
                      }`}></div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-3 bg-[--accent]/20 rounded-full w-1/4"></div>
                    <div className="h-3 bg-[--accent]/30 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}