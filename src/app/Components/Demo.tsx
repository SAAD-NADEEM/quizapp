import { Lightbulb } from "lucide-react";

function Demo() {

    return (
        <section className="bg-[--background]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[--text] mb-8 text-center">
                    See It In Action
                </h2>
                <div className="max-w-4xl mx-auto bg-[--card-bg] border border-[--border] rounded-xl overflow-hidden">
                    {/* Fake interactive demo */}
                    <div className="p-6 border-b border-[--border]">
                        <div className="flex gap-2 mb-4">
                            <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                            <span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
                            <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 bg-[--border] rounded w-3/4"></div>
                            <div className="h-4 bg-[--border] rounded w-full"></div>
                            <div className="h-4 bg-[--border] rounded w-5/6"></div>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="font-bold text-[--text] mb-4">Sample Question (AI-Generated):</h3>
                        <p className="mb-4 text-[--text]">What is the capital of France?</p>

                        <div className="space-y-3 mb-6">
                            {['Paris', 'London', 'Berlin', 'Madrid'].map((option, i) => (
                                <div
                                    key={i}
                                    className={`p-3 rounded-lg border ${i === 0
                                            ? 'border-[--primary] bg-[--primary]/10'
                                            : 'border-[--border] hover:border-[--primary]/50'
                                        }`}
                                >
                                    {option} {i === 0 && <span className="text-sm text-[--primary] ml-2">✓ Correct</span>}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-[--background] rounded-lg">
                            <h4 className="font-semibold text-[--text] mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4 text-[--primary]" /> Explanation
                            </h4>
                            <p className="text-sm text-[--text-light]">Paris has been the capital of France since the 5th century. It's both the political and cultural center of the country.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;