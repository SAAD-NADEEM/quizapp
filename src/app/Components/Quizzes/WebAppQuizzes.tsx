import { Button } from '@/components/ui/button';
import QuizCard from './QuizCard';
import SectionHeader from '@/app/Utils/SectionHeader';

const featuredQuizzes = [
    {
        id: 'web1',
        title: 'JavaScript Fundamentals',
        questionCount: 10,
        plays: 1240,
        difficulty: 'Beginner'
    },
    {
        id: 'web2',
        title: 'React Patterns',
        questionCount: 15,
        plays: 892,
        difficulty: 'Intermediate'
    }
];

export default function WebAppQuizzes() {
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
                <SectionHeader>Featured by QuizGenius</SectionHeader>
                <Button variant="ghost" className="text-[--primary]">
                    View All →
                </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredQuizzes.map((quiz) => (
                    <QuizCard
                        key={quiz.id}
                        quiz={quiz}
                    />
                ))}
            </div>
        </section>
    );
}