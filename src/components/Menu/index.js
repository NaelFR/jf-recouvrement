import {useState} from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion"
import classNames from "classnames"
import {MenuButton } from "../MenuButton";

const variants = {
    open: { height: "max-content", opacity: 1, y: 0 },
    closed: { height: '0px', opacity: 0, y: "-100%" },
}
export function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const menuClassNames = classNames("text-center py-2 sm:h-auto", { "h-0": !isOpen, "h-max": !isOpen})

    return (
        <div className="bg-black text-white">
            <div className="flex items-center px-4">
                <Image src="/JF-Recouvrement.svg" alt="JF recouvrement Logo" width={231} height={95} />

                <MenuButton className="ml-auto md:hidden" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            </div>
            <motion.ul
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="text-center py-2 md:block"
            >
                <li>
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>
                </li>
                <li>
                    <Link href="/team">
                        <a>Notre équipe</a>
                    </Link>
                </li>
                <li>
                    <Link href="/work">
                        <a>Expertise</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </motion.ul>
        </div>
    )
}