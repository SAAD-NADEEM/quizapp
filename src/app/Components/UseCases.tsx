import { BookOpen, Brain, Briefcase, FlaskConical, GraduationCap, Users } from "lucide-react";

function UseCases() {

    return (
        <section className="bg-[--background]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[--text] mb-8 text-center">
                    Perfect For
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Students",
                            desc: "Turn lecture notes into practice tests",
                            icon: <GraduationCap className="w-6 h-6 text-[--primary]" />
                        },
                        {
                            title: "Teachers",
                            desc: "Create quizzes from textbook material in seconds",
                            icon: <BookOpen className="w-6 h-6 text-[--primary]" />
                        },
                        {
                            title: "Professionals",
                            desc: "Prepare for certifications with personalized tests",
                            icon: <Briefcase className="w-6 h-6 text-[--primary]" />
                        },
                        {
                            title: "Researchers",
                            desc: "Test comprehension of complex papers",
                            icon: <FlaskConical className="w-6 h-6 text-[--primary]" />
                        },
                        {
                            title: "Book Clubs",
                            desc: "Generate discussion questions from chapters",
                            icon: <Users className="w-6 h-6 text-[--primary]" />
                        },
                        {
                            title: "Lifelong Learners",
                            desc: "Quiz yourself on articles you read",
                            icon: <Brain className="w-6 h-6 text-[--primary]" />
                        }
                    ].map((useCase, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-[--card-bg] rounded-lg border border-[--border]">
                            <div className="bg-[--primary]/10 p-2 rounded-full">
                                {useCase.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-[--text]">{useCase.title}</h3>
                                <p className="text-sm text-[--text-light]">{useCase.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;