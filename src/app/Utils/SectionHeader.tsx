import { ReactNode } from "react";

function SectionHeader({children}:{children:ReactNode}) {

    return (
        <div className="flex items-center">
            <div className="w-2 h-8 bg-[--accent] rounded-full mr-3"></div>
            <h2 className="md:text-2xl font-bold text-[--text]">
                {children}
            </h2>
        </div>
    );
};

export default SectionHeader;