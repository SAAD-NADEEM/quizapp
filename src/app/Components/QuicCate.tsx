import Link from "next/link";

function QuicCate() {

    return (
        <section className="py-12 bg-[--card-bg]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[--text] mb-8 text-center">
                    Popular Quiz Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {['Science', 'History', 'Programming', 'Movies', 'Geography',
                        'Mathematics', 'Literature', 'Sports', 'Music', 'General Knowledge']
                        .map((category) => (
                            <Link
                                key={category}
                                href={`/quiz?category=${category.toLowerCase()}`}
                                className="bg-[--background] hover:bg-[--primary]/10 border border-[--border] rounded-lg p-4 text-center transition-colors"
                            >
                                <span className="font-medium text-[--text]">{category}</span>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default QuicCate;