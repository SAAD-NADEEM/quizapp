import { Rocket, Brain, BarChart2, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-[--primary]" />,
      title: "Fast Quizzes",
      description: "Generate quizzes in seconds with AI"
    },
    {
      icon: <Brain className="w-6 h-6 text-[--primary]" />,
      title: "Smart Learning",
      description: "Adaptive questions based on your level"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[--primary]" />,
      title: "Track Progress",
      description: "See your improvement over time"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[--primary]" />,
      title: "Instant Feedback",
      description: "Learn why answers are right or wrong"
    }
  ];

  return (
    <section className="bg-[--background]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content - Now comes first in mobile view */}
          <div className="lg:w-1/2 order-1 lg:order-none text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[--text] mb-4">
              Test Your Knowledge with{' '}
              <span className="text-[--primary] whitespace-nowrap">AI-Powered</span>{' '}
              Quizzes
            </h1>
            <p className="text-base sm:text-lg text-[--text-light] mb-6 md:mb-8 max-w-[600px] mx-auto lg:mx-0">
              Generate custom quizzes on any topic instantly. Perfect for students, teachers, and lifelong learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/quiz"
                className="bg-[--primary] hover:bg-[--primary-hover] text-white px-6 py-3 rounded-lg text-center font-medium transition-colors"
              >
                Start a Quiz
              </Link>
              <Link
                href="/create"
                className="bg-[--card-bg] border border-[--primary] text-[--primary] hover:bg-[--primary] hover:text-white px-6 py-3 rounded-lg text-center font-medium transition-colors"
              >
                Create Your Own
              </Link>
            </div>
          </div>

          {/* Features Card - Comes after text on mobile */}
          <div className="lg:w-1/2 w-full order-0 lg:order-none">
            <div className="bg-[--card-bg] p-6 sm:p-8 rounded-xl shadow-lg border border-[--border]">
              <h2 className="text-xl sm:text-2xl font-bold text-[--text] mb-6 text-center lg:text-left">
                Why Choose QuizGenius?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[--background] p-2 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[--text]">{feature.title}</h3>
                      <p className="text-sm text-[--text-light]">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}