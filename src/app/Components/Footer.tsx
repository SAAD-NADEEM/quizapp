import { Github, Twitter, Linkedin, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[--text] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 items-center md:grid-cols-4 gap-8">

                    <div className="col-span-2 h-full">
                        <div className="flex items-center gap-2 mb-4">
                            <div className='rounded-lg overflow-hidden'>
                                <Image src={'/logo.png'} alt='brand logo' width={32} height={32} />
                            </div>                            <span className="text-xl font-bold">QuizGenius</span>
                        </div>
                        <p className="text-[--text-light] mb-4">
                            The ultimate AI-powered quiz platform for learners and educators.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/quiz" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Quizzes
                                </Link>
                            </li>
                            <li>
                                <Link href="/create" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Create Quiz
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[--text-light] hover:text-[--accent] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[--border] mt-8 pt-8 text-center text-[--text-light] text-sm">
                    <p>© {new Date().getFullYear()} QuizGenius. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}