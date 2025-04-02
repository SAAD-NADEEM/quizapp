import DisplayQuiz from "@/app/Components/Create/DisplayQuiz";
import CreateForm from "../../Components/Create/CreateForm";
import CreateQuizHeader from "../../Components/Create/CreateQuizHeader";

function page() {

  return (
    <main className="flex-1 my-12 md:my-16 px-4">
      <section className="bg-[--card-bg] rounded-lg max-w-[720px] shadow-md w-full md:mx-auto p-4 md:p-6">
        {/* <CreateQuizHeader />
        <CreateForm /> */}
        <DisplayQuiz />
      </section>
    </main>
  );
};

export default page;