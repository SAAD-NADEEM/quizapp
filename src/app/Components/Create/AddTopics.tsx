"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction, useRef } from "react";

interface Props {
    topics?: string[]
    setTopics: Dispatch<SetStateAction<string[]>>
}


function AddTopics({topics, setTopics}: Props) {

    const InputRef = useRef<HTMLInputElement>(null)

    function AddTopics() {
        const value = InputRef.current?.value.trim() as string
        
        if (InputRef.current) {
            setTopics((prev: string[]) => [...prev, value])
            InputRef.current!.value = ""
            InputRef.current.focus()
        }
    }

    function DelTopic(index:number) {
        setTopics((prev) => prev.filter((_,i) => i !== index))
    }

    return (
        <>
            <div className="my-2 flex flex-wrap gap-2 ">
                {topics?.map((topic, index) => (
                    <Badge key={index} variant="outline" className="border-[--border] bg-[--background] font-normal">
                        {topic}
                        <Trash2 onClick={() => DelTopic(index)} className="w-3 h-3 ml-2 text-[--text-light]" />
                    </Badge>
                ))}
            </div>
            <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Add Your Topic Names"
                    ref={InputRef}                    
                    className="w-full text-sm tracking-tight bg-[--background] border border-[--border] rounded-lg px-2 outline-none focus:border-[--primary]" />
                <Button type="button" onClick={AddTopics} variant="outline" className="text-[--text-light] bg-[--background]">
                    <PlusCircle />
                </Button>
            </div>
        </>
    );
};

export default AddTopics;