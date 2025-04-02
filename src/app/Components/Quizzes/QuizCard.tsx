import Link from 'next/link';
import { Star, User, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function QuizCard({
    quiz,
    showAuthor = false
}: {
    quiz: any;
    showAuthor?: boolean;
}) {
    return (
        <div className="border border-[--secondary] rounded-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="p-6">
                <h3 className="font-bold text-lg text-[--text] mb-2">{quiz.title}</h3>

                <div className="flex items-center gap-4 text-sm text-[--text-light] mb-3">
                    <span>{quiz.questionCount} questions</span>
                    {'plays' in quiz && <span>{quiz.plays} plays</span>}
                </div>

                {showAuthor && (
                    <div className="flex items-center text-sm text-[--text-light] mb-4">
                        <User className="w-4 h-4 mr-1" />
                        {quiz.author}
                    </div>
                )}

                {'difficulty' in quiz && (
                    <span className={`text-xs px-2 py-1 rounded-full ${quiz.difficulty === 'Beginner'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                        {quiz.difficulty}
                    </span>
                )}
            </div>
            <div className='px-6 py-3 mb-3 pt-0 flex flex-wrap gap-3'>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
                <Badge className='text-[--text-light] rounded-full bg-[--border] shadow-none'>JavaScript</Badge>
            </div>

            <div className="border-t border-[--secondary] bg-[--background]">
                <Button asChild variant="default" size="sm" className='w-full h-10 font-bold text-base rounded-none bg-[--primary] hover:bg-[--primary-hover]'>
                    <Link href={`/quiz/${quiz.id}`}>
                        Start Quiz
                    </Link>
                </Button>
            </div>
        </div>
    );
}