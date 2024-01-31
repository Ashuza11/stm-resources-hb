import FooterSection from "@/components/FooterSection";
import ListTutors from "@/components/ListTutors";
import React from "react";

const TutorPage = () => {
    return (
        <div className="">
            <h2 className="mt-4 mb-8 mx-auto w-fit text-4xl font-bold">
                Nos tuteurs
                <hr className="duration-700 border-none bg-secondary py-[4px] rounded-r-full rounded-l-full origin-center rotate-[-3deg]" />
            </h2>

            <ListTutors />

            <div className="py-4" />

            <div className="mx-auto w-fit mt-[2rem] text-white text-xl font-bold">
                <button className="px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                    Apprendre plus
                </button>
            </div>

            <div className="py-4" />

            <FooterSection />
        </div>
    );
};

export default TutorPage;
