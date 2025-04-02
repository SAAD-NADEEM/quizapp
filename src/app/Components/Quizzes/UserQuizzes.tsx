import { Button } from '@/components/ui/button';
import Link from 'next/link';
import QuizCard from './QuizCard';
import SectionHeader from '@/app/Utils/SectionHeader';

const userQuizzes = [
    {
        id: 'user1',
        title: 'My React Study Set',
        questionCount: 5,
        lastEdited: '2 days ago'
    },
    {
        id: 'user2',
        title: 'Interview Prep',
        questionCount: 10,
        lastEdited: '1 week ago'
    }
];

export default function UserQuizzes() {
    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <SectionHeader>Your Quiz Collections</SectionHeader>
                <Button variant="ghost" className="text-[--primary]">
                    Browse All →
                </Button>
            </div>
            {userQuizzes.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userQuizzes.map((quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                        />
                    ))}
                </div>
            ) : (
                <div className="border-2 border-dashed border-[--border] rounded-lg p-12 text-center">
                    <p className="text-[--text-light] mb-4">You haven't created any quizzes yet</p>
                    <Button asChild>
                        <Link href="/create">
                            Create Your First Quiz
                        </Link>
                    </Button>
                </div>
            )}
        </section>
    );
}