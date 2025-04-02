import { Loader2 } from "lucide-react";

function SaveUser() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[--background]">
            <div className="text-center max-w-md p-8 rounded-lg bg-[--card-bg] border border-[--border]">
                <Loader2 className="w-12 h-12 animate-spin text-[--primary] mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-[--text] mb-2">
                    Setting Up Your Account
                </h1>
                <p className="text-[--text-light] mb-6">
                    We're preparing your personalized learning experience...
                </p>
                <div className="space-y-4 text-sm text-[--text-light]">
                    <p>✓ Connecting to your Google account</p>
                    <p>✓ Creating your profile</p>
                    <p>✓ Loading your dashboard</p>
                </div>
            </div>
        </div>
    );
};

export default SaveUser;