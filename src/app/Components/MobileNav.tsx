"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-[--text] hover:bg-[--background]"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[--card-bg] border-r border-[--border]">
                <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-8">
                        <BrainCircuit className="w-8 h-8 text-[--primary]" />
                        <span className="text-xl font-bold text-[--text]">QuizGenius</span>
                    </div>

                    <nav className="flex flex-col space-y-2 flex-1">
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-[--text] hover:bg-[--background]"
                            onClick={() => setOpen(false)}
                        >
                            <Link href="/">Home</Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-[--text] hover:bg-[--background]"
                            onClick={() => setOpen(false)}
                        >
                            <Link href="/quiz">Quizzes</Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-[--text] hover:bg-[--background]"
                            onClick={() => setOpen(false)}
                        >
                            <Link href="/create">Create</Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-start text-[--text] hover:bg-[--background]"
                            onClick={() => setOpen(false)}
                        >
                            <Link href="/about">About</Link>
                        </Button>
                    </nav>

                    <div className="mt-auto pt-4">
                        <Button
                            className="w-full bg-[--primary] hover:bg-[--primary-hover]"
                            onClick={() => setOpen(false)}
                        >
                            <Link href="/signin" className="w-full">
                                Sign In
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}