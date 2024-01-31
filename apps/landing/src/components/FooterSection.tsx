import Link from "next/link";
import logo from "@/assets/logo_trans.png";
import Image from "next/image";

const FooterSection = () => {
    return (
        <footer className="bg-primary text-white px-[2rem] py-[3rem] [&_li:hover]:text-secondary [&_li]:duration-500">
            <section className="flex justify-between">
                <article>
                    <h2 className="mb-4">
                        <Image alt="Maarifa" src={logo} className="w-[15vw]" />
                    </h2>
                    <ul className="leading-loose pl-[2rem] text-lg">
                        <li>
                            <Link href={"#"}>Télécharger</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Tarification</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Versions</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Mises à jours</Link>
                        </li>
                    </ul>
                </article>

                <article className="flex flex-col">
                    <h2 className="text-xl font-bold my-auto self-start">
                        Top catégorie
                        <hr className="w-1/2 border-black border-none bg-secondary py-1 rounded-r-full rounded-l-full" />
                    </h2>
                    <ul className="leading-loose text-lg">
                        <li>
                            <Link href={"#"}>Chimie</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Biologie</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Math opération</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Physique</Link>
                        </li>
                    </ul>
                </article>

                <article className="flex flex-col">
                    <h2 className="text-xl font-bold my-auto self-start">
                        Liens utiles
                        <hr className="w-1/2 border-black border-none bg-secondary py-1 rounded-r-full rounded-l-full" />
                    </h2>
                    <ul className="leading-loose text-lg">
                        <li>
                            <Link href={"#"}>Contact</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Blog</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Tous les cours</Link>
                        </li>
                        <li>
                            <Link href={"#"}>S'inscrire</Link>
                        </li>
                    </ul>
                </article>

                <article className="flex flex-col">
                    <h2 className="text-xl font-bold my-auto self-start">
                        Help
                        <hr className="w-1/2 border-black border-none bg-secondary py-1 rounded-r-full rounded-l-full" />
                    </h2>
                    <ul className="leading-loose text-lg">
                        <li>
                            <Link href={"#"}>À propos de nous</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Conditions d'utilisations</Link>
                        </li>
                        <li>
                            <Link href={"#"}>Refund Policy</Link>
                        </li>
                    </ul>
                </article>
            </section>

            <section></section>
        </footer>
    );
};

export default FooterSection;
