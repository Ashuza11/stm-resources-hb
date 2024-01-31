import Image from "next/image";
import React from "react";
import man_sitting from "@/assets/man_sitting.svg";

const AppSection = () => {
    return (
        <section className="flex justify-center px-5 py-2 my-auto h-[calc(100vh-4rem)]">
            <article className="basis-1/2 flex flex-col gap-7 max-w-[500px] self-center">
                <h3 className="text-5xl leading-tight">
                    Télécharger Notre Application mobile ...
                </h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    nesciunt natus possimus veritatis distinctio, unde
                    repellendus nisi incidunt reprehenderit,
                </p>

                <div className="flex gap-8 justify-center text-white text-xl font-bold">
                    <button className="grow px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                        Télécharger
                    </button>
                </div>
            </article>

            <article className="basis-1/2">
                <Image
                    alt="best_future"
                    src={man_sitting}
                    className="max-h-full w-auto mx-auto"
                />
            </article>
        </section>
    );
};

export default AppSection;
