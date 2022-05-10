import Image from 'next/image'

export function ContactCard() {
    return (
        <section id="contact" className="text-center">
            <div className="md:max-h-96 md:overflow-hidden">
                <Image src='/contact.png' width={640} height={510}  layout="responsive"/>
            </div>
            <h2 className="text-2xl text-blue uppercase">Contact</h2>
            <address className="space-y-3 text-blue">
                <div>51 rue Robert Schuman 59700 Marcq en Baroeul</div>
                <div><a href="mailto:jfrecouvrement@gmail.com">jfrecouvrement@gmail.com</a></div>
                <div>HENNEBELLE Florian  <a href='tel:+33763717750'>07 63 71 77 50</a></div>
                <div>ZSIDAI Jordan  <a href='tel:+33635302365'>06 35 30 23 65</a></div>
            </address>
        </section>
    )
}