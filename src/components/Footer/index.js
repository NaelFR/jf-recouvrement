import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="max-w-[1080px] mx-auto px-4 mb-4 text-center flex justify-center items-center">
            <div className="space-x-2 text-blue">
                <a href="https://www.linkedin.com/company/jf-recouvrement/" target="_blank" rel="noreferrer"><Image src="/linkedin.svg" width={18} height={18} alt="Linkedin"/></a>
                <a href="https://www.facebook.com/JFrecouvrement/" target="_blank" rel="noreferrer"><Image src="/facebook.svg" width={18} height={18} alt="Facebook"/></a>
            </div>
            <span className="mx-2">-</span>
            <div className="text-sm ">
                <Link href="/legal-terms"><a>Mentions légales</a></Link>
            </div>

        </footer>
    )
}