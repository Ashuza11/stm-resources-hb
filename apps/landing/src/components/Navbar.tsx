"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo_trans.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="flex justify-between">
            <h1>
                <Image
                    width={200}
                    height={200}
                    alt="maarifa"
                    src={logo}
                    className="w-[60vw] sm:w-[10rem]"
                />
            </h1>
            <nav className="m-auto">
                <ul className="flex gap-8 text-lg [&_.active_hr]:!w-full">
                    <li>
                        <Link
                            href={"/"}
                            className={`${pathname == "/" ? "active" : ""}`}
                        >
                            Home
                            <Line />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/tutor"}
                            className={`${
                                pathname == "/tutor" ? "active" : ""
                            }`}
                        >
                            Tuteurs
                            <Line />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/contact"}
                            className={`${
                                pathname == "/contact" ? "active" : ""
                            }`}
                        >
                            Contact
                            <Line />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/"}
                            className={`${
                                pathname == "/connexion" ? "active" : ""
                            }`}
                        >
                            Connexion
                            <Line />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const Line = () => {
    return (
        <hr className="origin-center mx-auto rotate-[-3deg] w-0 duration-700 border-none bg-secondary py-[2px] rounded-r-full rounded-l-full" />
    );
};

export default Navbar;
