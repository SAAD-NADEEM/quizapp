import Link from "next/link";

function CTA() {

    return (
        <section className="py-16 bg-[--primary] text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Challenge Yourself?
                </h2>
                <p className="max-w-2xl mx-auto mb-8 text-[--background]/90">
                    Join thousands of learners improving their knowledge daily with QuizGenius
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/signup"
                        className="bg-white text-[--primary] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Create Free Account
                    </Link>
                    <Link
                        href="/quiz"
                        className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Try Demo Quiz
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;