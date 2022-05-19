import Image from 'next/image'

export function ContactCard() {
    return (
        <section id="contact" className=" px-4 py-8 md:flex items-center justify-center md:space-x-4">
            <div className="w-48 mx-auto md:mx-0">
                <Image src='/undraw_contact_us_re_4qqt.svg' width={894} height={449} alt="contact"/>
            </div>
            <div className="py-4">
                <address className="space-y-3 text-blue">
                    <div>51 rue Robert Schuman 59700 Marcq en Baroeul</div>
                    <div><a href="mailto:contact@jf-recouvrement.fr">contact@jf-recouvrement.fr</a></div>
                    <div>HENNEBELLE Florian  <a href='tel:+33763717750'>07 63 71 77 50</a></div>
                    <div>ZSIDAI Jordan  <a href='tel:+33635302365'>06 35 30 23 65</a></div>
                </address>
            </div>
        </section>
    )
}