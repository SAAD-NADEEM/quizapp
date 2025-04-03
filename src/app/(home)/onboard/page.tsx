"use client";

import { Rocket, Check, BookOpen, BrainCircuit, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[--background] to-[--card-bg]">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[--primary]/10 px-4 py-2 rounded-full text-[--primary] mb-6">
            <Rocket className="w-5 h-5" />
            <span className="font-medium">Welcome to QuizGenius!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[--text] mb-4">
            Let's Get You Started
          </h1>
          <p className="text-xl text-[--text-light] max-w-2xl mx-auto">
            We'll help you create your first AI-powered quiz in just a few steps.
          </p>
        </div>

        {/* Onboarding Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <BookOpen className="w-8 h-8 text-[--primary] mb-4" />,
              title: "Add Your Content",
              description: "Paste textbook excerpts, articles, or notes"
            },
            {
              icon: <BrainCircuit className="w-8 h-8 text-[--primary] mb-4" />,
              title: "Generate Quiz",
              description: "AI creates questions from your material"
            },
            {
              icon: <Check className="w-8 h-8 text-[--primary] mb-4" />,
              title: "Test Yourself",
              description: "Answer questions with instant feedback"
            }
          ].map((step, index) => (
            <div key={index} className="bg-[--card-bg] border border-[--border] rounded-xl p-6 text-center">
              {step.icon}
              <h3 className="text-xl font-semibold text-[--text] mb-2">{step.title}</h3>
              <p className="text-[--text-light]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[--text] mb-4 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[--primary]" />
            Quick Start Guide
          </h2>
          <div className="space-y-4">
            {[
              "1. Click 'Create Quiz' in the top navigation",
              "2. Paste your learning material",
              "3. Select topics you want to focus on",
              "4. Generate and take your quiz"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="bg-[--primary] text-white rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-[--text]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => router.push('/')}
            className="bg-[--primary] hover:bg-[--primary-hover] px-8 py-6 text-lg"
          >
            Start Creating Quizzes
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-[--text-light] mt-4">
            You can always find this guide in your account settings
          </p>
        </div>
      </div>
    </div>
  );
}