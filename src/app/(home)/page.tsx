import Demo from "../Components/Demo";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import Recent from "../Components/Recent";
import UseCases from "../Components/UseCases";

function page() {

    return (
        <main className="flex-1 my-12 space-y-12 md:my-16 md:space-y-16">
            <Hero />
            <HowItWorks />
            <UseCases />
            <Features />
            <Demo />
            <Recent />
        </main>
    );
};

export default page;