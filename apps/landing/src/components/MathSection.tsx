import Image from "next/image";
import React from "react";
import writing_board from "@/assets/writing_board.svg";

const MathSection = () => {
    return (
        <section className="flex justify-center px-5 py-2 my-auto h-screen">
            <article className="basis-1/2 ">
                <Image
                    alt="best_future"
                    src={writing_board}
                    className="max-h-full w-auto"
                />
            </article>
            <article className="basis-1/2 flex flex-col gap-7 max-w-[500px] self-center">
                <h3 className="text-5xl leading-tight">
                    Les maths c'est plus que des chiffres et des formules ...
                </h3>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    nesciunt natus possimus veritatis distinctio, unde
                    repellendus nisi incidunt reprehenderit,
                </p>

                <div className="flex gap-8 justify-center text-white text-xl font-bold">
                    <button className="grow px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                        Démarrer
                    </button>
                </div>
            </article>
        </section>
    );
};

export default MathSection;
