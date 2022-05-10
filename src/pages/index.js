import Image from 'next/image'
import { ContactCard } from '../components/ContactCard'

export default function Index() {
    return (
        <>
            <section id="home">
                <div className='relative text-center'>
                    <div className="md:max-h-96 md:overflow-hidden">
                        <Image  src='/banner.png' width={640} height={510} layout="responsive" alt="banner"></Image>
                    </div>
                    <div
                        className='absolute md:relative top-0 md:mt-8 flex flex-col justify-center items-center w-full h-full text-white md:text-blue text-center '>
                        <p className='uppercase text-2xl md:text-4xl md:font-bold'> Découvrez JF Recouvrement</p>
                        <p>Pour vos retards de paiement.</p>
                    </div>
                </div>
            </section>
            <section id="specialities" className='text-center'>
                <div className='flex flex-col justify-center items-center text-center mainTextBlock-spacing'>
                    <p className='uppercase text-blue text-3xl'>Nos domaines de spécialité</p>
                    <p>Laissez-nous vous représenter</p>
                </div>
                <div className="md:grid md:grid-cols-3">
                    <div className="md:grid md:grid-rows-2">
                        <div className='flex-1'>
                            <Image src='/specialities.png' width={640} height={510} alt="recouvrement judiciaire"></Image>
                        </div>
                        <div className='flex flex-col flex-1 justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-xl'>Recouvrement judiciaire</p>
                            <p>Nous pouvons réaliser votre dossier afin de le remettre au greffe du tribunal pour réaliser une injonction
            de payer par un huissier.
            Suite à la décision du juge, nous vous remettrons les documents nécéssaires ainsi qu&apos;au débiteur.</p>
                        </div>
                    </div>
                    <div className="md:flex md:flex-col-reverse">
                        <div className='flex-1'>
                            <Image src='/signature.png' width={640} height={510} alt="recouvrement amiable"></Image>
                        </div>
                        <div className='flex flex-col flex-1 justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-2xl'>RECOUVREMENT AMIABLE</p>
                            <p>Nous sommes spécialisés dans le recouvrement amiable des créances.
                        Nous vous proposons une offre sur-mesure pour satisfaire chacun de vos besoins. Nous garantissons également
                        une facturation uniquement sous réserve de règlement du créancier.</p>
                        </div>
                    </div>
                    <div className="md:grid-rows-2">
                        <div className='flex-1'>

                            <Image src='/friendly_recovery.png' width={640} height={510} alt="le saviez-vous ?"></Image>
                        </div>
                        <div className='flex flex-col flex-1 justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-2xl'>Le saviez-vous ?</p>
                            <p>Plus de 25% des dépôts de bilan chaque année sont dûs à des retards de paiement. Alors ne perdez pas plus
            de temps et contactez-nous !</p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="services" className="text-center">
                <div className='flex flex-col justify-center items-center text-center mainTextBlock-spacing'>
                    <p className='uppercase text-blue text-3xl'>NOS SERVICES</p>
                    <p>JF Recouvrement vous propose plusieurs prestations</p>
                </div>
                <div className="md:flex">
                    <div className="relative flex-1 flex flex-col items-center">
                        <div className="w-32">
                            <Image src='/undraw_predictive_analytics_re_wxt8.svg' width={363} height={438} alt="analyse du client"></Image>
                        </div>
                        <div className=' md:bottom-0 flex flex-col justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-2xl'>ANALYSE DU CLIENT</p>
                            <p>Grâce à nos outils informatiques, nous vous proposons une analyse chiffrée et complète de vos clients.</p>
                        </div>
                    </div>
                    <div className="relative flex-1 flex flex-col items-center">
                        <div className="w-32">
                            <Image src='/undraw_business_deal_re_up4u.svg' width={759} height={616} alt="recouvrement amiable"></Image>
                        </div>
                        <div className=' md:bottom-0 flex flex-col justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-2xl '>RECOUVREMENT AMIABLE</p>
                            <p>Nous réalisons votre recouvrement amiable dans le forfait que vous souhaitez; chaque client dispose
                              d&apos;une offre précise selon ses besoins.</p>
                        </div>
                    </div>
                    <div className="relative flex-1 flex flex-col items-center">
                        <div className="w-32">
                            <Image src='/undraw_growth_analytics_re_pyxf.svg' width={932} height={568} alt="compte rendu mensuel"></Image>
                        </div>
                        <div className=' md:bottom-0 flex flex-col justify-center items-center text-center mainTextBlock-spacing'>
                            <p className='uppercase text-blue text-2xl '>COMPTE RENDU MENSUEL</p>
                            <p>Nous réalisons un suivi détaillé qu&apos;il soit mensuel ou spécialisé: si un client a régulièrement des impayés,
                              vous en serez alerté.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactCard />
        </>
    )
}
