import Image from "next/image";
import React from "react";
const static_data = [
    {
        name: "Alice",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Kurt&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=BlazerSweater&eyeType=Cry&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Tanned",
    },
    {
        name: "Charline",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Kurt&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=BlazerShirt&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Pale",
    },
    {
        name: "Anita",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Hearts&eyebrowType=UpDownNatural&mouthType=Concerned&skinColor=Brown",
    },
    {
        name: "John",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurly&accessoriesType=Round&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Yellow",
    },
    {
        name: "David",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Side&eyebrowType=UpDown&mouthType=Grimace&skinColor=DarkBrown",
    },
    {
        name: "Anie",
        link: "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=BlazerShirt&clotheColor=Pink&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Serious&skinColor=Pale",
    },
];

const ListTutors = () => {
    return (
        <ul className="flex flex-wrap justify-center gap-[2vw]">
            {static_data.map((tutor, i) => (
                <li
                    key={i}
                    className="shadow-[0.3rem_0.3rem_0px_0px_#00000040] flex flex-col justify-center gap-[2rem] border-2 border-black w-[25vw] aspect-square p-4"
                >
                    <div className="mx-auto border border-black pt-1 w-fit aspect-square rounded-full overflow-hidden">
                        <Image
                            width={180}
                            height={180}
                            alt="Tutor Profile"
                            src={tutor.link}
                        />
                    </div>
                    <p className="text-center text-3xl font-bold">
                        {tutor.name}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default ListTutors;
