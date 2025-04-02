import { FileText, ListChecks, Sparkles } from "lucide-react";

function HowItWorks() {

    return (
        <section className="bg-[--background] w-full border-[--border]">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl md:text-3xl text-[--text] font-bold mb-12 text-center">
                    How QuizGenius Works
                </h1>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            icon: <FileText className="w-8 h-8 mx-auto text-[--primary]" />,
                            title: "1. Provide Your Content",
                            desc: "Paste paragraphs or topics you want to be quizzed on"
                        },
                        {
                            icon: <Sparkles className="w-8 h-8 mx-auto text-[--primary]" />,
                            title: "2. AI Generates MCQs",
                            desc: "Our AI instantly creates multiple-choice questions from your material"
                        },
                        {
                            icon: <ListChecks className="w-8 h-8 mx-auto text-[--primary]" />,
                            title: "3. Test & Learn",
                            desc: "Select answers and get immediate feedback with explanations"
                        }
                    ].map((step, i) => (
                        <div key={i} className="text-center p-6 bg-[--card-bg] rounded-xl border border-[--border]">
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-[--text] mb-3">{step.title}</h3>
                            <p className="text-[--text-light]">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;