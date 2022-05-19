import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const meta = {
        title: 'JF Recouvrement',
        description: "JF Recouvrement est spécialisé dans le recouvrement de créances à l'amiable. N'hésitez pas à nous contacter pour plus d'informations. Avec JF Recouvrement, la créance retrouve le sourire.",
        image: 'https://jf-recouvrement.fr/JF_Recouvrement_smile.png',
        type: 'website',
    };
    return (
        <Html>
            <Head>
                <title>{meta.title}</title>
                <link rel="icon" href="/JF.svg" />
                <link rel="mask-icon" href="/JF.svg" color="#00a1e2" />
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:url" content="https://jf-recouvrement.fr" />
                <link rel="canonical" content="https://jf-recouvrement.fr" />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="JF Recouvrement" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}