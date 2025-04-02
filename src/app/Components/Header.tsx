import Link from 'next/link';
import { MobileNav } from './MobileNav';
import Image from 'next/image';
import { AuthButton } from './AuthButton';


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[--card-bg] border-b border-[--border] shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className='rounded-lg overflow-hidden'>
            <Image src={'/logo.png'} alt='brand logo' width={32} height={32}/>
          </div>
          <span className="text-xl font-bold text-[--text]">QuizGenius</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-[--text-light] hover:text-[--primary] transition-colors">
            Home
          </Link>
          <Link href="/quiz" className="text-[--text-light] hover:text-[--primary] transition-colors">
            Quizzes
          </Link>
          <Link href="/create" className="text-[--text-light] hover:text-[--primary] transition-colors">
            Create
          </Link>
          <Link href="/about" className="text-[--text-light] hover:text-[--primary] transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <MobileNav />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}