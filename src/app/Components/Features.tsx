import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import Link from "next/link";

function Features() {

    return (
        <section className="py-16 bg-gradient-to-r from-[--primary]/10 to-[--accent]/10">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <Zap className="w-10 h-10 mx-auto text-[--primary] mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[--secondary] mb-4">
                    See It Work With Your Material
                </h2>
                <p className="text-[--text-light] mb-8">
                    Paste any text below to instantly generate sample questions (no login required):
                </p>

                <div className="bg-[--card-bg] border border-[--border] rounded-lg p-6 shadow-sm mb-6">
                    <textarea
                        className="w-full h-32 p-4 border border-[--border] rounded-lg mb-4 focus:border-[--primary] outline-none"
                        placeholder="Paste lecture notes, article excerpts, or any text here..."
                    />
                    <Button className="bg-[--primary] hover:bg-[--primary-hover]">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Sample Questions
                    </Button>
                </div>

                <p className="text-sm text-[--text-light]">
                    By trying this demo, you agree to our <Link href="/terms" className="text-[--primary] hover:underline">Terms</Link>.
                    <br />Full quizzes require a free account.
                </p>
            </div>
        </section>
    );
};

export default Features;