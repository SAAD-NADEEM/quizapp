import CommunityQuizzes from "@/app/Components/Quizzes/CommunityQuizzes";
import UserQuizzes from "@/app/Components/Quizzes/UserQuizzes";
import WebAppQuizzes from "@/app/Components/Quizzes/WebAppQuizzes";


export default async function QuizzesPage() {

    return (
        <main className="flex-1 container my-12 md:my-16 px-4">
            <div>
                <header className="mb-12">
                    <div className="relative bg-gradient-to-r from-[--primary] to-[--secondary] rounded-xl overflow-hidden mb-12">
                        <div className="p-8 md:p-12 text-white">
                            <h1 className="text-4xl font-bold mb-3">Quiz Explorer</h1>
                            <p className="text-[--card-bg] text-lg opacity-90 max-w-2xl">
                                Test knowledge with <span className="font-bold">AI-generated</span> and <span className="font-bold">Community</span> quizzes
                            </p>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[--accent] rounded-full opacity-20"></div>
                        </div>
                    </div>
                </header>

                {/* 1. Web App's Featured Quizzes (First for instant engagement) */}
                <WebAppQuizzes />

                {/* 2. Community Quizzes (Social proof before personal content) */}
                <CommunityQuizzes />

                {/* 3. User's Private Quizzes (Only shown if logged in) */}
                <UserQuizzes />
            </div>
        </main>
    );
}