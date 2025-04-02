"use client"

import { useState } from "react";
import AddTopics from "./AddTopics";
import { Button } from "@/components/ui/button";
import { FormTypes } from "@/app/Utils/interfaces";
import { GenQuiz } from "@/app/actions/GenerateQuiz";

function CreateForm() {

    const [desc, setDesc] = useState("")
    const [topics, setTopics] = useState<string[]>([])
    const [quizCount, setQuizCount] = useState(10)

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    function handleDesc(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value
        setDesc(value)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSuccess(false)

        if (desc == "") {
            window.alert("description is empty")
            return
        }
        if (topics.length == 0) {
            window.alert("there shoould at least be one topic name.")
            return
        }

        setIsSubmitting(true)

        try {
            const data: FormTypes = {
                description: desc,
                allTopics: topics,
                quizCount: quizCount
            }

            const res = await GenQuiz(data)
            setSuccess(true)
            console.log("Quiz Generated", res)

        } catch (err) {
            console.error('Quiz generation failed:', err);
        } finally {
            setIsSubmitting(false);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Description section */}
            <div className="flex flex-col gap-2">
                <label htmlFor="description" className="font-medium text-sm md:text-base text-[--text]">Content Description</label>
                <textarea id="description"
                    value={desc}
                    onChange={handleDesc}
                    placeholder="Paste or Write your learning material"
                    className="text-xs md:text-sm bg-[--background] border border-[--border] focus:border-[--primary] outline-none min-h-[120px] p-2 rounded-lg"
                />
            </div>

            {/* Topics section */}
            <AddTopics topics={topics} setTopics={setTopics} />

            {/* quantity select  */}
            <div className="flex gap-4">
                <Button variant={quizCount === 10 ? "default" : "outline"} onClick={() => setQuizCount(10)} type="button"
                    className={`w-full border-[--border] ${quizCount === 10 ? 'bg-[--primary] text-[--card-bg] hover:bg-[--primary-hover]' : ''}`}>
                    10
                </Button>
                <Button variant={quizCount === 15 ? "default" : "outline"} onClick={() => setQuizCount(15)} type="button"
                    className={`w-full border-[--border] ${quizCount === 15 ? 'bg-[--primary] text-[--card-bg] hover:bg-[--primary-hover]' : ''}`}>
                    15
                </Button>
                <Button variant={quizCount === 20 ? "default" : "outline"} onClick={() => setQuizCount(20)} type="button"
                    className={`w-full border-[--border] ${quizCount === 20 ? 'bg-[--primary] text-[--card-bg] hover:bg-[--primary-hover]' : ''}`}>
                    20
                </Button>
            </div>

            {/* form submission */}
            <Button type="submit" variant="outline" className="border-[--border] w-full bg-[--primary] text-[--card-bg] hover:bg-[--primary-hover] hover:text-[--background] mt-4">
                {isSubmitting ? "Generating..." : "Generate Quizzes"}
            </Button>
            {success && (
                <div className="mt-4 w-full bg-[--success] p-2 text-[--card-bg] rounded-lg text-center">Quiz Generated successfully</div>
            )}
        </form>
    );
};

export default CreateForm;