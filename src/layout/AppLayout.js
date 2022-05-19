import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer'

export default function AppLayout({ children }) {
    return(
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}