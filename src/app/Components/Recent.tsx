import Link from "next/link";

function Recent() {

    return (
        <section className="bg-[--background]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[--text]">
                        Featured Quizzes
                    </h2>
                    <Link href="/quiz" className="text-[--primary] hover:underline">
                        View All →
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "JavaScript Fundamentals", questions: 10, plays: "1.2k" },
                        { title: "World Capitals Challenge", questions: 15, plays: "850" },
                        { title: "Python Programming Quiz", questions: 12, plays: "2.1k" }
                    ].map((quiz, i) => (
                        <div key={i} className="bg-[--card-bg] border border-[--border] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <h3 className="font-bold text-[--text] mb-2">{quiz.title}</h3>
                                <div className="flex gap-4 text-sm text-[--text-light]">
                                    <span>{quiz.questions} questions</span>
                                    <span>{quiz.plays} plays</span>
                                </div>
                            </div>
                            <Link
                                href="/quiz/1"
                                className="block w-full bg-[--primary] hover:bg-[--primary-hover] text-white text-center py-3 transition-colors"
                            >
                                Start Quiz
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recent;