"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CustomSeparator from "../CustomSeparator";
import { Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface QuizQuestion {
    question: string;
    options: { text: string; isCorrect: boolean }[];
}


const Quizzes: QuizQuestion[] = [
    {
        "question": "What is the primary purpose of TypeScript?",
        "options": [
            { "text": "To style web pages", "isCorrect": false },
            { "text": "To provide static typing for JavaScript", "isCorrect": true },
            { "text": "To manage databases", "isCorrect": false },
            { "text": "To optimize CSS", "isCorrect": false }
        ]
    },
    {
        "question": "Which keyword is used to declare a constant in TypeScript?",
        "options": [
            { "text": "var", "isCorrect": false },
            { "text": "const", "isCorrect": true },
            { "text": "let", "isCorrect": false },
            { "text": "static", "isCorrect": false }
        ]
    },
    {
        "question": "Which TypeScript feature helps catch type-related errors at compile-time?",
        "options": [
            { "text": "Static Typing", "isCorrect": true },
            { "text": "Dynamic Typing", "isCorrect": false },
            { "text": "Hoisting", "isCorrect": false },
            { "text": "Polymorphism", "isCorrect": false }
        ]
    },
    {
        "question": "What does the 'any' type in TypeScript allow?",
        "options": [
            { "text": "It enforces strict typing", "isCorrect": false },
            { "text": "It allows a variable to hold any type of value", "isCorrect": true },
            { "text": "It restricts a variable to a single type", "isCorrect": false },
            { "text": "It makes a variable immutable", "isCorrect": false }
        ]
    },
    {
        "question": "Which TypeScript feature allows defining object structures?",
        "options": [
            { "text": "Interfaces", "isCorrect": true },
            { "text": "Loops", "isCorrect": false },
            { "text": "Functions", "isCorrect": false },
            { "text": "Classes", "isCorrect": false }
        ]
    }
]






function Question({ data, onDelete }: { data: QuizQuestion, onDelete(): void }) {

    const [selected, SetSelected] = useState<number>()
    const [isSelect, SetIsSelect] = useState(false)

    function handleClick(i: number) {
        if (isSelect) return

        SetSelected(i)
        SetIsSelect(true)
    }

    return (
        <>
            <p className="text-[--text] my-3 font-medium flex justify-between">
                {data.question}
                <span onClick={onDelete}>
                    <Button variant="outline" className="py-2 px-3 hover:opacity-70">
                        <Trash2 className="text-[--warning] w-4 h-full" />
                    </Button>
                </span>
            </p>
            <div className="flex flex-col gap-3">
                {data.options.map((option, i) => (
                    <Button key={i} variant="outline"
                        className={`justify-start font-normal text-[--text-light] text-base py-6 px-4 ${selected == i ? 'border-[--primary]' : ''}`}
                        onClick={() => handleClick(i)}>
                        {option.text}
                        {selected == i && option.isCorrect && <span className="text-sm text-[--secondary]">✓ Correct</span>}
                    </Button>
                ))}
                <CustomSeparator />
            </div>
        </>
    )
}


function DisplayQuiz() {

    const [quizzes, setQuizzes] = useState<QuizQuestion[]>()

    useEffect(() => {
        setQuizzes(Quizzes)
    }, [])

    function handleDel(i: number) {
        setQuizzes(quizzes?.filter((_, index) => index !== i))
    }

    return (
        <div className="">

            {/* Header */}
            <h1 className="text-center font-bold text-[--text-light] text-2xl">AI-Generated Quiz</h1>
            <CustomSeparator />

            {/* QUstions */}
            <div>
                {quizzes?.map((quiz, i) => (
                    <Question key={i} data={quiz} onDelete={() => handleDel(i)} />
                ))}
            </div>

            {/* Footer */}
            <div className="flex md:flex-row flex-col gap-4">
                <div className="flex-1">
                    <h1 className="text-lg font-bold text-[--accent] mb-2">Save your quiz for future practice</h1>

                    <h2 className="text-[--text] font-semibold">Save Complete Quiz</h2>
                    <ul className="list-disc list-inside text-[--text-light] mb-2">
                        <li>Saves all current questions</li>
                        <li>You'll name this quiz collection</li>
                        <li>Stores all questions and answers together</li>
                    </ul>

                    <h2 className="text-[--text] font-semibold">Save Selected Questions</h2>
                    <ul className="list-disc list-inside text-[--text-light]">
                        <li>Choose specific questions to save</li>
                        <li>Add to existing collections or create new</li>
                    </ul>
                </div>

                <div className="flex flex-col flex-1 justify-center gap-4">
                    <Button variant="outline" className="border-[--accent] text-[--text-light] hover:bg-[--accent] hover:text-[--card-bg]">
                        Save Full Quiz
                    </Button>

                    <div className="flex items-center gap-4">
                        <Separator className="flex-1 bg-[--accent]"/>
                        <p>OR</p>
                        <Separator className="flex-1 bg-[--accent]"/>
                    </div>

                    <Button variant="outline" className="border-[--accent] text-[--text-light] hover:bg-[--accent] hover:text-[--card-bg]">
                        Save Selected
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DisplayQuiz;