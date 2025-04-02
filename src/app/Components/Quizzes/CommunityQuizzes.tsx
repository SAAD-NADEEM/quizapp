import { Button } from '@/components/ui/button';
import QuizCard from './QuizCard';
import SectionHeader from '@/app/Utils/SectionHeader';

const communityQuizzes = [
  {
    id: 'comm1',
    title: 'CSS Grid Challenges',
    questionCount: 8,
    plays: 542,
    author: 'SarahK',
    rating: 4.8
  },
  {
    id: 'comm2',
    title: 'TypeScript Trivia',
    questionCount: 12,
    plays: 321,
    author: 'DevMike',
    rating: 4.5
  }
];

export default function CommunityQuizzes() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <SectionHeader>Community Made</SectionHeader>
        <Button variant="ghost" className="text-[--primary]">
          Browse All →
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityQuizzes.map((quiz) => (
          <QuizCard 
            key={quiz.id}
            quiz={quiz}
            showAuthor
          />
        ))}
      </div>
    </section>
  );
}