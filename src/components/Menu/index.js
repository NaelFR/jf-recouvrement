import React, {useState} from "react";
import Link from "next/link";
import Image from 'next/image';
import classNames from "classnames"
import {MenuButton } from "../MenuButton";

export function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const menuClassNames = classNames(
        "text-center md:h-auto md:flex md:justify-center md:opacity-100 md:gap-4 text-black md:translate-y-0",
        {
            "h-0 translate-y-5 opacity-0 ": !isOpen, "h-max translate-y-0 opacity-100 py-2": isOpen
        }
    )

    return (
        <div className="text-black">
            <div className="flex items-center md:justify-center pr-4">
                <Image src="/JF_Recouvrement_smile.png" width={481} height={200} quality={100}/>
                <MenuButton className="ml-auto md:hidden" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <ul
                className={menuClassNames}
            >
                <li>
                    <Link href="/#home" scroll={false} >
                        <a >Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#specialities">
                        <a >Expertise</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#contact" scroll={false}>
                        <a >Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
