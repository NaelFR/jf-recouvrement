import { Navbar } from "../components/Navbar";

export default function AppLayout({ children }) {
    return(
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}