import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
    return (
        <section>
            <header className="text-center">
                <h2 className="font-semibold text-5xl">
                    Prenez Contact avec nous !
                </h2>
                <p className="">
                    Avez-vous une question ? Nous serons ravis de vous lire.
                </p>
            </header>

            <div className="py-4" />

            <ul className="flex justify-center gap-[5rem]">
                <li className="flex flex-col gap-3 items-center">
                    <span className="text-[7rem]">
                        <CiMail />
                    </span>
                    <p>
                        <a href="mailto:contact@STEM-rh.com">
                            contact@STEM-rh.com
                        </a>
                    </p>
                </li>
                <li className="flex flex-col gap-3 items-center">
                    <span className="text-[7rem]">
                        <FaPhoneAlt />
                    </span>
                    <p>
                        <a href="tel:+243 978 564 734">+243 978 564 734</a>
                    </p>
                </li>
                <li className="flex flex-col gap-3 items-center">
                    <span className="text-[7rem]">
                        <FaLocationDot />
                    </span>
                    <p>Av. Amani, Kyeshero, Goma</p>
                </li>
            </ul>

            <div className="py-4" />

            <form className="max-w-fit mx-auto">
                <div className="grid grid-cols-2 grid-rows-2">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Votre nom ..."
                            className="border-2 border-neutral-500 rounded-lg px-5 py-3"
                        />
                    </div>
                    <div className="p-2 mt-auto">
                        <input
                            type="text"
                            placeholder="Votre email ..."
                            className="border-2 border-neutral-500 rounded-lg px-5 py-3"
                        />
                    </div>
                    <div className="col-[2_/_span_1] row-[1_/_span_2]  p-2">
                        <textarea
                            name=""
                            id=""
                            rows={5}
                            className="resize-none border-2 border-neutral-500 rounded-lg px-5 py-3"
                            placeholder="Votre message"
                        ></textarea>
                    </div>
                </div>

                <div className="mx-auto w-fit mt-[2rem] text-white text-lg">
                    <button className="px-5 py-3 bg-primary rounded-xl shadow-[0.3rem_0.3rem_0px_0px_#00000040]">
                        Envoyer
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactSection;
