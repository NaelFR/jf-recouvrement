import '../styles/globals.css'
import AppLayout from "../layout/AppLayout";

export default function MyApp({ Component, pageProps }) {
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  )
}

