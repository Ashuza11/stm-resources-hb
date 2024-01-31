import React from "react";
import science from "@/assets/science.svg";
import chat_bot from "@/assets/chat_bot.svg";
import circulatory_system from "@/assets/circulatory_system.svg";
import Image from "next/image";

const course_data = [
    { image: science, title: "Chimie" },
    { image: circulatory_system, title: "Biologie" },
    { image: chat_bot, title: "Introduction à l'IA" },
];

const CourseSection = () => {
    return (
        <section className="flex flex-col justify-center px-5 py-2 my-auto min-h-screen">
            <h3 className="text-5xl font-semibold text-center mb-[3rem] w-fit mx-auto">
                Nos meilleurs Cours
                <hr className="w-full border-black border-none bg-secondary py-1 rounded-r-full rounded-l-full" />
            </h3>

            <ul className="flex justify-around gap-4">
                {course_data.map((course) => (
                    <CourseCard {...course} key={course.title} />
                ))}
            </ul>

            <div className="mx-auto mt-[2rem] text-white text-xl font-bold">
                <button className="px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                    Voir la liste complète
                </button>
            </div>
        </section>
    );
};

const CourseCard = ({
    image,
    title,
}: {
    image: typeof science;
    title: string;
}) => {
    return (
        <article className="flex gap-7 flex-col border-2 border-black rounded-lg p-4">
            <header>
                <Image alt={title} src={image} className="w-[20vw]" />
            </header>
            <div className="font-bold text-3xl mt-auto text-center">
                {title}
            </div>
            <footer className="text-white font-bold self-center">
                <button className="px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                    Découvrir
                </button>
            </footer>
        </article>
    );
};

export default CourseSection;
