import Image from "next/image";
import React from "react";
import logo from "@/assets/logo_title.png";
import Link from "next/link";

const Navbar = () => {
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
                <ul className="flex gap-8 text-lg">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Tuteurs</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Contact</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Connexion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
