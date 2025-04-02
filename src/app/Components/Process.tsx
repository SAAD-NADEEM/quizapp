import { ArrowRight, CheckCircle, Cpu, FileInput } from "lucide-react";

function Process() {

    return (
        <section className="py-12 bg-[--card-bg] border-t border-[--border]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[--text] mb-12 text-center">
                    Your Content → AI Quiz → Mastery
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-8">
                    <div className="flex-1 text-center">
                        <div className="bg-[--background] border border-[--border] rounded-xl p-6 h-full">
                            <FileInput className="w-10 h-10 mx-auto mb-4 text-[--primary]" />
                            <h3 className="font-semibold text-[--text] mb-2">1. Input Material</h3>
                            <p className="text-[--text-light] text-sm">Paste textbook pages, articles, or notes</p>
                        </div>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[--text-light] rotate-90 md:rotate-0" />

                    <div className="flex-1 text-center">
                        <div className="bg-[--background] border border-[--border] rounded-xl p-6 h-full">
                            <Cpu className="w-10 h-10 mx-auto mb-4 text-[--primary]" />
                            <h3 className="font-semibold text-[--text] mb-2">2. AI Processing</h3>
                            <p className="text-[--text-light] text-sm">Generates MCQs with distractors</p>
                        </div>
                    </div>

                    <ArrowRight className="w-8 h-8 text-[--text-light] rotate-90 md:rotate-0" />

                    <div className="flex-1 text-center">
                        <div className="bg-[--background] border border-[--border] rounded-xl p-6 h-full">
                            <CheckCircle className="w-10 h-10 mx-auto mb-4 text-[--primary]" />
                            <h3 className="font-semibold text-[--text] mb-2">3. Learn & Retain</h3>
                            <p className="text-[--text-light] text-sm">Get explanations for each answer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;